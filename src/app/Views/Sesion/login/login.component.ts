import { Component, OnInit } from '@angular/core';
import {  FormControl, Validators } from '@angular/forms';
import { BackenApiService } from 'src/app/Services/backen-api.service';

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
  nombreCtrl= new FormControl('', [Validators.required,Validators.minLength(4)]);
  apellidoCtrl= new FormControl('', [Validators.required,Validators.minLength(4)]);
  telefonoCtrl= new FormControl('', [Validators.required,Validators.minLength(6)]);
  contraseniaCtrl= new FormControl('', [Validators.required,Validators.minLength(8)]);
  confirmacionCtrl= new FormControl('', [Validators.required,Validators.minLength(8)]);
  dniCtrl= new FormControl('', [Validators.required]);
  correoCtrl=new FormControl('', [Validators.required,Validators.email]);
  usuarioCtrl= new FormControl('', [Validators.required,Validators.minLength(4)]);

  constructor(private service: BackenApiService ) { }

  

  ngOnInit(): void { }



  /* ----- Login ----- */

  validarUsuario(){
    var usuarioLogeado = {
      email: this.userLogCtrl.value,
      password: this.pasworLogCtrl.value,
    };
    debugger
    this.service.getValidacionUsuario(usuarioLogeado.email, usuarioLogeado.password).subscribe(
      (data) =>{
        console.log('el usuario se logueo con exito')
        console.log(data)
      },
      (error) => {
        console.log('Hubo un problema y el usuario no se logueo con exito')
        console.error(error);
        
      }
    )

  }



  /* ----- Modal --- */
  validarContrasenia(){

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

    console.log('Usuario Registrado',usuario);
    


  }
  

}
