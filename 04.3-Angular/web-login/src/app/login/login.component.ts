import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

//?no consigo tiparlo
interface LoginForm {
  username: FormControl;
  password: FormControl;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  loginForm: FormGroup;
  nameControl: FormControl = new FormControl('', Validators.required);
  passwordControl: FormControl = new FormControl('', Validators.required);
  loginFailed: boolean = false;

  hide = true;
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group<LoginForm>({
      username: this.nameControl,
      password: this.passwordControl,
    });
  }

  submitForm(event: Event) {
    event.preventDefault();
    if (this.authService.login(this.loginForm.value)) {
      // this.authService.isLogged();
      this.router.navigate(['/dashboard']);
    } else {
      this.loginFailed = true;
      //?no funciona poner errores en los inputs si esta mal el usuario
      // this.loginForm.markAllAsTouched();
    }
  }
}
