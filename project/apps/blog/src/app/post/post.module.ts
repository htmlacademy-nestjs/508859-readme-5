import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PostRepository } from './post.repository';
import { LinkPostContentRepository, PhotoPostContentRepository, QuotePostContentRepository, TextPostContentRepository, VideoPostContentRepository } from './post-content';
import { PostContentRepositoryFactory } from './post-content.factory';

@Module({
  controllers: [PostController],
  providers: [
    PostService, 
    PostRepository,  
    LinkPostContentRepository, 
    PhotoPostContentRepository,
    QuotePostContentRepository,
    TextPostContentRepository,
    VideoPostContentRepository,
    PostContentRepositoryFactory,
  ],
  // imports: [PostContentRepositoryFactory]
})
export class PostModule {}
