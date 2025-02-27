import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  type: boolean = true;
  isLogin = false;

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private global: GlobalService
  ) { }

  ngOnInit() {
  }

  changeType() {
    this.type = !this.type;
  }

  onSubmit(form: NgForm) {
    console.log(form);
    if(!form.valid) return;
    this.login(form);
  }

  login(form) {
    this.isLogin = true;
    this.authService.login(form.value.email, form.value.password).then(data => {
      console.log(data);
      this.navigate(data);
      this.isLogin = false;
      form.reset();
    })
    .catch(e => {
      console.log(e);
      this.isLogin = false;
      let msg: string = 'Could not sign you in, please try again.';
      if (e.code === 'auth/invalid-credential') msg = 'Invalid email or password.';
      this.global.showAlert(msg);
    });
  }

  navigate(data?) {
    let url = '/tabs';
    if(data == 'admin') url = '/admin';
    this.router.navigateByUrl(url);
  }

}
