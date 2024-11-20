import { Injectable } from '@nestjs/common';
import { PayableDTO } from './dto/PayableDTO';

@Injectable()
export class PayablesBatchService {
  create(payable: PayableDTO) {
    return 'This action adds a new payablesBatch';
  }
}
