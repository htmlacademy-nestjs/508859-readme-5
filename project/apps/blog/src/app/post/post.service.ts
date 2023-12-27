import { Injectable } from '@nestjs/common';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
    constructor(private readonly postRepository: PostRepository) {}

    public async getPosts() {
        return this.postRepository.findAll();
    }

    public async createPost() {
        
    }
}
