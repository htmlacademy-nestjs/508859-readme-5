
import { compare, genSalt, hash } from 'bcrypt';
import { AuthUser, UserRole } from '@project/libs/shared/app/types';
import { Entity } from '@project/libs/shared/core';
import { SALT_ROUNDS } from './blog-user.constant';

export class BlogUserEntity implements AuthUser, Entity<string> {
  public id?: string;
  public email: string;
  public firstName: string;
  public lastName: string;
  public dateOfBirth: Date;
  public role: UserRole;
  public passwordHash: string;
  public countPublications?: number; 
  public countSubscribers?: number;

  constructor(user: AuthUser) {
    this.populate(user)
  }
  // plain old java object
  // Возвращает все поля в виде объекта
  // Вызываем метод когда будем возвращать данные клиенту
  public toPOJO() {
    return {
      id: this.id,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      dateOfBirth: this.dateOfBirth,
      role: this.role,
      passwordHash: this.passwordHash,
      countPublications: this.countPublications || 0,
      countSubscribers: this.countSubscribers || 0
    };
  }

  // Позволяет заполнить экземпляр
  public populate(data: AuthUser): void {
    this.email = data.email;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.dateOfBirth = data.dateOfBirth;
    this.role = data.role;
    this.countPublications = data.countPublications;
    this.countSubscribers = data.countSubscribers;
  }

  public async setPassword(password: string): Promise<BlogUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);

    return this;
  } 

  public async comparePassword(password: string): Promise<boolean> {
    console.log('password', password, this.passwordHash);
    return compare(password, this.passwordHash);
  }

}