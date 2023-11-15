import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
// import { Observable } from 'rxjs';

interface AuthInfo {
  isAuthenticated: boolean;
  username?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authInfo: AuthInfo = { isAuthenticated: false };

  constructor() {
    this.authInfo = JSON.parse(localStorage.getItem('authInfo') || '{}') || {
      isAuthenticated: false,
    };
  }

  login(user: { username: string; password: string }): Observable<boolean> {
    if (
      user.username === 'master@lemoncode.net' &&
      user.password === '12345678'
    ) {
      // this.authInfo = {
      //   isAuthenticated: true,
      //   username: user.username,
      // };
      // localStorage.setItem('authInfo', JSON.stringify(this.authInfo));

      return of(true).pipe(delay(2000));
    } else {
      // setTimeout(() => {
      //   this.authInfo = {
      //     isAuthenticated: false,
      //   };
      //   localStorage.setItem('authInfo', JSON.stringify(this.authInfo));
      // }, 2000);

      return of(false).pipe(delay(2000));
    }
  }

  logout(): void {
    this.authInfo = {
      isAuthenticated: false,
    };
    localStorage.setItem('authInfo', JSON.stringify(this.authInfo));
  }

  isLogged(): boolean {
    return this.authInfo.isAuthenticated;
  }

  //?repasar fc
  getUsername(): string | undefined {
    return this.authInfo.username;
  }
}
