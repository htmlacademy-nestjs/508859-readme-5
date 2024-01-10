import { Body, Controller, Delete, Get, HttpCode, Param, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { fillDto } from '@project/libs/shared/helpers';
import { CreatePostDto } from './dto/create-post.dto';
import { PostRdo } from './rdo/post.rdo';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostController {
    constructor(
        private readonly postService: PostService
      ) {}

    @Get('/')
    public async getPosts() {
        const postList = await this.postService.getPosts();
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
    @HttpCode(200)
    public async updatePost(@Param('id') id: string, @Body() dto: UpdatePostDto) {
      const post = await this.postService.updatePost(id, dto);
      return fillDto(PostRdo, post.toPOJO());
    }
    
    @Delete('/:id')
    public async deletePost(@Param('id') id: string) {
      const postId = await this.postService.deletePost(id);
      return {id: postId};
    }
}
