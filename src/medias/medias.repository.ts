import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateMediaDto } from "./dto/create-media.dto";

@Injectable()
export class MediasRepository {

    constructor(private readonly prisma: PrismaService) { }
    async createmedia(data: CreateMediaDto) {
        return await this.prisma.medias.create({ data });
    }

    async getAllMedias() {
        return await this.prisma.medias.findMany({});
    }

    async getMediaById(id: number) {
        return await this.prisma.medias.findUnique({ where: { id: id } });
    }

    async deleteMediaById(id: number) {
        return await this.prisma.medias.delete({ where: { id } });
    }
    async getCombination(data: CreateMediaDto) {
        return this.prisma.medias.findFirst({ where: data });
    }
    async update(id: number, data: CreateMediaDto) {
        return await this.prisma.medias.update({ data, where: { id } });
    }

}