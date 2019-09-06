import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route } from '@angular/router';
import { AuthService } from './app/common/services/auth.service';

@Injectable()
export class AuthPrivateGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.handle();
  }
  canLoad(route: Route): boolean {
    return this.handle();
  }
  handle() {
    if (this.authService.loggedIn) { return true; }
    this.router.navigate(['/login']);
    return false;
  }
}

@Injectable()
export class AuthPublicGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {

  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.handle();
  }

  canLoad(route: Route): boolean {
    return this.handle();
  }
  handle() {
    if (!this.authService.loggedIn) { return true; }
    this.router.navigate(['/']);
    return false;
  }
}

export const appRoutingProviders: any[] = [AuthPrivateGuard, AuthPublicGuard];
