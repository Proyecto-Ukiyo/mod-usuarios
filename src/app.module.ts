import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PerfilesModule } from './modulos/perfiles/perfiles.module';

@Module({
  imports: [PerfilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
