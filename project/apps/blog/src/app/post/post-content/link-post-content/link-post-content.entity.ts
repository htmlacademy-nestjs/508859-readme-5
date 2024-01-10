import { LinkPostContent } from '@project/libs/shared/app/types';
import { Entity } from '@project/libs/shared/core';

export class LinkPostContentEntity implements LinkPostContent, Entity<string> {
  public id?: string;
  public postId?: string;
  public link: string;
  public description: string;

  constructor(postContent: LinkPostContent) {
    this.populate(postContent)
  }

  public toPOJO() {
    return {
      id: this.id,
      postId: this.postId,
      type: this.link,
      description: this.description,
    };
  }

  public populate(data: LinkPostContent): void {
    this.postId = data.postId;
    this.link = data.link;
    this.description = data.description;
  }
}