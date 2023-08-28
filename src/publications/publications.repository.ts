import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreatePublicationsDto } from "./dto/create-publication.dto";

@Injectable()
export class PublicationsRepository {
    constructor(private readonly prisma: PrismaService) { }
    async createPublication(data: CreatePublicationsDto) {
        return await this.prisma.publications.create({ data });
    }

    async getAllPublications() {
        return await this.prisma.publications.findMany({});
    }

    async getPublicationById(id: number) {
        return await this.prisma.publications.findUnique({ where: { id } })
    }

    async deletePublicationById(id: number) {
        return await this.prisma.publications.delete({ where: { id } })
    }
}