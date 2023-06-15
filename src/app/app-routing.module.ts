import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestsListComponent } from './components/guests/guests-list/guests-list.component';
import { AddGuestComponent } from './components/guests/add-guest/add-guest.component';
import { EditGuestComponent } from './components/guests/edit-guest/edit-guest.component';

const routes: Routes = [
  {
    path:'',
    component:GuestsListComponent
  },
  {
    path:'guests',
    component:GuestsListComponent


  },
  {
    path:'guests/add',
    component:AddGuestComponent


  },
  {
    path:'guests/edit/:id',
    component:EditGuestComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
