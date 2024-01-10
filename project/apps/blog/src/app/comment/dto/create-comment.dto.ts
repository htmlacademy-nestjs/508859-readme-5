import { ApiProperty } from '@nestjs/swagger'; 

export class CreateCommentDto {
    @ApiProperty({
        description: 'Text comment',
        example: 'text'
    })
    public text: string;

    @ApiProperty({
        description: 'Post id',
        example: '123'
    })
    public postId: string;
}