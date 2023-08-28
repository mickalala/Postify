import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { MediasRepository } from './medias.repository';

@Injectable()
export class MediasService {
  constructor(private readonly mediaRepository: MediasRepository) { }

  async create(data: CreateMediaDto) {
    return await this.mediaRepository.createmedia(data)
  }

  async findAll() {
    return await this.mediaRepository.getAllMedias();
  }

  async findOne(id: number) {
    const media = await this.mediaRepository.getMediaById(id);
    if (!media) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    return media;
  }

  update(id: number, updateMediaDto: UpdateMediaDto) {
    return `This action updates a #${id} media`;
  }

  async remove(id: number) {
    return await this.mediaRepository.deleteMediaById(id);
  }
}
