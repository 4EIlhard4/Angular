import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  email: string = "";
  pass: string = "";
  name: string = "";
  lastName: string = "";
    
  constructor(private authService:AuthService, private router:Router){};


  guardar(){
    this.authService.register(this.email, this.pass, this.name, this.lastName ).then(res=>{
      this.router.navigate(["/home"])
    }).catch(error=>{
      console.log(error);
    })
  }
}
