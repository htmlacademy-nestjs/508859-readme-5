import { TextPostContent } from '@project/libs/shared/app/types';
import { Entity } from '@project/libs/shared/core';

export class TextPostContentEntity implements TextPostContent, Entity<string> {
  public id?: string;
  public postId?: string;
  public description: string;
  public title: string;
  public announce: string;

  constructor(postContent: TextPostContent) {
    this.populate(postContent)
  }

  public toPOJO() {
    return {
      id: this.id,
      postId: this.postId,
      description: this.description,
      title: this.title,
      announce: this.announce,
    };
  }

  public populate(data: TextPostContent): void {
    this.postId = data.postId;
    this.title = data.title;
    this.announce = data.announce;
    this.description = data.description;
  }
}