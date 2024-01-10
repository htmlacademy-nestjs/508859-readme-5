import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { CreatePostDto } from './dto/create-post.dto';
import dayjs from 'dayjs';
import { randomUUID } from 'crypto';
import { PostState } from '@project/libs/shared/app/types';
import { PostEntity } from './post.entity';
import { PostContentRepositoryFactory } from './post-content.factory';
import { PostError } from './post.constant';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
    constructor(
      private readonly postRepository: PostRepository, 
      private readonly postContentRepositoryFactory: PostContentRepositoryFactory
    ) {}

    public async getPosts() {
        return this.postRepository.findAll();
    }

    public async createPost(dto: CreatePostDto) {
        const { type, title, content } = dto;

        const post = {
          type,
          title,
          // authorId: randomUUID(),
          author: {
            id: randomUUID(),
            firstName: 'Ilya',
            lastName: 'Kolmakov',
            email: 'ilkolmakov@yandex.ru'
          },
          dateOfBirth: dayjs(new Date()).toDate(),
          datePublication: dayjs(new Date()).toDate(),
          state: PostState.Draft,
        };

        const postEntity = await new PostEntity(post);

        const newPost = await this.postRepository.save(postEntity)

        const postContentRepository = this.postContentRepositoryFactory.create(type);
        const postContent = await postContentRepository.save({...content, postId: newPost.id});

        newPost.content = postContent;

        return newPost;
    }

    public async getPost(id: string) {
      const currentPost = await this.postRepository.findById(id);

      if (!currentPost) {
        throw new NotFoundException(PostError.NOT_FOUND_POST);
      }

      const contentPostRepository = this.postContentRepositoryFactory.create(currentPost.type);
      const currentContentPost = await contentPostRepository.findByPostId(currentPost.id);
      
      if (!currentContentPost) {
        throw new NotFoundException(PostError.NOT_FOUND_POST_CONTENT);
      }

      currentPost.content = currentContentPost;

      return currentPost;
    }

    public async updatePost(id: string, dto: UpdatePostDto) {
      const {type, title, content} = dto;
      const currentPost = await this.postRepository.findById(id);

      if (!currentPost) {
        throw new NotFoundException(PostError.NOT_FOUND_POST);
      }

      const contentPostRepository = this.postContentRepositoryFactory.create(type);
      const postContent = await contentPostRepository.save({...content, postId: currentPost.id});
      
      if (!postContent) {
        throw new NotFoundException(PostError.NOT_FOUND_POST_CONTENT);
      }

      currentPost.title = title;
      currentPost.datePublication = dayjs(new Date()).toDate();
      
      const updatedPost = await this.postRepository.save(currentPost);

      updatedPost.content = postContent;

      return updatedPost;
    }

    public async deletePost(id: string) {
      const currentPost = await this.postRepository.findById(id);

      if (!currentPost) {
        throw new NotFoundException(PostError.NOT_FOUND_POST);
      }

      if (!currentPost.content?.id) {
        throw new NotFoundException(PostError.NOT_FOUND_POST_CONTENT);
      }

      const contentPostRepository = this.postContentRepositoryFactory.create(currentPost.type);
      
      await contentPostRepository.deleteById(currentPost.content?.id);
      await this.postRepository.deleteById(currentPost.id);

      return id;
    }
}
