import { BaseMemoryRepository } from '@project/libs/shared/core';
import { Injectable } from '@nestjs/common';
import { LinkPostContentEntity } from './link-post-content.entity';

@Injectable()
export class LinkPostContentRepository extends BaseMemoryRepository<LinkPostContentEntity> {}