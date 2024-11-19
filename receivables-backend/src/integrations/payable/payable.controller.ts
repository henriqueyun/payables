import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { PayableService } from "./payable.service";
import { PayableDTO } from "./dto/PayableDTO";

@Controller('integration/payable')
export class PayableController {

    constructor(private service: PayableService) { }
    @Post()
    create(@Body() dto: PayableDTO) {
        return this.service.createPayable(dto)
    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return await this.service.findPayable(id)
    }
}