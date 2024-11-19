import { AssignorDTO } from "../../assignor/dto/AssignorDTO"
import { ReceivableDTO } from "./ReceivableDTO"

export class PayableDTO {
    receivable: ReceivableDTO
    assignor: AssignorDTO
}