import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreatePostDto } from "./dto/create-post.dto";

@Injectable()
export class PostsRepository {
    constructor(private readonly prisma: PrismaService) { }
    async createPost(data: CreatePostDto) {
        return await this.prisma.posts.create({ data });
    }

    async getAllPots() {
        return await this.prisma.posts.findMany({});
    }

    async getPostById(id: number) {
        return await this.prisma.posts.findUnique({ where: { id } })
    }

    async deletePostById(id: number) {
        return await this.prisma.posts.delete({ where: { id } })
    }
}
