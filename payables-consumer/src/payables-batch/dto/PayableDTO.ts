import { AssignorDTO } from "./AssignorDTO"
import { ReceivableDTO } from "./ReceivableDTO"

export class PayableDTO {
    receivable: ReceivableDTO
    assignor: AssignorDTO
}