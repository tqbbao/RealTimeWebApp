import { Test, TestingModule } from '@nestjs/testing';
import { ShortPollingService } from './short-polling.service';

describe('ShortPollingService', () => {
  let service: ShortPollingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShortPollingService],
    }).compile();

    service = module.get<ShortPollingService>(ShortPollingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
