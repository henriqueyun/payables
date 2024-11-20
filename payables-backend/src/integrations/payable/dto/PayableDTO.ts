import { IsArray, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator'

export class PayableDTO {
    @IsUUID()
    @IsOptional()
    id: string;

    @IsNumber()
    @IsNotEmpty()
    value: number;

    @IsDateString()
    @IsNotEmpty()
    emissionDate: Date;

    @IsString()
    @IsNotEmpty()
    assignor: string;
}

export class PayableBatchDTO {
    @IsArray()
    payables: []
}