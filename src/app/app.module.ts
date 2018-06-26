import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule, Injectable } from '@angular/core';

import { AppComponent } from './app.component';
import { Kinvey } from 'kinvey-angular2-sdk';
import { EventsListComponent } from './events-list/events-list.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { AppRoutingModule } from './/app-routing.module';

import {MatListModule, MatNavList} from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RouterModule, Router, CanActivate } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    MatListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatChipsModule,
    MatCheckboxModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
