import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BarkModule } from './bark/bark.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [BarkModule, UserModule, ConfigModule.forRoot({isGlobal: true}), MongooseModule.forRoot(process.env.MONGO_URL!)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
