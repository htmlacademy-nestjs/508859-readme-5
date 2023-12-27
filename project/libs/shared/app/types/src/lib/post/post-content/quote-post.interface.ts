import { PostContent } from './post-content.interface';

export interface QuotePost extends PostContent {
    description: string;
    author: string;
}