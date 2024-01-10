import { PostContent } from './post-content.interface';

export interface VideoPostContent extends PostContent {
    title: string;
    link: string;
}