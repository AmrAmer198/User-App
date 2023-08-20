import { Component , OnInit } from '@angular/core';
import { User } from 'src/app/Model/User.model';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

 user:User[]=[]

  constructor(private userServices:UsersService){}



  ngOnInit():void{

    this.userServices.getAllUsers().subscribe({
      next:(user)=>{
        this.user = user
      },
      error:(response:any)=>{
        console.log(response)
      }
    })
       
    
  }
}
