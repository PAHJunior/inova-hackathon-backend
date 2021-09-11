import { Test, TestingModule } from '@nestjs/testing';
import { CoronavirusService } from './coronavirus.service';

describe('CoronavirusService', () => {
  let service: CoronavirusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoronavirusService],
    }).compile();

    service = module.get<CoronavirusService>(CoronavirusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
