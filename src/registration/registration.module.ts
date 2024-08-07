import { Module } from '@nestjs/common';
import { RegistrationController } from './registration/registration.controller';
import { RegistrationService } from './registration/registration.service';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { registrationSchema } from './registration/registration.model';

@Module({
  imports : [MongooseModule.forFeature([ {name : 'Registration', schema: registrationSchema }])],
  controllers: [RegistrationController],
  providers: [RegistrationService]
})
export class RegistrationModule {}
