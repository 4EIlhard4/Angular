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
  private parseDateString(dateString: string): string | null {
    if (dateString) {
      const dateParts = dateString.split('-');
      if (dateParts.length === 3) {
        return `${dateParts[0]}-${dateParts[1]}-${dateParts[2]}`;
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

    this.lenguaje.postLenguajes(body).subscribe((data)=>{
      if(data!=null)
      {
        window.location.reload();
      }
    })
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

  actualizar(id:string){
    let aux = confirm("Esta Seguro de Actualizar")
    let body = 
    {
      Nom: "",
      name:  "",
      lastname:  "",
      fecha:  ""
    }    
    if(!aux) return
    this.lenguaje.updateLenguajes(id, body).subscribe( (data) => {
      if(data!=null)
      {
        window.location.reload();
      }
    })
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
