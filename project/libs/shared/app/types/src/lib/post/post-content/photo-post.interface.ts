import { PostContent } from './post-content.interface';

export interface PhotoPostContent extends PostContent {
    img: File;
}