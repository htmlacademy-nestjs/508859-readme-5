import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { fillDto } from '@project/libs/shared/helpers';
import { CreatePostDto } from './dto/create-post.dto';
import { PostRdo } from './rdo/post.rdo';

@Controller('posts')
export class PostController {
    constructor(
        private readonly postService: PostService
      ) {}

    @Get('/')
    public async getPosts() {
        const postList = await this.postService.getPosts();
        // TODO: Так адекватно возвращать список?
        return postList.map((post) => post.toPOJO());
    }
    
    @Post('/create')
    public async createPost(@Body() dto: CreatePostDto) {
        const newPost = await this.postService.createPost(dto);
        return fillDto(PostRdo, newPost.toPOJO())
    }
    
    @Get('/:id')
    public async getPost(@Param('id') id: string) {
      const post = await this.postService.getPost(id);
      return fillDto(PostRdo, post.toPOJO());
    }
    
    @Post('/:id')
    public async updatePost() {

    }
    
    @Delete('/:id')
    public async deletePost() {

    }
}
