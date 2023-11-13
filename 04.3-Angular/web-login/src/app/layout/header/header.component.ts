import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  constructor(private authservice: AuthService, private router: Router) {}
  get getUsername() {
    return this.authservice.getUsername();
  }
  get login(): boolean {
    return this.authservice.isLogged();
  }

  logout() {
    this.authservice.logout();
    this.router.navigate(['/home']);
  }
}
