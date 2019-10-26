import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [];

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    this.getJSON().subscribe(
      data => {
        this.users = data;
        //
        this.users.forEach(
          user => {
            if(user.username == username && user.password == password) {
              let jsonUser = JSON.stringify(user);
              sessionStorage.setItem('user', jsonUser);
            }
          }
        )
      },
      error => {
        alert("Não foi possivel efetuar o login!");
      }
    );
  }

  getJSON(): Observable<any> {
    return this.http.get("./assets/data/users.json");
  }
}
