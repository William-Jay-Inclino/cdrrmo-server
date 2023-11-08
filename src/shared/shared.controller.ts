import { Controller } from '@nestjs/common';
import { SharedService } from './shared.service';

@Controller('/api/v1/shared')
export class SharedController {
    constructor(private readonly sharedService: SharedService){}

    async seedData(){
        this.sharedService.seedData()
    }

    async seedTrainingSkills(){
        this.sharedService.seedTrainingSkills()
    }
    
}
