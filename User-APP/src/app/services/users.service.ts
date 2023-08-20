import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { User } from '../Model/User.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

baseApiUrl:string = environment.baseApiUrl
// https://localhost:7050/api/User/GetAllUser
// https://localhost:7050/api/User/GetUserById
  constructor(private http:HttpClient) { }

  getAllUsers():Observable<User[]>{
   return this.http.get<User[]>(this.baseApiUrl + '/api/User/GetAllUser')
  }
 
  addUser(addUserRequest:User):Observable<User>{
return this.http.post<User>(this.baseApiUrl + '/api/User',addUserRequest)
  } 
  getUser(id:number):Observable<User>{
    const url:any = `https://localhost:7050/api/User/GetUserById?id=${id}`;

   return this.http.get<User>(url);
  }

  updateUsers(id:number, updatedUserRequest:User):Observable<User>{
    const url:any=`https://localhost:7050/api/User/${id}`
    return this.http.put<User>(url,updatedUserRequest)
  }
  deleteUser(id:number):Observable<User>{
    const url:any=`https://localhost:7050/api/User/${id}`
    return this.http.delete<User>(url)
  }
}


// `https://localhost:7050/api/User/${id}`