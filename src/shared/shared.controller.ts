import { Controller, Post, Res, HttpStatus, HttpCode, Param, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import { SharedService } from './shared.service';
import { TableSeederDto } from './dto';
import { TableEnum } from './entities';

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
    async seedTable(@Body() tableSeederDto: TableSeederDto) {
      console.log('seedTable', tableSeederDto)
      try {
            if(tableSeederDto.tbl_name === TableEnum.TRAINING_SKILL){
                return await this.sharedService.seedTrainingSkillTbl();
            }

            if(tableSeederDto.tbl_name === TableEnum.EMERGENCY){
                return await this.sharedService.seedEmergencyTbl();
            }

            if(tableSeederDto.tbl_name === TableEnum.BART){
                return await this.sharedService.seedBartTbl();
            }

            if(tableSeederDto.tbl_name === TableEnum.CSO){
                return await this.sharedService.seedCsoTbl();
            }

            if(tableSeederDto.tbl_name === TableEnum.PO){
                return await this.sharedService.seedPoTbl();
            }

            if(tableSeederDto.tbl_name === TableEnum.NA){
                return await this.sharedService.seedNaTbl();
            }

            if(tableSeederDto.tbl_name === TableEnum.USER){
                return await this.sharedService.seedUserTbl();
            }

            if(tableSeederDto.tbl_name === TableEnum.TEAM){
                return await this.sharedService.seedTeamTbl();
            }

            if(tableSeederDto.tbl_name === TableEnum.TEAM_MEMBER){
                return await this.sharedService.seedTeamMemberTbl();
            }

            if(tableSeederDto.tbl_name === TableEnum.USER_SKILL){
                return await this.sharedService.seedUserSkillTbl();
            }

            if(tableSeederDto.tbl_name === TableEnum.SKILL_CERTIFICATE){
                return await this.sharedService.seedSkillCertificateTbl();
            }

            return 'Table seeding completed!'
        } catch (error) {
            return 'Table seeding failed! ' + error;
        }
    }
    
}
