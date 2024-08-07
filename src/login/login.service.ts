import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class LoginService {
    
    loginProcess(userId, password) {

        if(userId !== '' && password !== '') {
            if(userId === 'Aditya'){
                if(password === 'Rfh@1234') {
                 return 'Login Successfully'
                }else {
                    return 'Incorrect Password!.'
                }
            }else {
                return 'Username is incorrect or not present in our database'
               // throw new NotFoundException('Username or Password Incorrect. Please enter the valid Username & Password')
            }

        }else {
            throw new NotFoundException('Username & Password could not be empty.')
        }

    }

}
