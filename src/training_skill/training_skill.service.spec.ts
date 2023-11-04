import { Test, TestingModule } from '@nestjs/testing';
import { TrainingSkillService } from './training_skill.service';

describe('TrainingSkillService', () => {
  let service: TrainingSkillService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrainingSkillService],
    }).compile();

    service = module.get<TrainingSkillService>(TrainingSkillService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
