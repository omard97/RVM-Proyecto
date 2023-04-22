import { Component, OnInit } from '@angular/core';
import {  FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginApiService } from 'src/app/Services/Login/login-api.service';
import { RegistroApiService } from 'src/app/Services/Registro/registro-api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /* ---- Loguear usuario */
  userLogCtrl = new FormControl('', [Validators.required,Validators.minLength(4)]);
  pasworLogCtrl = new FormControl('', [Validators.required,Validators.minLength(4)]);

  /*------ Registrar Usuario ------ */
  nombreCtrl= new FormControl('', [Validators.required]);
  apellidoCtrl= new FormControl('', [Validators.required,]);
  telefonoCtrl= new FormControl('', [Validators.required]);
  contraseniaCtrl= new FormControl('', [Validators.required]);
  confirmacionCtrl= new FormControl('', [Validators.required]);
  dniCtrl= new FormControl('', [Validators.required]);
  correoCtrl=new FormControl('', [Validators.required]);
  usuarioCtrl= new FormControl('', [Validators.required]);
  
  




  constructor(private service: LoginApiService, private serviceRegistro: RegistroApiService,  private router: Router ) {}

  /*------ Banderas ------ */
  banderaContrasenia:boolean=false; /* bandera para habilitar el boton de registrarme */
  banderaAlerta:boolean=false;
  banderaAlertaRegistro : boolean=false; /* Avisa que el usuario a sigo registrado con exito */

  listUsuariodata:any;
  ngOnInit(): void { }

  /* ----- Login ----- */
  validarUsuario(){
    var usuarioLogeado = {
      email: this.userLogCtrl.value,
      password: this.pasworLogCtrl.value,
    };
   
    this.service.getValidacionUsuario(usuarioLogeado.email, usuarioLogeado.password).subscribe(
      (data) =>{
        console.log('el usuario se logueo con exito')
        console.log(data)

        this.listUsuariodata = data;
        console.log('Informacion usuario: ', this.listUsuariodata[0].idUser)
        
        this.router.navigate(['menu',this.listUsuariodata[0].idUser]); /* this.router.navigate(['main-nav', data[0].idUser]); */
      },
      (error) => {
        console.log('Hubo un problema y el usuario no se logueo con exito')
        console.error(error);
        
      }
    )

  }

  /* ----- Modal Registrar usuario --- */
  validarContrasenia(){
    var contrasenia = this.contraseniaCtrl.value + '';
    var confirmacion = this.confirmacionCtrl.value + '';
    if (contrasenia===confirmacion) {
      debugger
      this.banderaContrasenia = true; /* si las contraseñas son iguales */
      console.log('contrasenia iguales');
    } else if (contrasenia != confirmacion) {
      this.banderaContrasenia = false; /* si las contraseñas no son iguales */
      console.log('contrasenia no son iguales');
    }
  }

  /* ----- Modal Registrar usuario --- */
  registrarUsuario(){
    debugger
    if(this.nombreCtrl.invalid || this.apellidoCtrl.invalid || this.telefonoCtrl.invalid || this.dniCtrl.invalid|| this.usuarioCtrl.invalid || this.correoCtrl.invalid || this.contraseniaCtrl.invalid || this.confirmacionCtrl.invalid || this.banderaContrasenia==false){
      alert('faltan datos por agregar')
    }else{

      var usuario = {
        Nombre: this.nombreCtrl.value + '',
        Apellido: this.apellidoCtrl.value + '',
        Celular: this.telefonoCtrl.value + '',
        DNI: this.dniCtrl.value + '',
        Nick: this.usuarioCtrl.value + '',
        Correo: this.correoCtrl.value + '',
        Contrasenia: this.contraseniaCtrl.value + '',
        ID_Perfil: 3, /* usuario */
        ID_Estado: 10,/* activo */
      }
      this.vaciarFormulario();
      

      this.serviceRegistro.postRegistrarUsuario(usuario).subscribe(
        (data) => {
          alert('Usuario registrado: ' + data)
          this.banderaAlertaRegistro
        },
        (error) =>{
          alert('ocurrio un error al registarr el usuario: ' + error)
        }
      )
    }
    
  } /* registararUsuario */

  vaciarFormulario(){
    this.nombreCtrl.reset();
    this.apellidoCtrl.reset();
    this.telefonoCtrl.reset();
    this.dniCtrl.reset();
    this.usuarioCtrl.reset();
    this.correoCtrl.reset();
    this.contraseniaCtrl.reset();
  }

  
}
