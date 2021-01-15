import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,Params} from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service'; //Este servicio Primero se importa y luego se injecta en los providers 

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
  providers:[UserService]//Aqui se injecta el servicio user
})
export class DefaultComponent implements OnInit {
  public title: string;
  constructor(
    private _route: ActivatedRoute,
    private _router : Router,
    private _userService : UserService
  ) { 
    this.title = 'Identificate';
  }

  ngOnInit(): void {
  }

}
