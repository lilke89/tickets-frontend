import { Component, OnInit } from '@angular/core';
import {AuthService} from '../common/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private username;
  private password;

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  login() {
    this.authService.login(this.username, this.password).subscribe(res => {
      console.log(res);
    });
  }

}
