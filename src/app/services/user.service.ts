import{ Injectable} from'@angular/core';
import{ HttpClient,HttpHeaders} from '@angular/common/http';//Permite hacer peticiones  Ajax y usar cabeceras 
import { Observable } from 'rxjs'; //Sirve para poder recoger la respuesta del servicio del backend
import {GLOBAL} from './global';
import { User } from '../models/user';

//Se le indica que es una clase injectable
@Injectable({
    providedIn: 'root'
})//De esta forma hago la clase injectable
export class UserService{
    
    public url:string;
    public identity;
    public token;
    constructor(
        public _http: HttpClient//Se carga el servicio para poder hacer las peticiones al backend
    ){
        this.url = GLOBAL.url;
    }
    pruebas(){
        return "Hola mundo";
    }
     //Metodo para registrar usuario, pide como parametro un objeto user
    register(user): Observable<any>{
        //Transforma el objeto user en json string
        let json = JSON.stringify(user);
        let params = 'json='+json;
    
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.post(this.url+'register',params,{headers:headers});
    
      }
    signup(user,gettoken = null):  Observable<any>{
        if(gettoken != null){
            user.gettoken = 'true';
        }
        //Transforma el objeto user en json string
        let json = JSON.stringify(user);
        let params = 'json='+json;
    
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.post(this.url+'login',params,{headers:headers});
    }
    getIdentity()
    {
        let identity = JSON.parse(localStorage.getItem('identity'));
        if(identity != "undefined")
        {
            this.identity = identity
        }else{
            this.identity = null;
        }
        return this.identity;
    }
    getToken()
    {
        let token = localStorage.getItem('token');
        if(token != "undefined")
        {
            this.token = token;

        }else
        {
            this.token = null;
        }
        return this.token;
    }
    getUsuarios(): Observable<any> {
        return this._http.get('https://reqres.in/api/' + 'users?page=2');
      }
}
