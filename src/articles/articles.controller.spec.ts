import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesController } from './articles.controller';
import { AppService } from '../app.service';

describe('Articles Controller', () => {
  let articlesController: ArticlesController;

  beforeEach(async () => {
    const articles: TestingModule = await Test.createTestingModule({
      controllers: [ArticlesController],
      providers: [AppService],
    }).compile();

    articlesController = articles.get<ArticlesController>(ArticlesController);
  });

  describe('root', () => {
    it('should return "an article uuid"', () => {
      expect(articlesController.getOneArticle('5670e64d-b4ac-4485-bd76-244666d1a775')).toBe(
        `This action returns a 5670e64d-b4ac-4485-bd76-244666d1a775 article`);
    });
  });
});
