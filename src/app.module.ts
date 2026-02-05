import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SeatsController } from './seats/seats.controller';
import { SeatsService } from './seats/seats.service';

@Module({
  imports: [],
  controllers: [AppController, SeatsController],
  providers: [AppService, SeatsService],
})
export class AppModule {}
