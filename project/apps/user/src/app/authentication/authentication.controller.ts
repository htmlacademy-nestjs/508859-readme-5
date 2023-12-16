import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { fillDto } from '@project/libs/shared/helpers';
import { AuthenticationService } from './authentication.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRdo } from './rdo/user.rdo';
import { LoginUserDto } from './dto/login-user.dto';
import { LoggedUserRdo } from './rdo/logged-user.rdo';
import { BlogUserEntity } from '../blog-user/blog-user.entity';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('authentication')
@Controller('auth')
export class AuthenticationController {
    constructor(
      private readonly authService: AuthenticationService
    ) {}
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: 'The new user has been successfully created.'
    })
    @Post('register')
    public async create(@Body() dto: CreateUserDto) {
        const newUser = await this.authService.register(dto);
        return fillDto(UserRdo, newUser.toPOJO())
    }
    
    @ApiResponse({
        type: LoggedUserRdo,
        status: HttpStatus.OK,
        description: 'User has been successfully logged.'
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: 'Password or Login is wrong.',
    })
    @Post('login')
    @HttpCode(200)
    public async login(@Body() dto: LoginUserDto) {
        const verifiedUser = await this.authService.verifyUser(dto);
        return fillDto(LoggedUserRdo, verifiedUser.toPOJO());
    }
    
    @ApiResponse({
        type: UserRdo,
        status: HttpStatus.OK,
        description: 'User found'
    })
    @Get(':id')
    public async show(@Param('id') id: string) {
        const existUser = await this.authService.getUser(id) as BlogUserEntity;
        return fillDto(UserRdo, existUser.toPOJO());
    }
  }
