import { QuotePostContent } from '@project/libs/shared/app/types';
import { Entity } from '@project/libs/shared/core';

export class QuotePostContentEntity implements QuotePostContent, Entity<string> {
  public id?: string;
  public postId?: string;
  public description: string;
  public author: string;

  constructor(postContent: QuotePostContent) {
    this.populate(postContent)
  }

  public toPOJO() {
    return {
      id: this.id,
      postId: this.postId,
      description: this.description,
      author: this.author,
    };
  }

  public populate(data: QuotePostContent): void {
    this.postId = data.postId;
    this.author = data.author;
    this.description = data.description;
  }
}