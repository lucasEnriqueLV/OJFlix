import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../shared/usuarios.service'
import { Usuario } from '../shared/usuario.model'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [ UsuariosService ]
})

export class PerfilComponent implements OnInit {

  public perfil: Usuario;

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    /*
    this.usuariosService.getUsuario()
    .then((usuario: Usuario) => {
        this.perfil = usuario;
      }
    )
    .catch((err: any) => {
      console.log(err);
    });
    */
  }

}
