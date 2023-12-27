import { PostContent } from './post-content.interface';

export interface VideoPost extends PostContent {
    title: string;
    link: string;
}