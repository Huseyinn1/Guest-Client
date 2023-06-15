import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestsListComponent } from './components/guests/guests-list/guests-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddGuestComponent } from './components/guests/add-guest/add-guest.component';
import { FormsModule } from '@angular/forms';
import { EditGuestComponent } from './components/guests/edit-guest/edit-guest.component';


@NgModule({
  declarations: [
    AppComponent,
    GuestsListComponent,
    AddGuestComponent,
    EditGuestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
