import { Test, TestingModule } from '@nestjs/testing';
import { CoronavirusController } from './coronavirus.controller';
import { CoronavirusService } from './coronavirus.service';

describe('CoronavirusController', () => {
  let controller: CoronavirusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoronavirusController],
      providers: [CoronavirusService],
    }).compile();

    controller = module.get<CoronavirusController>(CoronavirusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
