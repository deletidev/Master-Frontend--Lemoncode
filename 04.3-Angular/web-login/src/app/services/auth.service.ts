import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

interface AuthInfo {
  isAuthenticated: boolean;
  username?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authInfo: AuthInfo = { isAuthenticated: false };

  constructor() {
    this.authInfo = JSON.parse(localStorage.getItem('authInfo') || '{}') || {
      isAuthenticated: false,
    };
  }

  login(user: { username: string; password: string }): boolean {
    if (
      user.username === 'master@lemoncode.net' &&
      user.password === '12345678'
    ) {
      this.authInfo = {
        isAuthenticated: true,
        username: user.username,
      };
      localStorage.setItem('authInfo', JSON.stringify(this.authInfo));
      return this.authInfo.isAuthenticated;
    } else {
      this.authInfo = {
        isAuthenticated: false,
      };
      localStorage.setItem('authInfo', JSON.stringify(this.authInfo));
      return this.authInfo.isAuthenticated;
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
