import { BaseMemoryRepository } from '@project/libs/shared/core';
import { Injectable } from '@nestjs/common';
import { LinkPostContentEntity } from './link-post-content.entity';

@Injectable()
export class LinkPostContentRepository extends BaseMemoryRepository<LinkPostContentEntity> {
    public findByPostId(id: string): Promise<LinkPostContentEntity> {
        const entities = Array.from(this.entities.values());
        const entity: any = entities.find((item) => item.postId === id);
        return Promise.resolve(entity);
    }
}