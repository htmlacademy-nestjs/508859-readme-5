import { BaseMemoryRepository } from '@project/libs/shared/core';
import { Injectable } from '@nestjs/common';
import { QuotePostContentEntity } from './quote-post-content.entity';

@Injectable()
export class QuotePostContentRepository extends BaseMemoryRepository<QuotePostContentEntity> {}