import { Kinvey } from 'kinvey-angular2-sdk';
export class Event implements Kinvey.Entity {
         _id: string;
         name: string;
         location: string;
         startDate: string;
         endDate: string;
}
