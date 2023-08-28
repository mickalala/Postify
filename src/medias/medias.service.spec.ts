import { Test, TestingModule } from '@nestjs/testing';
import { MediasService } from './medias.service';
import { MediasRepository } from './medias.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { NotFoundException } from '@nestjs/common';

describe('MediasService', () => {
  let service: MediasService;
  let repository: MediasRepository;
  let prisma: PrismaService = new PrismaService();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediasService, MediasRepository, PrismaService],
    }).overrideProvider(PrismaService)
      .useValue(prisma).compile();

    service = module.get<MediasService>(MediasService);
    repository = module.get<MediasRepository>(MediasRepository);
  });

  describe('Post Media', () => {
    it('should create new media', async () => {

      const mediaDto = new CreateMediaDto();
      mediaDto.title = 'test-title';
      mediaDto.username = 'test-username';

      const serviceResponse = {
        id: 1,
        title: mediaDto.title,
        username: mediaDto.username
      }

      const createdMedia = await service.create(mediaDto);
      expect(createdMedia).toEqual(serviceResponse);
    });
  });

  describe('get all medias', () => {

    it('should get empty array', async () => {
      jest.spyOn(repository, 'getAllMedias').mockResolvedValueOnce([]);
      const medias = await service.findAll();
      expect(medias).toHaveLength(0);
    });

    it('should get all medias', async () => {
      jest.spyOn(repository, 'getAllMedias').mockResolvedValueOnce([
        {
          id: 1,
          title: 'mockedTitle',
          username: 'mockedUsername'
        }
      ]);
      const medias = await service.findAll();
      expect(medias).toEqual([{ id: 1, title: 'mockedTitle', username: 'mockedUsername' }])
    });
  });
  describe('get one media by id', () => {

    it('should receive not found error', () => {
      jest.spyOn(repository, 'getMediaById').mockResolvedValueOnce(null);
      const medias = service.findOne(1);
      expect(medias).rejects.toThrow(new NotFoundException);
    })
  })
});
