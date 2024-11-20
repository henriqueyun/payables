import { Test, TestingModule } from '@nestjs/testing';
import { PayablesBatchController } from './payables-batch.controller';
import { PayablesBatchService } from './payables-batch.service';

describe('PayablesBatchController', () => {
  let controller: PayablesBatchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PayablesBatchController],
      providers: [PayablesBatchService],
    }).compile();

    controller = module.get<PayablesBatchController>(PayablesBatchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
