import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service'

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  constructor(
    private auth: AuthenticationService
  ) { }

  ngOnInit() {
  }

  public sair(): void {
    this.auth.sair();
  }

}
