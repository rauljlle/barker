import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BarkModule } from './bark/bark.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [BarkModule, UserModule, ConfigModule.forRoot({isGlobal: true}), MongooseModule.forRoot(process.env.MONGO_URL!), ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
