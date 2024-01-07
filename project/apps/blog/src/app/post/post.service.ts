import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { CreatePostDto } from './dto/create-post.dto';
import dayjs from 'dayjs';
import { randomUUID } from 'crypto';
import { PostState } from '@project/libs/shared/app/types';
import { PostEntity } from './post.entity';
import { PostContentRepositoryFactory } from './post-content.factory';
import { PostError } from './post.constant';

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
        const { type, content } = dto;
        // const { email, firstName, lastName, password, dateBirth } = dto;

        const postContentRepository = this.postContentRepositoryFactory.create(type);
        const postContent = await postContentRepository.save(content);

        const newPost = {
          type,
          contentId: postContent.id,
          authorId: randomUUID(),
        //   author: {
        //     id: randomUUID(),
        //     firstName: 'Ilya',
        //     lastName: 'Kolmakov',
        //     email: 'ilkolmakov@yandex.ru'
        //   },
          dateOfBirth: dayjs(new Date()).toDate(),
          datePublication: dayjs(new Date()).toDate(),
          state: PostState.Draft,
        };

        const postEntity = await new PostEntity(newPost);

        return this.postRepository.save(postEntity);
  
        // const existUser = await this.blogUserRepository.findByEmail(email);
  
        // if (existUser) {
        //   throw new ConflictException(AUTH_USER_EXISTS);
        // }
  
        // const userEntity = await new BlogUserEntity(blogUser);
        // // INFO: Здесь устанавливаем пароль
        // const userEntityWithPassword = await userEntity.setPassword(password);
  
        // return this.blogUserRepository.save(userEntityWithPassword);
    }

    public async getPost(id: string) {
      const currentPost = await this.postRepository.findById(id);

      if (!currentPost) {
        throw new NotFoundException(PostError.NOT_FOUND_POST);
      }

      const contentPostRepository = this.postContentRepositoryFactory.create(currentPost.type);
      const currentContentPost = await contentPostRepository.findById(currentPost.contentId);
      
      if (!currentContentPost) {
        throw new NotFoundException(PostError.NOT_FOUND_POST_CONTENT);
      }

      currentPost.content = currentContentPost;

      return currentPost;
    }
}
