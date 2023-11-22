import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { ModalDismissReasons, NgbDateStruct, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { LenguajesService } from 'src/app/services/lenguajes.service'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-otro',
  templateUrl: './otro.component.html',
  styleUrls: ['./otro.component.css']
})
export class OtroComponent implements OnInit{

  
  Nom:string ="";
  name:string = "";
  lastname:string = "";
  fecha: NgbDateStruct | null = null;
  dataLenguajes: any = [];
  dataSource: any = [];
  editingData: any = {};


  closeResult = "";

  constructor(
    private modalService: NgbModal,
    public fb: FormBuilder,
    private lenguaje: LenguajesService

    ){

  }
  ngOnInit()
  {
    this.lenguaje.getLenguajes().subscribe( (data) => {
      console.log(data);
      for(var key in data)
      {
        var row = {id:key, Nom: data[key].Nom, name: data[key].name,
          lastname: data[key].lastname, fecha: data[key].fecha}
        this.dataSource.push(row)
      }
    })
  }
  private parseDateString(dateString: string): NgbDateStruct | null {
  if (dateString) {
    const dateParts = dateString.split('-');
    if (dateParts.length === 3) {
      return {
        year: parseInt(dateParts[0], 10),
        month: parseInt(dateParts[1], 10),
        day: parseInt(dateParts[2], 10)
      };
    }
  }
  return null;
}

  save(){
    let body =
    {
      Nom: this.Nom,
      name: this.name,
      lastname: this.lastname,
      fecha: this.fecha ? `${this.fecha.year}-${this.fecha.month}-${this.fecha.day}` : ''
    }

    if (this.editingData.id) {
      // Si hay un ID en editingData, entonces estás editando
      this.lenguaje.updateLenguajes(this.editingData.id, body).subscribe((data) => {
        if (data != null) {
          window.location.reload();
        }
      });
    } else {
      // Si no hay ID, entonces estás creando un nuevo registro
      this.lenguaje.postLenguajes(body).subscribe((data) => {
        if (data != null) {
          window.location.reload();
        }
      });
    }
  }

  borrar(id:string){
    let aux = confirm("Esta Seguro de Borrar")
    if(!aux) return
    this.lenguaje.deleteLenguajes(id).subscribe( (data) => {
      if(data==null)
      {
        window.location.reload();
      }
    })
  }


  openedit(content: TemplateRef<any>, rowData: any) {
    this.editingData = { ...rowData }; // Copiar los datos para evitar cambios directos
    this.Nom = this.editingData.Nom;
    this.name = this.editingData.name;
    this.lastname = this.editingData.lastname;
    this.fecha = this.parseDateString(this.editingData.fecha);
    
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        this.editingData = {}; // Limpiar datos de edición al cerrar el modal
        this.Nom = "";
        this.name = "";
        this.lastname = "";
        this.fecha = null;
      }
    );
  }

  open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
				this.closeResult = `Closed with: ${result}`;
			}, (reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}
}
