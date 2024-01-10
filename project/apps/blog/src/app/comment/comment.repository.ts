import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/libs/shared/core';
import { CommentEntity } from './comment.entity';

@Injectable()
export class CommentRepository extends BaseMemoryRepository<CommentEntity> {
  findAllByPostId(postId: string) {
    const entities = Array.from(this.entities.values());
    return Promise.resolve(entities.filter((item) => item.postId === postId));
  }
}