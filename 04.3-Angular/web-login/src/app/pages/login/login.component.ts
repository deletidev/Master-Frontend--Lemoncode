import { Component, EventEmitter, Output, SimpleChanges } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  cargando = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      username: this.nameControl,
      password: this.passwordControl,
    });
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      verticalPosition: 'top',
    });
  }

  snackbar() {
    this._snackBar.open(
      'Usuario: master@lemoncode.net -- Contraseña: 12345678',
      '',
      {
        verticalPosition: 'top',
      }
    );
  }

  submitForm(event: Event) {
    event.preventDefault();
    this.cargando = true;
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe((login) => {
        this.cargando = false;
        if (login) {
          this.router.navigate(['/dashboard']);

          this.authService.authInfo = {
            isAuthenticated: true,
            username: this.loginForm.value.username,
          };
          localStorage.setItem(
            'authInfo',
            JSON.stringify(this.authService.authInfo)
          );
        } else {
          this.loginFailed = true;
          this.snackbar();
        }
      });
    }
  }
}
