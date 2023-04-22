import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuApiService } from 'src/app/Services/Menu/menu-api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 
  idUsuario:any;

  constructor( private service:MenuApiService, private _route:ActivatedRoute) { 

    this.idUsuario = this._route.snapshot.paramMap.get('id');
    
    this.getRolUsuario();
  }

  ngOnInit():void {
    
  }

  getRolUsuario(){
    this.service.getRolUsuario(this.idUsuario).subscribe(
      (data) =>{
        console.log('datos del usuario: ',data)
      },
      (error) => {
        
        console.error(error);
        
      }
    )
  }

}
