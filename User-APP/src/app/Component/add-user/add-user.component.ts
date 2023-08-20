import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
addUserRequest:User={

  id:0,
  name:'',
  isActive:true
 
}

constructor(private userServices:UsersService , private  router:Router){

}
addUser(){
 this.userServices.addUser(this.addUserRequest )
 .subscribe({
  next:(user)=>{
    this.router.navigate(['user'])
  }
 })
}
}
