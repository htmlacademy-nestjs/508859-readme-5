import { BaseMemoryRepository } from '@project/libs/shared/core';
import { Injectable } from '@nestjs/common';
import { VideoPostContentEntity } from './video-post-content.entity';

@Injectable()
export class VideoPostContentRepository extends BaseMemoryRepository<VideoPostContentEntity> {}