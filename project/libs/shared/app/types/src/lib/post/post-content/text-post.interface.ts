import { PostContent } from './post-content.interface';

export interface TextPostContent extends PostContent {
    title: string;
    announce: string;
    description: string;
}