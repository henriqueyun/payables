import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator'

export class ReceivableDTO {
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