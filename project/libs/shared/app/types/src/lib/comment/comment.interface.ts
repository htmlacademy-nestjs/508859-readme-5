// import { User } from '../user/user.interface';

export interface Comment {
    id?: string;
    text: string;
    authorId: string;
    // author: Pick<User, 'id' | 'email' | 'firstName' | 'lastName'>;
    dateOfBirth: Date;
}