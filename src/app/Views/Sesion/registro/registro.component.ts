import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nombreCtrl = new FormControl('', [Validators.required]);
  usuarioCtrl = new FormControl('', [Validators.required]);
  correoCtrl = new FormControl('', [Validators.required]);
  celularCtrl = new FormControl('', [Validators.required]);
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
  constructor() { }

  ngOnInit(): void {
  }

}
