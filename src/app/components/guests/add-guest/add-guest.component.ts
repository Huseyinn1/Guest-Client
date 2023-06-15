import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Guest } from 'src/app/models/guest';
import { GuestServiceService } from 'src/app/services/guest-service.service';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.css']
})
export class AddGuestComponent {

  addGuestRequest : Guest ={
    id:'',
    firstName:'',
    surname:'',
    phone:0,
    email:''
  }
constructor(private guestService:GuestServiceService,private router:Router){}

ngOnInit(): void{

}
addGuest(){
  this.guestService.addGuest(this.addGuestRequest)
  .subscribe(
    {
      next: (guest)=>{
       this.router.navigate(['guests'])

      }
    }
  );
  
}

}
