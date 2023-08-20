import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { User } from 'src/app/Model/User.model';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userDetails:User = {
    id:0,
    name:'',
    isActive:true
  }
  constructor(private route :ActivatedRoute, private userServices:UsersService, private  router:Router){

  }

  ngOnInit():void{
    // this.route.paramMap.subscribe({
    //   next:(params)=>{
    //     const id = parseInt(params.get('id') ?? '0'); // declare and initialize 'id' variable
  
    //     if(id){
    //       this.userServices.getUser(id)
    //       .subscribe({
    //         next:(response)=>{
    //           this.userDetails = response
    //         }
    //       })
    //     }
    //   }
    // })
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id') ?? '0');
  
      if (id) {
        this.userServices.getUser(id)
          .subscribe(response => {
            this.userDetails = response;
          });
      }
    });
  }

  updateUser(){
    this.userServices.updateUsers(this.userDetails.id,this.userDetails)
    .subscribe({
      next:(respnse)=>{
        this.router.navigate(['user'])
      }
    })
  }
deleteUser(id:number){
  this.userServices.deleteUser(id).subscribe({
    next:(response)=>{
      this.router.navigate(['user'])
    }
  })
}
}
