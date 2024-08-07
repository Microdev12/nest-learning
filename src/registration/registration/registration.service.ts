import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Registration } from './registration.model';



@Injectable()
export class RegistrationService {

    constructor(@InjectModel('Registration') private readonly RegistrationModel: Model<Registration>) {

    }

   async insertUser(name : string, lastname : string, email : string, password : string, contact : number) {
    
    
    console.log(name,lastname,email,password,contact)   
     
     const registration = new this.RegistrationModel({ firstName : name , lastName : lastname , email, password , contact})
     const registrationSave = await registration.save()

     console.log(registrationSave)


    }

}
