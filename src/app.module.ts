import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MediasService } from './medias/medias.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MediasService],
})
export class AppModule {}
