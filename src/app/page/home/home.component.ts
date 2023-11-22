import { Component, OnInit, TemplateRef } from '@angular/core';
import { LenguajesService } from 'src/app/services/lenguajes.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { CargarScriptsService } from './../../services/cargar-scripts.service';
import { NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  closeResult = '';
  name: string = "";
  abrev: string = "";
  year: string = "";
  logo: string = "";
  dataUsers: any = [];
  dataSource : any = [];
  editingMode = false;
  
  constructor(
    private usersServices: UsuariosService,
    private lenguajesServices: LenguajesService,
    private _CargarScripts: CargarScriptsService,
    private modalService: NgbModal,
    private router: Router)
    {
      _CargarScripts.Cargar(["stars"])
    }

  irAOtroComponente() {
      this.router.navigate(['/otro']);
  }
  
  ngOnInit() 
  {
    this.usersServices.getUsers().subscribe( (data) => {
      this.dataUsers = data;
    })

    this.lenguajesServices.getLenguajes().subscribe( (data) => {
      for(var key in data)
      {
        var row = {id:key, logo: data[key].logo, year: data[key].year, abrev: data[key].abrev, name: data[key].name}
        this.dataSource.push(row);
      }
      console.log(this.dataSource)
    })
  }

}
