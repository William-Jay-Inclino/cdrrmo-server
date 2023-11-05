import { Injectable } from '@nestjs/common';
import { CreateEmergencyDto } from './dto/create-emergency.dto';
import { UpdateEmergencyDto } from './dto/update-emergency.dto';

@Injectable()
export class EmergencyService {
  create(createEmergencyDto: CreateEmergencyDto) {
    return 'This action adds a new emergency';
  }

  findAll() {
    return `This action returns all emergency`;
  }

  findOne(id: number) {
    return `This action returns a #${id} emergency`;
  }

  update(id: number, updateEmergencyDto: UpdateEmergencyDto) {
    return `This action updates a #${id} emergency`;
  }

  remove(id: number) {
    return `This action removes a #${id} emergency`;
  }
}
