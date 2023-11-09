import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto';

@Controller('/api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

    @Delete('/truncate')
    @HttpCode(HttpStatus.NO_CONTENT)
    async truncate(): Promise<void> {
        await this.userService.truncate();
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Get()
    findAll() {
        return this.userService.findAll();
    }
}
