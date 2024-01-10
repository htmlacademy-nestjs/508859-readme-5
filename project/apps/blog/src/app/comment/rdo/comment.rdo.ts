import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CommentRdo {
    @ApiProperty({
        description: 'The uniq comment ID',
        example: '16'
    })
    @Expose()
    public id: string;

    @ApiProperty({
        description: 'Comment text',
        example: 'text'
    })
    @Expose()
    public text: string;
    
    @ApiProperty({
        description: 'Post date birth (ISO format)',
        example: '1981-03-12'
    })
    @Expose()
    public dateOfBirth: string;

    @ApiProperty({
        description: 'Post id for comment',
        example: '123'
    })
    @Expose()
    public postId: string;

    @ApiProperty({
        description: 'Comment author',
        example: 'Ilya Kolmakov'
    })
    @Expose()
    author: string;
}