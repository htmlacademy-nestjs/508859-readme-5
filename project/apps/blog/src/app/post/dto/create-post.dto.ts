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
        description: 'Post content',
        // example: '1981-03-12',
    })
    public content: PostContent;
}