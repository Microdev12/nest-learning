import { Body, Controller, Post } from '@nestjs/common';
import { RegistrationService } from './registration.service';

@Controller('registration')
export class RegistrationController {

constructor(private registrationService : RegistrationService) {

}


@Post()
registerUser(@Body('firstName') firstName : string, @Body('lastName') lastName : string,  @Body('email') email : string, @Body('password') password : string, @Body('contactNo') contact:number) {

 console.log(firstName,lastName,email,password,contact)   
 const registerUserResponse = this.registrationService.insertUser(firstName, lastName, email, password, contact)

 console.log('run hua')

}

}


