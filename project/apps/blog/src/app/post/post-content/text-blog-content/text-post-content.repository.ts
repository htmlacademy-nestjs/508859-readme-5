import { BaseMemoryRepository } from '@project/libs/shared/core';
import { Injectable } from '@nestjs/common';
import { TextPostContentEntity } from './text-post-content.entity';

@Injectable()
export class TextPostContentRepository extends BaseMemoryRepository<TextPostContentEntity> {}