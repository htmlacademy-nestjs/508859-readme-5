import { BaseMemoryRepository } from '@project/libs/shared/core';
import { Injectable } from '@nestjs/common';
import { TextPostContentEntity } from './text-post-content.entity';

@Injectable()
export class TextPostContentRepository extends BaseMemoryRepository<TextPostContentEntity> {
    public findByPostId(id: string): Promise<TextPostContentEntity> {
        const entities = Array.from(this.entities.values());
        const entity: any = entities.find((item) => item.postId === id);
        return Promise.resolve(entity);
    }
}