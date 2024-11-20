import { Body, Controller, Delete, Get, Param, Patch, Post,} from "@nestjs/common";
import { PayableService } from "./payable.service";
import { PayableDTO, PayableBatchDTO } from "./dto/PayableDTO"

@Controller('integration/payable')
export class PayableController {

    constructor(private service: PayableService) { }
    @Post()
    create(@Body() dto: PayableDTO) {
        return this.service.create(dto)
    }
    
    @Post('batch')
    batch(@Body() dto: PayableBatchDTO) {
        return this.service.batchCreate(dto)
    }

    @Get()
    async findAll() {
        return await this.service.findAll()
    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return await this.service.find(id)
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() dto: Partial<PayableDTO>) {
      return await this.service.update(id, dto)
    }
  
    @Delete(':id')
    async remove(@Param('id') id: string) {
      return await this.service.remove(id)
    }
}