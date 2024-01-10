import { PostContent } from './post-content.interface';

export interface QuotePostContent extends PostContent {
    description: string;
    author: string;
}