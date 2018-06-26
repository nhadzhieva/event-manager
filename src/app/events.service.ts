import { Injectable } from '@angular/core';
import { Event } from './event.model';
import { Kinvey, Entity } from 'kinvey-angular2-sdk';
import { Observable } from 'rxjs';
const dataStore = Kinvey.DataStore.collection<any>('events');
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  getEvents(): Observable<Event[]> {
    return dataStore.find() as any;
  }

  getEvent(id: string): Observable<Event> {
    return dataStore.findById(id) as any;
  }
  saveEvent(event: Event): Promise<void> {
    return dataStore.save(event);
  }
  delete(id) {
    dataStore.removeById(id);
  }
}
