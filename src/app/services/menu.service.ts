import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }


  public menu = [
    {
      titulo: 'Login',
      ruta: 'login',
      icono: '',
      hijos: [

      ]
    },
    {
      titulo: 'Registrate',
      ruta: 'register',
      icono: '',
      hijos: [

      ]
    }
  ];

  public traerMenu() {

  }
}
