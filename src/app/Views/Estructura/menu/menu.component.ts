import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuApiService } from 'src/app/Services/Menu/menu-api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  idUsuario: any;

  usuario = {
    idUsuario: 0,
    nick: '',
    idRol: 0,
    rol: ''
  }
 

  constructor(private service: MenuApiService, private _route: ActivatedRoute, private _router:Router) {

    this.idUsuario = this._route.snapshot.paramMap.get('id');

    this.getRolUsuario();
  }

  ngOnInit(): void {

  }

  getRolUsuario() {
    if(this.idUsuario>0){
      this.service.getRolUsuario(this.idUsuario).subscribe(
        (data) => {
            this.usuario.idUsuario= data[0].idUsuario,
            this.usuario.nick= data[0].nick,
            this.usuario.idRol = data[0].idRol,
            this.usuario.rol=data[0].rol
        },
        (error) => {
          console.error(error);
        }
      )
    }
    
  }

  /*  ------- Botones Menu ------ */
 
}
