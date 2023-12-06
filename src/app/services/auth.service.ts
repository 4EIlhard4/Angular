import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendEmailVerification,
  User,
  updateProfile
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private router: Router) { }
  
  getUser()
  {
    return this.auth.currentUser;
  }
  getAuthState(): Observable<any> {
    return new Observable((observer) => {
      const unsubscribe = onAuthStateChanged(this.auth, {
        next: (user) => observer.next(user),
        error: (error) => observer.error(error),
        complete: () => observer.complete(),
      });
      return () => unsubscribe();
    });
  }
  async register(email: string, pass:string, name: string, lastName: string)
  {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, pass);
      const user = userCredential.user;
      
      // Ahora, actualiza el perfil del usuario con nombre y apellido
      await updateProfile(user, { displayName: `${name} ${lastName}` });

      return userCredential;
    } catch (error) {
      // Manejar el error aquí
      console.error('Error en el registro:', error);
      throw error;
    }
  }

  loginwithcredentials(user: string, pass:string){
    return signInWithEmailAndPassword(this.auth, user, pass);
  }

  loginwithgoogle()
  {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout(){
    return signOut(this.auth);
  }

  async updateUser(name: string, lastName: string): Promise<void> {
    try {
      const user = this.auth.currentUser;

      if (user) {
        // Actualiza el perfil del usuario con nombre y apellido
        await updateProfile(user, { displayName: `${name} ${lastName}` });
      } else {
        throw new Error('No hay un usuario autenticado.');
      }
    } catch (error) {
      // Manejar el error aquí
      console.error('Error al actualizar el perfil del usuario:', error);
      throw error;
    }
  }
}
