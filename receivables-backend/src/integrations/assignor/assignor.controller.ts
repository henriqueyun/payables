import { Controller, Get, Param } from '@nestjs/common';
import { AssignorService } from './assignor.service';

@Controller('integrations/assignor/')
export class AssignorController {
  constructor(private readonly assignorService: AssignorService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.assignorService.find(id)
  }
}
