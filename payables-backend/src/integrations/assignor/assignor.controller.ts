import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AssignorService } from './assignor.service';
import { AssignorDTO } from './dto/AssignorDTO';

@Controller('integration/assignor')
export class AssignorController {
  constructor(private readonly service: AssignorService) { }

  @Post()
  async create(@Body() dto: AssignorDTO) {
    return await this.service.create(dto)
  }

  @Get()
  async findAll(@Param('id') id: string) {
    return await this.service.findAll()
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.find(id)
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: Partial<AssignorDTO>) {
    return await this.service.update(id, dto)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.service.remove(id)
  }
}
