import { LinkPostContent } from '@project/libs/shared/app/types';
import { Entity } from '@project/libs/shared/core';

export class LinkPostContentEntity implements LinkPostContent, Entity<string> {
  public id?: string;
  public link: string;
  public description: string;
  public tags?: string[] = [];

  constructor(postContent: LinkPostContent) {
    this.populate(postContent)
  }

  public toPOJO() {
    return {
      id: this.id,
      type: this.link,
      description: this.description,
      tags: this.tags,
    };
  }

  public populate(data: LinkPostContent): void {
    this.link = data.link;
    this.description = data.description;
    this.tags = data.tags;
  }
}