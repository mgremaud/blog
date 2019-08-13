import { Controller, Get, Put, Post, Delete, Req, Param, ParseUUIDPipe, Body } from '@nestjs/common';
import { AppService } from '../app.service';
import { Request } from 'express';
import { Observable, of } from 'rxjs';
import { CreateArticleDto } from './model/create-article.dto';

@Controller('articles')
export class ArticlesController {
    constructor(private readonly appService: AppService) {}
    @Get()
  findAllArticles(@Req() request: Request): Observable<any[]> {
    return of([]);
  }

    @Get(':uuid')
  getOneArticle(@Param('uuid', new ParseUUIDPipe()) uuid): string {
    return `This action returns a ${uuid} article`;
  }

  @Post()
  async createOneArticle(@Body() CreateArticleDto: CreateArticleDto): Promise<any[]> {
    return ['This action adds a new article'];
  }

  @Put()
  putOneArticle(): string {
    return this.appService.getHello();
  }

  @Delete()
  deleteOneArticle(): string {
    return this.appService.getHello();
  }
}
