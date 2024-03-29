import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../common/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private username;
  private password;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {

  }

  async login() {
    await this.authService.login(this.username, this.password).toPromise();
    await this.router.navigateByUrl('/tickets');
  }

  ngOnDestroy(): void {
  }

}
