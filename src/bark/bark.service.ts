import { Injectable } from '@nestjs/common';
import { CreateBarkDto } from './dto/create-bark.dto';
import { UpdateBarkDto } from './dto/update-bark.dto';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class BarkService {
  
  constructor(@InjectConnection() private connection: Connection) {}

  create(createBarkDto: CreateBarkDto) {
    return 'This action adds a new Bark';
  }

  findMany(word: string) {
    return `This action returns a Bark with this word: #${word}`;
  }

  findOne(id: number) {
    return `This action returns a #${id} Bark`;
  }

  update(id: number, updateBarkDto: UpdateBarkDto) {
    return `This action updates a #${id} Bark`;
  }

  remove(id: number) {
    return `This action removes a #${id} Bark`;
  }
}
