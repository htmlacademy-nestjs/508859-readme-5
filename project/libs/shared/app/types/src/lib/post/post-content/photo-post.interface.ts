import { PostContent } from './post-content.interface';

export interface PhotoPost extends PostContent {
    img: File;
}