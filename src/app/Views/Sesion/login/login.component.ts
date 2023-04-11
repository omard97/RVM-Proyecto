import { Component, OnInit } from '@angular/core';
import {  FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombreCtrl= new FormControl('', [Validators.required,Validators.minLength(4)]);
  apellidoCtrl= new FormControl('', [Validators.required,Validators.minLength(4)]);
  telefonoCtrl= new FormControl('', [Validators.required,Validators.minLength(6)]);
  contraseniaCtrl= new FormControl('', [Validators.required,Validators.minLength(8)]);
  confirmacionCtrl= new FormControl('', [Validators.required,Validators.minLength(8)]);
  dniCtrl= new FormControl('', [Validators.required]);
  correoCtrl=new FormControl('', [Validators.required,Validators.email]);
  usuarioCtrl= new FormControl('', [Validators.required,Validators.minLength(4)]);

  constructor() { }

  

  ngOnInit(): void { }



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
