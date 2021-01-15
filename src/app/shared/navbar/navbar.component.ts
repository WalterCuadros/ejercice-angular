import { Component, OnInit,DoCheck } from '@angular/core';
import{ Router,ActivationEnd } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[UserService]
})
export class NavbarComponent implements OnInit,DoCheck {
  public titulo: string;
  public identity;
  public token;
  constructor(
    
    public _menu: MenuService,
    private _router: Router,
    private _title: Title,
    private _meta: Meta,
    private _userService:UserService

  ) {
    this.getDataRoute().subscribe((data) => {
      this.titulo = data.titulo;
      this._title.setTitle(this.titulo);
      const metaDescription: MetaDefinition = {
        name: 'description',
        content: data.descripcion
      };
      const metaKeywords: MetaDefinition = {
        name: 'keywords',
        content: data.keywords
      };
      this._meta.updateTag(metaDescription);
      this._meta.updateTag(metaKeywords);

    });
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
   }

  ngOnInit(): void {
  }
  getDataRoute() {
    return this._router.events.pipe(
      filter((evento) => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild == null),
      map((evento: ActivationEnd) => evento.snapshot.data)
    );
  }
  ngDoCheck(){
    console.log("Se cargo el Docheck");
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    
  }
}
