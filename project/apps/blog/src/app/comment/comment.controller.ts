import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { GetCommentsDto } from './dto/get-comments.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { fillDto } from '@project/libs/shared/helpers';
import { CommentRdo } from './rdo/comment.rdo';
import { CommentEntity } from './comment.entity';
import { CommentService } from './comment.service';

@Controller('comments')
export class CommentController {
    constructor(
        private readonly commentService: CommentService
      ) {}

    @Post('/')
    public async getCommentsByPostId(@Body() dto: GetCommentsDto) {
        const commentListByPostId = await this.commentService.getComments(dto);
        return commentListByPostId.map((comment: CommentEntity) => comment.toPOJO());
    }

    @Post('/create')
    public async createComment(@Body() dto: CreateCommentDto) {
        const newComment = await this.commentService.create(dto);
        return fillDto(CommentRdo, newComment.toPOJO())
    }

    @Delete('/:id')
    public async deleteComment(@Param('id') id: string) {
        const commentId = await this.commentService.delete(id);
        return {id: commentId};
    }
}
