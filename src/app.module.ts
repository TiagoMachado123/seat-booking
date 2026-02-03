import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SeatsController } from './seats/seats.controller';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { SeatsService } from './seats/seats.service';

@Module({
  imports: [],
  controllers: [AppController, SeatsController, AuthController],
  providers: [AppService, AuthService, SeatsService],
})
export class AppModule {}
