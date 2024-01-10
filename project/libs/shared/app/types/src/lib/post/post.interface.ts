import { User } from '../user/user.interface';
import { LinkPostContent, PhotoPostContent, QuotePostContent, TextPostContent, VideoPostContent } from './post-content';
import { PostState } from './post-state.enum';
import { PostType } from './post-type.enum';

type PostContent = VideoPostContent | TextPostContent | QuotePostContent | PhotoPostContent | LinkPostContent;

export interface Post {
    id?: string;
    title: string;
    type: PostType;
    content?: PostContent;
    author: Pick<User, 'id' | 'email' | 'firstName' | 'lastName'>;
    dateOfBirth: Date;
    datePublication: Date;
    state: PostState;
    tags?: string[]; 
    countLikes?: number;
    countComments?: number;
}