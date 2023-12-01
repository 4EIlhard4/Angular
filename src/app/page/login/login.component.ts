import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = "";
    pass: string = "";
    
    constructor(private authService:AuthService, private router: Router){};

  login(){
    this.authService.loginwithcredentials(this.email, this.pass).then(resp => {
      this.router.navigate(['/home'])
    }).catch(error => {
      console.log(error)
    });
  }

  loginGoogle()
  {
    this.authService.loginwithgoogle().then(resp => {
      this.router.navigate(['/home'])
    }).catch(error => {
      console.log(error)
    });
  }
}
