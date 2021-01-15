import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service'; //Este servicio Primero se importa y luego se injecta en los providers 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UserService]//Aqui se injecta el servicio user
})
export class RegisterComponent implements OnInit {
  public title: string;
  public user : User;
  public status: string;
  public msj: string;
  constructor(
    private _route: ActivatedRoute,
    private _router : Router,
    private _userService : UserService
  ) { 
    this.title = 'Registrate';
    this.user = new User(1,'ROLE_USER','','','','');
  }

  ngOnInit() {
    console.log('register.component caragado correctamente');
  }
  onSubmit(form){
    //console.log(this.user);
    //console.log(this._userService.pruebas());
    this._userService.register(this.user).subscribe(
      response => {
        
        if(response.status == 'succes'){
          this.status = response.status;
          //Vaciar el formulario
          this.user = new User(1,'ROLE_USER','','','','');
          form.resetForm();
        }else{
          
        }
        
      },
      error => {
        console.log('error aqui');
          this.status = 'error';
          this.msj = error.error.message;
        console.log(<any>error);
      }
    );
  }
 
 
}
