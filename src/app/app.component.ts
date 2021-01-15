import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client-angular';
  public identity;
  public token;
  constructor(
    private _userService: UserService
  ){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }
  ngOnInit(){

  }
  
}
