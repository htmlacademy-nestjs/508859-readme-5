import { BaseMemoryRepository } from '@project/libs/shared/core';
import { Injectable } from '@nestjs/common';
import { PostEntity } from './post.entity';

@Injectable()
export class PostRepository extends BaseMemoryRepository<PostEntity> {
    public findAll(): Promise<PostEntity[]> {
        const entities = Array.from(this.entities.values());
        return Promise.resolve(entities);
    }
}