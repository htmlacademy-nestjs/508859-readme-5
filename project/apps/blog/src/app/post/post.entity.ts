import { Post, PostState, PostType, User } from '@project/libs/shared/app/types';
import { Entity } from '@project/libs/shared/core';
import { PostContent } from './types';

export class PostEntity implements Post, Entity<string> {
  public id?: string;
  public title: string;
  public type: PostType;
  public content?: PostContent;
  public author: Pick<User, 'id' | 'email' | 'firstName' | 'lastName'>;
  // public authorId: string;
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
      title: this.title,
      type: this.type,
      content: this.content,
      // authorId: this.authorId,
      author: this.author,
      dateOfBirth: this.dateOfBirth,
      datePublication: this.datePublication,
      state: this.state,
      countLikes: this.countLikes || 0,
      countComments: this.countComments || 0
    };
  }

  // Позволяет заполнить экземпляр
  public populate(data: Post): void {
    this.title = data.title;
    this.type = data.type;
    this.content = data.content;
    this.author = data.author;
    this.dateOfBirth = data.dateOfBirth;
    this.datePublication = data.datePublication;
    this.state = data.state;
    this.countLikes = data.countLikes;
    this.countComments = data.countComments;
  }
}