import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { fillDto } from '@project/libs/shared/helpers';
import { UserRdo } from './rdo/user.rdo';
import { BlogUserEntity } from '../blog-user/blog-user.entity';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { BlogUserService } from './blog-user.service';

@ApiTags('user')
@Controller('users')
export class BlogUserController {
    constructor(
      private readonly blogUserService: BlogUserService
    ) {}
    
    @ApiResponse({
        type: UserRdo,
        status: HttpStatus.OK,
        description: 'User found'
    })
    @Get(':id')
    public async getUser(@Param('id') id: string) {
        const existUser = await this.blogUserService.getUser(id) as BlogUserEntity;
        return fillDto(UserRdo, existUser.toPOJO());
    }
  }
