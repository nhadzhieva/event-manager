import { Component, OnInit, ViewChild } from '@angular/core';
import { Event } from '../event.model';
import { NgForm } from '@angular/forms';
import { EventsService } from '../events.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { filter } from 'rxjs/internal/operators/filter';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { Kinvey } from 'kinvey-angular2-sdk';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
public event = new Event();
editedEvent = new Event();
@ViewChild('form') form: NgForm;
  constructor(
    private eventsService: EventsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(parmMap => parmMap.get('id') as string),
      filter(id => !!id),
      switchMap(id => this.eventsService.getEvent(id))
    ).subscribe(
      event => {
        console.log(event);
        this.form.resetForm(event);
        this.editedEvent = event;
      },
    );
  }
  onSubmit() {
    this.eventsService.saveEvent(this.editedEvent);
    this.router.navigate(['/list']);
  }
}
