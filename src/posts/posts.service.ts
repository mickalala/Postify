import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) { }
  async create(data: CreatePostDto) {
    return await this.postsRepository.createPost(data);
  }

  async findAll() {
    return await this.postsRepository.getAllPots();
  }

  async findOne(id: number) {
    return await this.postsRepository.getPostById(id);
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  async remove(id: number) {
    return await this.postsRepository.deletePostById(id);
  }
}
