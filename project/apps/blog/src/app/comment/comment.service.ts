import { Injectable, NotFoundException } from '@nestjs/common';
import dayjs from 'dayjs';
import { CommentRepository } from './comment.repository';
import { GetCommentsDto } from './dto/get-comments.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentError } from './comment.constant';
import { CommentEntity } from './comment.entity';

@Injectable()
export class CommentService {
    constructor(
      private readonly commentRepository: CommentRepository,
    ) {}

    public async getComments(dto: GetCommentsDto) {
        const {postId} = dto;
        return this.commentRepository.findAllByPostId(postId);
    }

    public async create(dto: CreateCommentDto) {
        const { text, postId } = dto;

        const comment = {
          text,
          postId,
          dateOfBirth: dayjs(new Date()).toDate(),
          // TODO: Получаем пользователя и записываем его как автора комментария
          author: 'Ilya Kolmakov'
        }

        const commentEntity = await new CommentEntity(comment);

        const newComment = await this.commentRepository.save(commentEntity)

        return newComment;
    }

    public async delete(id: string) {
      const currentComment = await this.commentRepository.findById(id);

      if (!currentComment) {
        throw new NotFoundException(CommentError.NOT_FOUND_COMMENT);
      }

      await this.commentRepository.deleteById(currentComment.id);

      return id;
    }
}
