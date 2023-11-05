import { Test, TestingModule } from '@nestjs/testing';
import { TrainingSkillController } from './training_skill.controller';
import { TrainingSkillService } from './training_skill.service';

describe('TrainingSkillController', () => {
  let controller: TrainingSkillController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainingSkillController],
      providers: [TrainingSkillService],
    }).compile();

    controller = module.get<TrainingSkillController>(TrainingSkillController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
