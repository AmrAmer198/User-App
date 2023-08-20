import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './Component/User/user/user.component';
import { AddUserComponent } from './Component/add-user/add-user.component';
import { EditUserComponent } from './Component/edit-user/edit-user.component';

const routes: Routes = [
  {path:'',redirectTo:'user',pathMatch:'full'},
    {path: 'user', component: UserComponent },
    {path: 'add', component: AddUserComponent },
    {path: 'edit/:id', component: EditUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
