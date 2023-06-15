import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Guest } from 'src/app/models/guest';
import { GuestServiceService } from 'src/app/services/guest-service.service';

@Component({
  selector: 'app-edit-guest',
  templateUrl: './edit-guest.component.html',
  styleUrls: ['./edit-guest.component.css']
})
export class EditGuestComponent {
guestDetails : Guest = {
  id:'',
  firstName:'',
  surname:'',
  phone:0,
  email:''
};

constructor(private route:ActivatedRoute, private guestService:GuestServiceService,private router:Router){}
 ngOnInit():void{
  this.route.paramMap.subscribe({
    next: (params) =>{
      const id = params.get('id');
       if(id){
        this.guestService.getGuest(id)
        .subscribe({
          next:(response) =>{
            this.guestDetails = response;

          }
        })

      }
    }
  })
 }

 updateGuest(){
  this.guestService.updateGuest(this.guestDetails.id,this.guestDetails)
  .subscribe(
    {
      next: (response) =>{
        this.router.navigate(['guests']); 
      }
    }
  );
 }
 deleteGuest(id:string){
  this.guestService.deleteGuest(id)
  .subscribe({
    next: (response) => {
      this.router.navigate(['guests']);
    }
  });
 }
 
}
