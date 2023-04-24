import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerfilApiService } from 'src/app/Services/Perfil/perfil-api.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {


  idUsuario:any;
  rutaURL:any
  datosPerfil:any;

  constructor(private servicePeril:PerfilApiService,private _route: ActivatedRoute) { 

    this.rutaURL = window.location.pathname.split('/');
    this.idUsuario = this.rutaURL[2];
  
    this.getDatosPerfil();
  }

  ngOnInit(): void {
  }


  getDatosPerfil(){
    
    this.servicePeril.getdatosPerfil(Number(this.idUsuario)).subscribe(
      (data)=>{
        console.log('datos del perfil logueado: ',data)
        this.datosPerfil=data;
      },
      (error)=>{
        console.log(error)
      }
    )
  }

}
