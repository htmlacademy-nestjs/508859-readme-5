import { Comment } from '@project/libs/shared/app/types';
import { Entity } from '@project/libs/shared/core';

export class CommentEntity implements Comment, Entity<string> {
  public id?: string;
  public text: string;
  public postId: string;
  public author: string;
  public dateOfBirth: Date;

  constructor(comment: Comment) {
    this.populate(comment)
  }
  // plain old java object
  // Возвращает все поля в виде объекта
  // Вызываем метод когда будем возвращать данные клиенту
  public toPOJO() {
    return {
      id: this.id,
      text: this.text,
      postId: this.postId,
      author: this.author,
      dateOfBirth: this.dateOfBirth,
    };
  }

  // Позволяет заполнить экземпляр
  public populate(data: Comment): void {
    this.text = data.text;
    this.postId = data.postId;
    this.author = data.author;
    this.dateOfBirth = data.dateOfBirth;
  }
}