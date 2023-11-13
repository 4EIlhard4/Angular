import { Component, OnInit } from '@angular/core';
import { LenguajesService } from 'src/app/services/lenguajes.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { CargarScriptsService } from './../../services/cargar-scripts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataUsers: any = [];
  dataLanguages : any = [];

  constructor(private usersServices: UsuariosService, private lenguajesServices: LenguajesService,
    private _CargarScripts: CargarScriptsService) {
      _CargarScripts.Cargar(["stars"])
    }

  ngOnInit() 
  {
    this.usersServices.getUsers().subscribe( (data) => {
      this.dataUsers = data;
    })

    this.lenguajesServices.getLenguajes().subscribe( (data) => {
      let arrayLenguajes = [data]
      this.dataLanguages = arrayLenguajes;
    })
  }
}
