import { User } from '../user/user.interface';
import { PostState } from './post-state.enum';
import { PostType } from './post-type.enum';

export interface Post {
    id?: string;
    type: PostType;
    contentId: string;
    authorId: string;
    // author: Pick<User, 'id' | 'email' | 'firstName' | 'lastName'>
    dateOfBirth: Date;
    datePublish: Date;
    state: PostState;
    countLikes?: number;
    countComments?: number;
}