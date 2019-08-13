import { Injectable } from '@nestjs/common';
import {Article} from '../interface/article.interface';

@Injectable()
export class ArticlesService {
    private readonly articles: Article[] = [];

    createOneArticle(article: Article) {
        this.articles.push(article);
    }

    findAllArticles(): Article[] {
        return this.articles;
    }

    getFoo(): Promise<any> {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve('foo');
            }, 300);
        });
    }

    getBar(): Promise<any> {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve('bar');
            }, 3000);
        });
    }

    static getHello(): string {
        return 'Hello World!';
    }
}
