import { Injectable } from '@nestjs/common';
import { CreatePublicationsDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';
import { PublicationsRepository } from './publications.repository';

@Injectable()
export class PublicationsService {
  constructor(private readonly publicationsRepository: PublicationsRepository) { }

  async create(data: CreatePublicationsDto) {
    return await this.publicationsRepository.createPublication(data);
  }

  async findAll() {
    return await this.publicationsRepository.getAllPublications();
  }

  async findOne(id: number) {
    return await this.publicationsRepository.getPublicationById(id);
  }

  update(id: number, updatePublicationDto: UpdatePublicationDto) {
    return `This action updates a #${id} publication`;
  }

  async remove(id: number) {
    return await this.publicationsRepository.deletePublicationById(id);
  }
}
