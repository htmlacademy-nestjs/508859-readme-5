import { ApiProperty } from '@nestjs/swagger'; 

export class GetCommentsDto {
    @ApiProperty({
        description: 'Post id for view comments',
        example: '123'
    })
    public postId: string;
}