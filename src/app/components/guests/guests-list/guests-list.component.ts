import { Component } from '@angular/core';
import { Guest } from 'src/app/models/guest';
import { GuestServiceService } from 'src/app/services/guest-service.service';

@Component({
  selector: 'app-guests-list',
  templateUrl: './guests-list.component.html',
  styleUrls: ['./guests-list.component.css']
})
export class GuestsListComponent {

  constructor(private guestService:GuestServiceService){}
  guests:Guest[]=[];
  
  ngOnInit(): void{
    this.guestService.getAllGuest().subscribe(
      {
        next: (guests) =>{
          this.guests=guests;
        },
        error:(response) => {
          console.log(response);
        }
      }
    )
  }
}
