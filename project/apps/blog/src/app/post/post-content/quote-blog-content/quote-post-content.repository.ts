import { BaseMemoryRepository } from '@project/libs/shared/core';
import { Injectable } from '@nestjs/common';
import { QuotePostContentEntity } from './quote-post-content.entity';

@Injectable()
export class QuotePostContentRepository extends BaseMemoryRepository<QuotePostContentEntity> {
    public findByPostId(id: string): Promise<QuotePostContentEntity> {
        const entities = Array.from(this.entities.values());
        const entity: any = entities.find((item) => item.postId === id);
        return Promise.resolve(entity);
    }
}