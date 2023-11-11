import { Test, TestingModule } from '@nestjs/testing';
import { BarkController } from './bark.controller';
import { BarkService } from './bark.service';

describe('BarkController', () => {
  let controller: BarkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BarkController],
      providers: [BarkService],
    }).compile();

    controller = module.get<BarkController>(BarkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
