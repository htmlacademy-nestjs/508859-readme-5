import { PostContent } from './post-content.interface';

export interface LinkPostContent extends PostContent {
    link: string;
    description: string;
}