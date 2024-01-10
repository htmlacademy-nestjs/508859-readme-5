import { User } from '../user/user.interface';

export interface Comment {
    id?: string;
    text: string;
    postId: string;
    author: string;
    dateOfBirth: Date;
}