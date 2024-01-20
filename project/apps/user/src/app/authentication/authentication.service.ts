import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { BlogUserRepository } from '../blog-user/blog-user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRole } from '@project/libs/shared/app/types';
import dayjs from 'dayjs';
import { AUTH_USER_EXISTS, AUTH_USER_NOT_FOUND, AUTH_USER_PASSWORD_WRONG } from './authentication.constant';
import { BlogUserEntity } from '../blog-user/blog-user.entity';
import { LoginUserDto } from './dto/login-user.dto';
import { ChangePasswordDto } from './dto/change-password.dto';

@Injectable()
export class AuthenticationService {
    constructor(
        private readonly blogUserRepository: BlogUserRepository
    ) {}

    public async register(dto: CreateUserDto) {
      const { email, firstName, lastName, password, dateBirth } = dto;

      const blogUser = {
        email,
        firstName,
        lastName,
        role: UserRole.User,
        avatar: '',
        dateOfBirth: dayjs(dateBirth).toDate(),
        passwordHash: '',
      };

      const existUser = await this.blogUserRepository.findByEmail(email);

      if (existUser) {
        throw new ConflictException(AUTH_USER_EXISTS);
      }

      const userEntity = await new BlogUserEntity(blogUser);
      // INFO: Здесь устанавливаем пароль
      const userEntityWithPassword = await userEntity.setPassword(password);

      return this.blogUserRepository.save(userEntityWithPassword);
    }

    public async verifyUser(dto: LoginUserDto) {
        const {email, password} = dto;
        const existUser = await this.blogUserRepository.findByEmail(email);
    
        if (!existUser) {
          throw new NotFoundException(AUTH_USER_NOT_FOUND);
        }
    
        if (!await existUser.comparePassword(password)) {
          throw new UnauthorizedException(AUTH_USER_PASSWORD_WRONG);
        }
    
        return existUser;
      }

      public async changePassword(dto: ChangePasswordDto) {
        const {currentPassword, newPassword} = dto;
         
      }
    
      // public async getUser(id: string) {
      //   return this.blogUserRepository.findById(id);
      // }
}
