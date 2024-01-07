import { User } from '../user/user.interface';
import { PostState } from './post-state.enum';
import { PostType } from './post-type.enum';

export interface Post {
    id?: string;
    type: PostType;
    contentId: string;
    content?: any;
    authorId: string;
    // author: Pick<User, 'id' | 'email' | 'firstName' | 'lastName'>
    dateOfBirth: Date;
    datePublication: Date;
    state: PostState;
    countLikes?: number;
    countComments?: number;
}