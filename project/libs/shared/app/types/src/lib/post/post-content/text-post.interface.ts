import { PostContent } from './post-content.interface';

export interface TextPost extends PostContent {
    title: string;
    announce: string;
    description: string;
}