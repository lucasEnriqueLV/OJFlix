import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthenticationService,
  ) { }

  username: string;
  password: string;

  ngOnInit() {
  }
  
  login(): void {
    this.auth.login(this.username, this.password)
  }
}