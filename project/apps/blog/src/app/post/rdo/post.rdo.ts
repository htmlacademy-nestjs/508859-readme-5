import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { PostState } from '@project/libs/shared/app/types';

export class PostRdo {
    @ApiProperty({
        description: 'The uniq post ID',
        example: '16'
    })
    @Expose()
    public id: string;
    
    @ApiProperty({
        description: 'Post type',
        example: 'text'
    })
    @Expose()
    public type: string;
    
    @ApiProperty({
        description: 'Post date birth (ISO format)',
        example: '1981-03-12'
    })
    @Expose()
    public dateOfBirth: string;

    @ApiProperty({
        description: 'Post publication (ISO format)',
        example: '1981-03-12'
    })
    @Expose()
    public datePublication: string;

    // TODO: Пока неизвестно как показывать изменяемую информацию здесь
    @ApiProperty({
        description: 'Post content id',
        // example: ''
    })
    @Expose()
    contentId: string;
    // // content: object;

    @ApiProperty({
        description: 'Post content',
    })
    @Expose()
    content: any;

    // TODO: Пока неизвестно как показывать автора
    @ApiProperty({
        description: 'Post author id',
        // example: ''
    })
    @Expose()
    // author: object;
    authorId: string;

    @ApiProperty({
        description: 'Post state',
        example: PostState.Published,
        enum: PostState,
        enumName: 'PostState'
    })
    @Expose()
    state: PostState;
}