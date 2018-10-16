import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { HttpModule } from '@angular/http';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthenticationService
    

  ) { }

  username: string;
  password: string;
  ngOnInit() {
  }
  login(): void {
    this.auth.login(this.username, this.password).subscribe(
      (parameter: any) => {
        console.log(parameter);
      },
      (err) => {
        console.log(err);
      },
      () => {}
      );
  }



}