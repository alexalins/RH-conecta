import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UsersService } from 'src/app/shared/service/users.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  activeMenu: string;
  loginForm: FormGroup;
  user: User;

  constructor(
    private menuController: MenuController,
    private usersService: UsersService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.menuController.enable(false);
    sessionStorage.removeItem('user');
    this.form();
  }

  form() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.usersService.login(this.loginForm.value);
    this.loginForm.reset();
  }
}
