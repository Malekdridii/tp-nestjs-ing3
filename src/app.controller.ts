import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

@Controller('travel')
export class TravelController {

  @Post()
  create(): string {
    return "planifier un nouveau voyage ici";
  }
}
