import { Test, TestingModule } from '@nestjs/testing';
import { ShortPollingController } from './short-polling.controller';

describe('ShortPollingController', () => {
  let controller: ShortPollingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShortPollingController],
    }).compile();

    controller = module.get<ShortPollingController>(ShortPollingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
