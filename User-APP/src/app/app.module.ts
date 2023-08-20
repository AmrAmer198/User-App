import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './Component/User/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './Component/add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { EditUserComponent } from './Component/edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
