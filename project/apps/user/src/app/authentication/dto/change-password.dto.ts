import { ApiProperty } from '@nestjs/swagger';

export class ChangePasswordDto {
    @ApiProperty({
        description: 'Current user password',
        example: '123456',
    })
    public currentPassword: string;
    @ApiProperty({
        description: 'New user password',
        example: '12345678'
    })
    public newPassword: string;
}