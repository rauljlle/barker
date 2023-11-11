import { Module } from '@nestjs/common';
import { BarkService } from './bark.service';
import { BarkController } from './bark.controller';

@Module({
  controllers: [BarkController],
  providers: [BarkService],
})
export class BarkModule {}
