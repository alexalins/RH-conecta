import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UsersService } from 'src/app/shared/service/users.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  activeMenu: string;
  loginForm: FormGroup;

  constructor(
    public menu: MenuController,
    private usersService: UsersService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.menuActive();

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  menuActive() {
    this.menu.enable(false);
  }

  login() {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    //
    this.usersService.login(username, password);
    if(sessionStorage.getItem('user')) {
      this.menu.enable(true);
      this.router.navigate(['solicitacoes'])
    } else {
      alert("Não foi possivel efetuar o login!");
    }
  }
}
