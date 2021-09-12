import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoronavirusService } from './coronavirus.service';
import { CoronavirusController } from './coronavirus.controller';
import { Coronavirus, CoronavirusSchema } from './entities/coronavirus.entity';
@Module({
  controllers: [CoronavirusController],
  providers: [CoronavirusService],
  imports: [MongooseModule.forFeature([{ name: Coronavirus.name, schema: CoronavirusSchema }])],
})
export class CoronavirusModule {}
