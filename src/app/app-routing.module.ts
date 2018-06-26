import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { CreateEventComponent } from './create-event/create-event.component';

const routes: Routes = [ {
  path: '',
  redirectTo: '/list',
  pathMatch: 'full'
},
{
  path: 'list',
  component: EventsListComponent,
},
{
  path: 'event',
  component: CreateEventComponent,
},
{
  path: 'event/:id',
  component: CreateEventComponent,
},

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
