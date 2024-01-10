import { PhotoPostContent } from '@project/libs/shared/app/types';
import { Entity } from '@project/libs/shared/core';

export class PhotoPostContentEntity implements PhotoPostContent, Entity<string> {
  public id?: string;
  public postId?: string;
  public img: File;

  constructor(postContent: PhotoPostContent) {
    this.populate(postContent)
  }

  public toPOJO() {
    return {
      id: this.id,
      postId: this.postId,
      img: this.img,
    };
  }

  public populate(data: PhotoPostContent): void {
    this.postId = data.postId;
    this.img = data.img;
  }
}