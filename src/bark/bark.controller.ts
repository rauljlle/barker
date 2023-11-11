import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BarkService } from './bark.service';
import { CreateBarkDto } from './dto/create-bark.dto';
import { UpdateBarkDto } from './dto/update-bark.dto';

@Controller('bark')
export class BarkController {
  constructor(private readonly barkService: BarkService) {}

  @Post()
  create(@Body() createBarkDto: CreateBarkDto) {
    return this.barkService.create(createBarkDto);
  }

  @Get(':word')
  findMany(@Param('word') word: string) {
    return this.barkService.findMany(word);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.barkService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBarkDto: UpdateBarkDto) {
    return this.barkService.update(+id, updateBarkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.barkService.remove(+id);
  }
}
