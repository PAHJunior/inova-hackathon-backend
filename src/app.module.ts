require('dotenv').config()
import { Module } from '@nestjs/common';
import { CoronavirusModule } from './features/coronavirus/coronavirus.module';
import { BolsaFamiliaModule } from './features/bolsa-familia/bolsa-familia.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    CoronavirusModule,
    BolsaFamiliaModule,
    MongooseModule.forRoot(`${process.env.DB_HOST}/${process.env.DB_DBNAME}`)],
})
export class AppModule {}
