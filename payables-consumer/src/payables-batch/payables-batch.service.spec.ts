import { Test, TestingModule } from '@nestjs/testing';
import { PayablesBatchService } from './payables-batch.service';

describe('PayablesBatchService', () => {
  let service: PayablesBatchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PayablesBatchService],
    }).compile();

    service = module.get<PayablesBatchService>(PayablesBatchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
