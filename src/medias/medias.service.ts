import { ConflictException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { MediasRepository } from './medias.repository';

@Injectable()
export class MediasService {
  constructor(private readonly mediaRepository: MediasRepository) { }

  async create(data: CreateMediaDto) {
    await this.combinationExists(data)
    return await this.mediaRepository.createmedia(data)
  }

  async findAll() {
    return await this.mediaRepository.getAllMedias();
  }

  async findOne(id: number) {
    const media = await this.mediaRepository.getMediaById(id);
    if (!media) throw new NotFoundException();
    return media;
  }

  async update(id: number, data: CreateMediaDto) {
    const media = await this.mediaRepository.getMediaById(id);
    if (!media) throw new NotFoundException();
    await this.combinationExists(data);
    const updatedMedia = await this.mediaRepository.update(id, data);
    return updatedMedia;
  }

  async remove(id: number) {
    return await this.mediaRepository.deleteMediaById(id);
  }

  async combinationExists(data: CreateMediaDto) {
    const combination = await this.mediaRepository.getCombination(data);
    if (combination) throw new ConflictException;
  }
}
