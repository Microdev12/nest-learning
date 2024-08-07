import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExampleController } from './example/example.controller';
import { ExampleService } from './example/example.service';
import { productModule } from './product/product.module';
import { LoginModule } from './login/login.module';
import { RegistrationModule } from './registration/registration.module';

@Module({
  imports: [productModule, LoginModule, MongooseModule.forRoot('mongodb+srv://adityasingh:Rfh12345@atlascluster.a5bp3rj.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster'), RegistrationModule],
  controllers: [AppController, ExampleController],
  providers: [AppService, ExampleService],
})
export class AppModule {}
