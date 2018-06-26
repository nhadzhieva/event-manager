import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { Kinvey } from 'kinvey-angular2-sdk';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../event.model';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  dataStoreType = Kinvey.DataStoreType.Cache;
  public events = this.eventsService.getEvents();

  constructor( private route: ActivatedRoute,
    private router: Router,
    private eventsService: EventsService) { }
    editEvent(event: Event) {
      this.router.navigate([ '/event', event._id]);
    }
     deleteEvent(event: Event) {
       if (confirm('You are going to delete this post!')) {
       this.eventsService.delete(event._id);
     }
   }
  ngOnInit() {
  }

}
