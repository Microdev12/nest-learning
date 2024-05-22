import { Controller, Get } from '@nestjs/common';
import { ExampleService } from './example.service';

@Controller('auth')
export class ExampleController {

    constructor(private exampleService : ExampleService) {}

    @Get('')
    getExample(): string {
     return this.exampleService.getHello();
    }
}
