import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../common/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  private username;
  private password;
  private email;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async register() {
    const result = await this.authService.register(this.username, this.password, this.email).toPromise();
    console.log(result);
    await this.router.navigateByUrl('/tickets');
  }

  ngOnDestroy(): void {
  }
}
