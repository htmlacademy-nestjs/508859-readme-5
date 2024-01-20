import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AuthUser, UserRole } from '@project/libs/shared/app/types';

@Schema({
  collection: 'users',
  timestamps: true,
})
export class BlogUserModel extends Document implements AuthUser {

    @Prop({
      required: true,
      unique: true,
    })
    public email: string;

    @Prop({
      required: true,
    })
    public firstName: string;

    @Prop({
      required: true,
    })
    public lastName: string;

    @Prop({
      required: true,
    })
    public dateOfBirth: Date;

    @Prop({
      required: true,
    })
    public passwordHash: string;

    @Prop({
      required: true,
      type: String,
      enum: UserRole,
      default: UserRole.User,
    })
    public role: UserRole;

    @Prop()
    public avatar: string;
}

export const BlogUserSchema = SchemaFactory.createForClass(BlogUserModel);