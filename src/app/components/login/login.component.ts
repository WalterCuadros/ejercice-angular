import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,Params} from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service'; //Este servicio Primero se importa y luego se injecta en los providers 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]//Aqui se injecta el servicio user
})
export class LoginComponent implements OnInit {
  public title: string;
  public user: User;
  public token;
  public identity;
  public status;
  constructor(
    private _route: ActivatedRoute,
    private _router : Router,
    private _userService : UserService
  ) {
    this.title = 'Identificate';
    this.user = new User(1,'ROLE_USER','','','','');
   }

  ngOnInit(){
   let user = this._userService.getIdentity();
    this.logout();
    console.log("cargo loginnnn");
   console.log(user.name);
  }
  onSubmit(form){
    this._userService.signup(this.user).subscribe(
      response =>{
        //TOKEN
        if(response.status != 'error'){
          this.status = 'success'
          this.token = response;
          localStorage.setItem('token',this.token);
          //OBJETO DEL USUARIO IDENTIFICADO
          this._userService.signup(this.user,true).subscribe(
            response =>{
              
              this.identity = response;
              localStorage.setItem('identity',JSON.stringify(this.identity));
              this._router.navigate(['list']);
            },
            error => {
              console.log(<any>error);
            }
          );
        }else{
          this.status = 'error';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
  logout(){
    this._route.params.subscribe(
      params=>{
        let logout = +params['sure'];
        if(logout == 1){
          localStorage.removeItem('identity');
          localStorage.removeItem('token');
          this.identity=null;
          this.token=null;
          //redirección a otro componente
          this._router.navigate(['home']);
        }
      }
    )
  }
}
