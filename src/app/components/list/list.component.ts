import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,Params} from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service'; 

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public data;
  private identity;
  private token;
  constructor(
    private _route: ActivatedRoute,
    private _router : Router,
    private _userService : UserService
  ) { }

  ngOnInit() {
    this.get_is_login();
    this.getUsuarios();
    
  }
  getUsuarios() {
    this._userService.getUsuarios().subscribe(
      response => {
        this.data = response.data;
        console.log(this.data);

      },
      error => {
        console.log(error);
      }

    );
  }
  get_is_login(){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    if(this.identity == null && this.token == null ){
      this._router.navigate(['home']);
    }
  }
}
