import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  contraseniaCtrl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  contrasenia2Ctrl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  banderaAlerta: boolean = true;
  banderaContrasenia: boolean = false;

  usuario!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.usuario = new FormGroup({
      nombreCtrl: new FormControl('', [Validators.required]),
      apellidoCtrl: new FormControl('', [Validators.required]),
      celularCtrl: new FormControl('', [Validators.required]),
      contraseniaCtrl: new FormControl('', [Validators.required]),
      contraseniaRepetidaCtrl: new FormControl('', [Validators.required]),
      dniCtrl: new FormControl('', [Validators.required]),
      correoCtrl: new FormControl('', [Validators.required,Validators.email]),
      usuarioCtrl: new FormControl('', [Validators.required]),
    });
  }

}
