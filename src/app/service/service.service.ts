import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private route: Router) {}
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    localStorage.getItem('token');
  }
  isLoggedIn() {
    return this.getToken() == null;
  }
  logout(){
localStorage.removeItem('token')
this.route.navigate(['login'])
  }
  login({email,password}:any):Observable<any>{
    if(email=='praveen@gmail.com'&&password=='praveenleo'){
this.setToken('abcdefghijklmnopqrstuvwxyz');
return of({name:'ramKumar',email:'admin@gmail.com'})
    }
    return throwError(new Error('Failed to login'))
  }
}
