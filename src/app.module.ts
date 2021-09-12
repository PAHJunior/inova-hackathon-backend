require('dotenv').config()
import { Module } from '@nestjs/common';
import { CoronavirusModule } from './features/coronavirus/coronavirus.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProposalsModule } from './features/proposals/proposals.module';
@Module({
  imports: [
    CoronavirusModule,
    MongooseModule.forRoot(`${process.env.DB_HOST}/${process.env.DB_DBNAME}`),
    ProposalsModule],
})
export class AppModule {}
