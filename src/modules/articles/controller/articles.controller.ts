import { Controller, Get, Put, Post, Delete, Req, Param, ParseUUIDPipe, Body } from '@nestjs/common';
import { ArticlesService } from '../service/articles.service';
import { Request } from 'express';
import { Observable, of } from 'rxjs';
import { CreateArticleDto } from '../create-article.dto';

@Controller('articles')
export class ArticlesController {
    constructor(private readonly articleService: ArticlesService) {}
    @Get()
  findAllArticles(@Req() request: Request): Observable<any[]> {
    return of([]);
  }

    @Get(':uuid')
  async getOneArticle(@Param('uuid', new ParseUUIDPipe()) uuid): Promise<any> {
      return Promise.all([this.articleService.getFoo(), this.articleService.getBar()]).then((values) => {
        return values[0] + ' ' + values[1] + ' ' + `${uuid}`;
      });
      // return `This action returns a ${uuid} article`;
  }

  @Post()
  async createOneArticle(@Body() CreateArticleDto: CreateArticleDto): Promise<any[]> {
    return ['This action adds a new article'];
  }

  @Put()
  putOneArticle(): string {
    return ArticlesService.getHello();
  }

  @Delete()
  deleteOneArticle(): string {
    return ArticlesService.getHello();
  }
}
