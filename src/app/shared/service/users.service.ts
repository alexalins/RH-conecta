import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
    private menuController: MenuController,

    private router: Router,
  ) { }

  login(user: User) {
    this.getJSON().subscribe(
      data => {
        let count = 0;
        let users = data;
        users.forEach(
          res => {
            if (res.username ==  user.username && res.password ==  user.password) {
              count++;
              let jsonUser = JSON.stringify(res);
              sessionStorage.setItem('user', jsonUser);
              this.menuController.enable(true);
              this.router.navigate(['reembolso'])
            }
          })
        if (count == 0) { 
          alert("Não foi possível efetuar o login!");
        }
      });
  }

  getJSON(): Observable<any> {
    return this.http.get("./assets/data/users.json");
  }
}
