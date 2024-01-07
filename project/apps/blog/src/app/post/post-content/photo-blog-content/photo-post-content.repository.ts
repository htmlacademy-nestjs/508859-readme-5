import { BaseMemoryRepository } from '@project/libs/shared/core';
import { Injectable } from '@nestjs/common';
import { PhotoPostContentEntity } from './photo-post-content.entity';

@Injectable()
export class PhotoPostContentRepository extends BaseMemoryRepository<PhotoPostContentEntity> {}