import { PostContent } from './post-content.interface';

export interface LinkPost extends PostContent {
    link: string;
    description: string;
}