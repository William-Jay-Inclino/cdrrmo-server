import { Controller, Post, Res, HttpStatus, HttpCode, Param, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import { SeederService } from './seeder.service';
import { TableSeederDto } from './dto';
import { TableEnum } from '../../shared/entities';

@Controller('/api/v1/seeder')
export class SeederController {
    constructor(private readonly seederService: SeederService){}

    // seed entire database
    @Post('/seed-data')
    @HttpCode(HttpStatus.OK)
    async seedData() {
      try {
        await this.seederService.seedData();
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
        await this.seederService.truncateDb();
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
                return await this.seederService.seedTrainingSkillTbl();
            }

            if(tableSeederDto.tbl_name === TableEnum.EMERGENCY){
                return await this.seederService.seedEmergencyTbl();
            }

            if(tableSeederDto.tbl_name === TableEnum.BART){
                return await this.seederService.seedBartTbl();
            }

            if(tableSeederDto.tbl_name === TableEnum.CSO){
                return await this.seederService.seedCsoTbl();
            }

            if(tableSeederDto.tbl_name === TableEnum.PO){
                return await this.seederService.seedPoTbl();
            }

            if(tableSeederDto.tbl_name === TableEnum.NA){
                return await this.seederService.seedNaTbl();
            }

            if(tableSeederDto.tbl_name === TableEnum.USER){
                return await this.seederService.seedUserTbl();
            }

            if(tableSeederDto.tbl_name === TableEnum.TEAM){
                return await this.seederService.seedTeamTbl();
            }

            if(tableSeederDto.tbl_name === TableEnum.TEAM_MEMBER){
                return await this.seederService.seedTeamMemberTbl();
            }

            if(tableSeederDto.tbl_name === TableEnum.USER_SKILL){
                return await this.seederService.seedUserSkillTbl();
            }

            if(tableSeederDto.tbl_name === TableEnum.SKILL_CERTIFICATE){
                return await this.seederService.seedSkillCertificateTbl();
            }

            return 'Table seeding completed!'
        } catch (error) {
            return 'Table seeding failed! ' + error;
        }
    }
    
}
