import { Usuario } from './usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class UsuariosService {

    public usuarios: Usuario[];
    constructor(
        private readonly http: HttpClient
    ) { }
    
    private headers: HttpHeaders = new HttpHeaders();
    //private host = 'https://dev-157766.oktapreview.com';
    private host = 'http://localhost:3000/';
    
    private options = { headers: this.headers };

    public getUsuarios(): Promise<Usuario[]> {

        let tempUsuario: Usuario[];

        this.headers.append('Accept', 'application/json');
        this.headers.append('Content-Type', 'application/json');

        return this.http.get(
            this.host + 'usuarios',
            this.options
        )
        .toPromise()
        .then((resposta: any) => resposta)
            
    }
    /*
    public getUsuario(): Promise<Usuario> {
        this.headers.append('Accept', 'application/json');
        this.headers.append('Content-Type', 'application/json');

        return this.http.get(
            this.host + `usuarios?id=${localStorage.getItem('idToken')}`,
            this.options
        )
        .toPromise()
        .then((resposta: any) => resposta)
    }
    */
}