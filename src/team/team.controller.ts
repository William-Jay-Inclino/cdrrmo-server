import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UsePipes, ValidationPipe } from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from '@prisma/client';
import { TeamMemberDto } from './dto';

@Controller('/api/v1/team')
export class TeamController {
	constructor(private readonly teamService: TeamService) {}

	@Delete('/truncate')
	@HttpCode(HttpStatus.NO_CONTENT)
	async truncate(): Promise<void> {
		await this.teamService.truncate();
	}

	@Post()
	@UsePipes(new ValidationPipe())
	async create(@Body() createTeamDto: CreateTeamDto): Promise<CreateTeamDto> {
		return await this.teamService.create(createTeamDto);
	}

  @Post('/member')
	@UsePipes(new ValidationPipe())
	async addMemberToTeam(@Body() teamMemberDto: TeamMemberDto): Promise<TeamMemberDto> {
		return await this.teamService.addMemberToTeam(teamMemberDto);
	}

	@Get()
	async findAll(): Promise<Team[]> {
		return await this.teamService.findAll();
	}

	@Get(':id')
	async findOne(@Param('id') id: string): Promise<Team> {
		const team = await this.teamService.findOne(id);
		return team;
	}

	@Patch(':id')
	@UsePipes(new ValidationPipe())
	async update(
		@Param('id') id: string,
		@Body() updateTeamDto: UpdateTeamDto
	): Promise<Team> {
		const updatedTeam = await this.teamService.update(id, updateTeamDto);
		return updatedTeam;
	}

	@Delete(':id')
	@HttpCode(HttpStatus.NO_CONTENT)
	async remove(@Param('id') id: string): Promise<void> {
		await this.teamService.remove(id);
	}

  @Delete('/member/:id')
	@HttpCode(HttpStatus.NO_CONTENT)
	async removeMemberInTeam(@Param('id') id: string): Promise<void> {
		await this.teamService.removeMemberInTeam(id);
	}
}
