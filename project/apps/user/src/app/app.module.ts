import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BlogUserModule } from './blog-user/blog-user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ConfigUserModule, getMongooseOptions } from '@project/libs/shared/config/user';
@Module({
  imports: [
    BlogUserModule, 
    AuthenticationModule, 
    ConfigUserModule,
    MongooseModule.forRootAsync(
      getMongooseOptions()
    )
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
