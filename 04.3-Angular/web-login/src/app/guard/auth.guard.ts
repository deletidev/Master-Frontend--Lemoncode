import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const ver = new AuthService();
  const navegar = new Router();

  if (ver.isLogged()) {
    return true;
  } else {
    navegar.navigate(['/home']);
    return false;
  }
};
