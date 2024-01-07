import { TextPostContent } from '@project/libs/shared/app/types';
import { Entity } from '@project/libs/shared/core';

export class TextPostContentEntity implements TextPostContent, Entity<string> {
  public id?: string;
  public description: string;
  public title: string;
  public announce: string;
  public tags?: string[] = [];

  constructor(postContent: TextPostContent) {
    this.populate(postContent)
  }

  public toPOJO() {
    return {
      id: this.id,
      description: this.description,
      title: this.title,
      announce: this.announce,
      tags: this.tags,
    };
  }

  public populate(data: TextPostContent): void {
    this.title = data.title;
    this.announce = data.announce;
    this.description = data.description;
    this.tags = data.tags;
  }
}