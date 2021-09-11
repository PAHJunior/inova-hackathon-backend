import { Module } from '@nestjs/common';
import { CoronavirusModule } from './features/coronavirus/coronavirus.module';
import { BolsaFamiliaModule } from './features/bolsa-familia/bolsa-familia.module';

@Module({
  imports: [CoronavirusModule, BolsaFamiliaModule],
})
export class AppModule {}
