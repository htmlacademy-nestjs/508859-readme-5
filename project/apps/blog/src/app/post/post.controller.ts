import { Controller, Get } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
    constructor(
        private readonly postService: PostService
      ) {}

    @Get()
    public async getPosts() {
        const postList = await this.postService.getPosts();
        // TODO: Так адекватно возвраать список?
        return postList.map((post) => post.toPOJO());
    }
}
