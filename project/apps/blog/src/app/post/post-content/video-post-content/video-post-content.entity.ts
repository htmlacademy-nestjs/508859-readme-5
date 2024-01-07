import { VideoPostContent } from '@project/libs/shared/app/types';
import { Entity } from '@project/libs/shared/core';

export class VideoPostContentEntity implements VideoPostContent, Entity<string> {
  public id?: string;
  public title: string;
  public link: string;
  public tags?: string[] = [];

  constructor(postContent: VideoPostContent) {
    this.populate(postContent)
  }

  public toPOJO() {
    return {
      id: this.id,
      title: this.title,
      link: this.link,
      tags: this.tags,
    };
  }

  public populate(data: VideoPostContent): void {
    this.title = data.title;
    this.link = data.link;
    this.tags = data.tags;
  }
}