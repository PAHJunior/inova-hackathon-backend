import { Module } from '@nestjs/common';
import { CoronavirusService } from './coronavirus.service';
import { CoronavirusController } from './coronavirus.controller';

@Module({
  controllers: [CoronavirusController],
  providers: [CoronavirusService],
})
export class CoronavirusModule {}
