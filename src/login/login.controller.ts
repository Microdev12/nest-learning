import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {

    constructor(private loginService : LoginService) {

    }

    @Post()
    loginUser(@Body('username') userName : string, @Body('password') password : string) {
       const loginResponse = this.loginService.loginProcess(userName, password)
       return loginResponse;
    }

}

 