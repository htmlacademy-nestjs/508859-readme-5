import { BaseMemoryRepository } from '@project/libs/shared/core';
import { Injectable } from '@nestjs/common';
import { VideoPostContentEntity } from './video-post-content.entity';

@Injectable()
export class VideoPostContentRepository extends BaseMemoryRepository<VideoPostContentEntity> {
    public findByPostId(id: string): Promise<VideoPostContentEntity> {
        const entities = Array.from(this.entities.values());
        const entity: any = entities.find((item) => item.postId === id);
        return Promise.resolve(entity);
    }
}