import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [ UsuariosService ]
})
export class UsuariosComponent implements OnInit {

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.usuariosService.getUsuarios();
  }

}
