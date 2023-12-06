import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{

  name: string = '';
  lastName: string = '';
  constructor(private authService:AuthService, private router: Router){};

  ngOnInit(): void {
    const currentUser = this.authService.getUser();

    if (currentUser) {
      const [userFirstName, userLastName] = (currentUser.displayName || '').split(' ');
      this.name = userFirstName || '';
      this.lastName = userLastName || '';
    }
  }

  saveProfile() {
    this.authService.updateUser(this.name, this.lastName).then(resp =>{
      this.router.navigate(['/home'])
      alert("perfil actualizado")
    }).catch(error => {
        console.error('Error al actualizar el perfil:', error);
      });
  }
}
