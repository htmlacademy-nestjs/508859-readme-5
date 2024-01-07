import { Post, PostState, PostType } from '@project/libs/shared/app/types';
import { Entity } from '@project/libs/shared/core';

export class PostEntity implements Post, Entity<string> {
  public id?: string;
  public type: PostType;
  public contentId: string;
  // TODO: Временное решение
  public content?: any;
  public authorId: string;
  public dateOfBirth: Date;
  public datePublication: Date;
  public state: PostState;
  public countLikes?: number; 
  public countComments?: number;

  constructor(post: Post) {
    this.populate(post)
  }
  // plain old java object
  // Возвращает все поля в виде объекта
  // Вызываем метод когда будем возвращать данные клиенту
  public toPOJO() {
    return {
      id: this.id,
      type: this.type,
      // TODO: Какими должны быть параметры здесь?
      contentId: this.contentId,
      content: this.content,
      
      authorId: this.authorId,
      dateOfBirth: this.dateOfBirth,
      datePublication: this.datePublication,
      state: this.state,
      countLikes: this.countLikes || 0,
      countComments: this.countComments || 0
    };
  }

  // Позволяет заполнить экземпляр
  public populate(data: Post): void {
    this.type = data.type;

    this.contentId = data.contentId;
    this.content = data.content;

    this.authorId = data.authorId;
    this.dateOfBirth = data.dateOfBirth;
    this.datePublication = data.datePublication;
    this.state = data.state;
    this.countLikes = data.countLikes;
    this.countComments = data.countComments;
  }
}