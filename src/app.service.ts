import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private trips= [
    {
      id: 1,name: 'to china',price:9000},
    {
      id: 2,name: 'to morocco',price:4000}
  ];

 findAll(){
    return this.trips;
 }
 getHello(): string {
  return 'Hello World!';
}
findOne(id: number) {
  return this.trips.find(trip => trip.id === id);
}

}
