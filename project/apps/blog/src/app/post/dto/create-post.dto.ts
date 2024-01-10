import { ApiProperty } from '@nestjs/swagger'; 
import { PostContent } from '../types';
import { PostType } from '@project/libs/shared/app/types';

export class CreatePostDto {
    @ApiProperty({
        description: 'Post type',
        example: 'text'
    })
    public type: PostType;

    @ApiProperty({
        description: 'Post title',
        example: 'title for post'
    })
    public title: string;

    @ApiProperty({
        description: 'Post content',
    })
    public content: PostContent;
}