import { BaseMemoryRepository } from '@project/libs/shared/core';
import { Injectable } from '@nestjs/common';
import { PhotoPostContentEntity } from './photo-post-content.entity';

@Injectable()
export class PhotoPostContentRepository extends BaseMemoryRepository<PhotoPostContentEntity> {
    public findByPostId(id: string): Promise<PhotoPostContentEntity> {
        const entities = Array.from(this.entities.values());
        const entity: any = entities.find((item) => item.postId === id);
        return Promise.resolve(entity);
    }
}