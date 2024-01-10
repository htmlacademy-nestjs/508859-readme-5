import { Injectable } from '@nestjs/common';
import { PostType } from '@project/libs/shared/app/types';
import { 
  LinkPostContentRepository, 
  PhotoPostContentRepository, 
  QuotePostContentRepository, 
  TextPostContentRepository, 
  VideoPostContentRepository 
} from './post-content';
import { Repository } from '@project/libs/shared/core';

@Injectable()
export class PostContentRepositoryFactory {

  constructor(
    private readonly linkPostContentRepository: LinkPostContentRepository, 
    private readonly photoPostContentRepository: PhotoPostContentRepository,
    private readonly quotePostContentRepository: QuotePostContentRepository,
    private readonly videoPostContentRepository: VideoPostContentRepository,
    private readonly textPostContentRepository: TextPostContentRepository
  ) {}

  create(type: PostType): any { // Repository<any> 
    switch (type) {
      case PostType.Link:
        return this.linkPostContentRepository;
      case PostType.Photo:
        return this.photoPostContentRepository;
      case PostType.Quote:
        return this.quotePostContentRepository;
      case PostType.Video:
        return this.videoPostContentRepository;
      case PostType.Text:
        return this.textPostContentRepository;
      default: 
        throw new Error(`Invalid post type: ${type}`);
    }
  }
}