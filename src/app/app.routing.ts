import { Route } from '@angular/compiler/src/core';
import {ModuleWithProviders} from '@angular/core';
import{Routes,RouterModule} from '@angular/router';
import { DefaultComponent } from './components/default/default.component';
import { ListComponent } from './components/list/list.component';

//Componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const appRoutes:Routes=[
    {
        path:"",
        component:DefaultComponent,
        data: {
            titulo: 'HOME',
            descripcion: 'Pagina de inicio',
            keywords: 'usuario,listado'
        }
    },
    {
        path:'login',
        component:LoginComponent,
        data: {
            titulo: 'LOGIN',
            descripcion: 'Pagina de login',
            keywords: 'usuario,listado'
        }
    },
    {
        path:'logout/:sure',
        component:LoginComponent,
        data: {
            titulo: 'LOGIN',
            descripcion: 'Pagina de login',
            keywords: 'usuario,listado'
        }
    },
    {
        path:'register',
        component:RegisterComponent,
        data: {
            titulo: 'REGISTRATE',
            descripcion: 'Pagina de registro',
            keywords: 'usuario,listado'
        }
    },
    {
        path:'list',
        component:ListComponent,
        data:{
            titulo:'listado',
            descripcion:'Página de listado',
            keywords:'listado'
        }
    },
    {
        path:'**',
        component:DefaultComponent,
        data: {
            titulo: 'HOME',
            descripcion: 'Pagina de INICIO',
            keywords: 'usuario,listado'
        }
    },
    {
        path:'home',
        component:DefaultComponent,
        data: {
            titulo: 'HOME',
            descripcion: 'Pagina de INICIO',
            keywords: 'usuario,listado'
        }
    }
    
];
export const appRoutingProviders:any[] =[]; 
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);