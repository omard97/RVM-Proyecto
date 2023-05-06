import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuApiService } from 'src/app/Services/Menu/menu-api.service';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { PerfilApiService } from 'src/app/Services/Perfil/perfil-api.service';
import { FormControl, Validators } from '@angular/forms';
import { datosperfil, putUsuario } from 'src/app/Model/perfil';
import { UsuarioApiService } from 'src/app/Services/Usuario/usuario-api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nombrePersonaCtrl = new FormControl('', [Validators.required]);
  apellidoPersonaCtrl = new FormControl('', [Validators.required]);
  celularCtrl = new FormControl('', [Validators.required]);
  dniCtrl = new FormControl('', [Validators.required]);
  correoCtrl = new FormControl('', [Validators.required]);
  contraseniaCtrl = new FormControl('', [Validators.required]);
  nombreUsuarioCtrl = new FormControl('', [Validators.required]);
  fotoCtrl = new FormControl('', [Validators.required]);



  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  idUsuario: any;
  datosPerfil: any;
  usuario = {
    idUsuario: 0,
    nick: '',
    idRol: 0,
    rol: ''
  }

  banderaActualizarPerfil: boolean = false;



  constructor(private breakpointObserver: BreakpointObserver, private service: MenuApiService, private _route: ActivatedRoute, private servicePerfil: PerfilApiService, private serviceUsuario: UsuarioApiService, private _router: Router) {

    this.idUsuario = this._route.snapshot.paramMap.get('id');

    this.getRolUsuario();
  }

  ngOnInit(): void {

  }

  getRolUsuario() {
    if (this.idUsuario > 0) {
      this.service.getRolUsuario(this.idUsuario).subscribe(
        (data) => {
          this.usuario.idUsuario = data[0].idUsuario,
            this.usuario.nick = data[0].nick,
            this.usuario.idRol = data[0].idRol,
            this.usuario.rol = data[0].rol
        },
        (error) => {
          console.error(error);
        }
      )
    }

  }

  /*  ------- Botones Menu ------ */

  getDatosPerfil() {

    this.servicePerfil.getdatosPerfil(Number(this.idUsuario)).subscribe(
      (data) => {
        console.log('datos del perfil logueado: ', data)
        this.datosPerfil = data;
      },
      (error) => {
        console.log(error)
      }
    )
  }

  /*  --------- Actualizar perfil de usuario --------- */
  formularioPerfil() {
    if (this.banderaActualizarPerfil == false) {
      this.banderaActualizarPerfil = true
    } else {
      this.banderaActualizarPerfil = false;
    }
  }

  actualizarPerfil() {

    let putUser: putUsuario = {
      IDUsuario: this.datosPerfil[0].idUsuario,
      Nombre: '',
      Apellido: '',
      DNI: '',
      Correo: '',
      Nick: '',
      Celular: '',
      Contrasenia: '',
      id_Perfil: this.datosPerfil[0].id_Perfil,
      id_Estado: this.datosPerfil[0].id_Estado
    }

    debugger
    if (this.nombrePersonaCtrl.value == '') {
      /* si el formulario esta vacio es porque no se actualizo */
      putUser.Nombre = this.datosPerfil[0].nombrePersona;
    } else {
      putUser.Nombre = this.nombrePersonaCtrl.value + '';
    }

    if (this.apellidoPersonaCtrl.value == '') {
      /* si el formulario esta vacio es porque no se actualizo */
      putUser.Apellido = this.datosPerfil[0].apellidoPersona;
    } else {
      putUser.Apellido = this.apellidoPersonaCtrl.value + '';
    }

    if (this.celularCtrl.value == '') {

      putUser.Celular = this.datosPerfil[0].telefonoUsuario + '';
    } else {
      putUser.Celular = this.celularCtrl.value + '';
    }

    if (this.dniCtrl.value == '') {

      putUser.DNI = this.datosPerfil[0].dniUsuario + '';
    } else {
      putUser.DNI = this.dniCtrl.value +'';
    }
    if (this.correoCtrl.value == '') {

      putUser.Correo = this.datosPerfil[0].correoUsuario + '';
    } else {
      putUser.Correo = this.correoCtrl.value + '';
    }
    if (this.contraseniaCtrl.value == '') {

      putUser.Contrasenia = this.datosPerfil[0].contrasenia + '';
    } else {
      putUser.Contrasenia = this.contraseniaCtrl.value + '';
    }
    if (this.nombreUsuarioCtrl.value == '') {

      putUser.Nick = this.datosPerfil[0].nombreUsuario + '';

    } else {
      putUser.Nick = this.contraseniaCtrl.value + '';
    }

    if (this.banderaActualizarPerfil == true) {
      debugger
      this.serviceUsuario.putUsuario(putUser).subscribe(
        (data) => {
          alert('usuario actualizado')
          debugger
        },
        (error) => {
          console.log(error);
        }
      )
      debugger
      this.banderaActualizarPerfil = false;
      this.limpiarFormulario();

    } else {
      alert('Perfil no actualizado')
      this.banderaActualizarPerfil = false;
    }
  }
  limpiarFormulario() {
    debugger
    this.nombrePersonaCtrl.reset()
    this.apellidoPersonaCtrl.reset()
    this.celularCtrl.reset()
    this.dniCtrl.reset()
    this.correoCtrl.reset()
    this.contraseniaCtrl.reset()
    this.nombreUsuarioCtrl.reset()
    debugger
    
    this.getDatosPerfil();
  }
}
