import { Controller, Post, Res, HttpStatus, HttpCode, Param, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import { SharedService } from './shared.service';
import { TableEnum, TableSeederDto } from './dto';

@Controller('/api/v1/shared')
export class SharedController {
    constructor(private readonly sharedService: SharedService){}

    // seed entire database
    @Post('/seed-data')
    @HttpCode(HttpStatus.OK)
    async seedData() {
      try {
        await this.sharedService.seedData();
        return 'Data seeding successful.';
      } catch (error) {
        return 'Data seeding failed.';
      }
    }

    // truncate entire database
    @Post('/truncate-db')
    @HttpCode(HttpStatus.OK)
    async truncateDb() {
      try {
        await this.sharedService.truncateDb();
        return 'Truncate DB successful.';
      } catch (error) {
        return 'Truncate DB failed.';
      }
    }

    // seed per table
    @Post('/seed-table')
    @UsePipes(new ValidationPipe())
    @HttpCode(HttpStatus.OK)
    async seedTable(@Body() tableSeederDto: TableSeederDto) {
      try {

        if(tableSeederDto.tbl_name === TableEnum.TRAINING_SKILL){
            await this.sharedService.seedTrainingSkillTbl();
        }

        return 'Table seeding successful.';
      } catch (error) {
        return 'Table seeding failed.';
      }
    }
    
}
