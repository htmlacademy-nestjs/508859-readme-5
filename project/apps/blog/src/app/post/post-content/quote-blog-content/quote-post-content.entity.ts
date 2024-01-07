import { QuotePostContent } from '@project/libs/shared/app/types';
import { Entity } from '@project/libs/shared/core';

export class QuotePostContentEntity implements QuotePostContent, Entity<string> {
  public id?: string;
  public description: string;
  public author: string;
  public tags?: string[] = [];

  constructor(postContent: QuotePostContent) {
    this.populate(postContent)
  }

  public toPOJO() {
    return {
      id: this.id,
      description: this.description,
      author: this.author,
      tags: this.tags,
    };
  }

  public populate(data: QuotePostContent): void {
    this.author = data.author;
    this.description = data.description;
    this.tags = data.tags;
  }
}