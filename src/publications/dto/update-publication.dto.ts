import { PartialType } from '@nestjs/mapped-types';
import { CreatePublicationsDto } from './create-publication.dto';

export class UpdatePublicationDto extends PartialType(CreatePublicationsDto) {}
