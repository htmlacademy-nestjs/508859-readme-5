import { PhotoPostContent } from '@project/libs/shared/app/types';
import { Entity } from '@project/libs/shared/core';

export class PhotoPostContentEntity implements PhotoPostContent, Entity<string> {
  public id?: string;
  public img: File;
  public tags?: string[] = [];

  constructor(postContent: PhotoPostContent) {
    this.populate(postContent)
  }

  public toPOJO() {
    return {
      id: this.id,
      img: this.img,
      tags: this.tags,
    };
  }

  public populate(data: PhotoPostContent): void {
    this.img = data.img;
    this.tags = data.tags;
  }
}