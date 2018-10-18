import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../shared/usuarios.service'
import { Usuario } from '../shared/usuario.model'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [ UsuariosService ]
})
export class UsuariosComponent implements OnInit {

  panelOpenState = false;
  public usuarios: Usuario[];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.usuariosService.getUsuarios()
    .then(( usuarios: Usuario[]) => {
      /*
      if(localStorage.getItem('idToken') === '1') {
        this.usuarios[0] = usuarios[0];
      }
      else {
        this.usuarios = usuarios;
      }
      */
      
      this.usuarios = usuarios;
    })
    .catch((err: any) => {
      console.log(err);
    });
  }

}
