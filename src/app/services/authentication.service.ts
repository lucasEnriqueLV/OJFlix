import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';


@Injectable()
export class AuthenticationService {
    constructor(
        private readonly http: HttpClient,
        private router: Router
        ) { }

    private fakeTokenId: number;
    private headers: HttpHeaders = new HttpHeaders();
    //private host = 'https://dev-157766.oktapreview.com';
    private host = 'http://localhost:3000/';

    private options = { headers: this.headers };

    login(username: string, password: string): void {

        let loginStatus = false;

        //let apiKey: '00JPa6wqrZfLUKcinSeGBTPQLqZijRtQnlqcDrBdtE';

        this.headers.append('Accept', 'application/json');
        this.headers.append('Content-Type', 'application/json');
        
        // Simular POST de autenticação com um get
        this.http.get(
            this.host + 'usuarios',
            this.options
        ).subscribe(
            (parameter: any) => {
              console.log(parameter)
              parameter.forEach(Usuario => {
                console.log(Usuario)
                if(Usuario.username == username && Usuario.password == password) {
                    loginStatus = true;
                    localStorage.setItem('idToken', Usuario.id);
                    this.fakeTokenId = Usuario.id;
                }
              });
            },
            (err) => {
              console.log("err");
              console.log(err);
            },
            () => {
              if(loginStatus) {
                this.router.navigate(["home"]);
              }
              else {
                console.log("Login Failed")
              }
            }
            );
    }

    getUserById() {
        let apiKey: '00JPa6wqrZfLUKcinSeGBTPQLqZijRtQnlqcDrBdtE';

        this.headers.append('Accept', 'application/JSON');
        this.headers.append('Content-Type', 'application/JSON');
        this.headers.append('Authorization', 'SSWS ' + apiKey);

        let userId = '00ughfbpli9OCmMSc0h7';

        return this.http.get(
            this.host + '/api/v1/users/' + userId,
            this.options
        )

    }

    public authenticate(): boolean {
        
        // Validar token e validar token salvado localmente
        if(this.fakeTokenId === undefined && localStorage.getItem('idToken') != null) {
            this.fakeTokenId = Number(localStorage.getItem('idToken'));
        }

        if(this.fakeTokenId === undefined) {
            this.router.navigate(['/'])
        }

        return this.fakeTokenId !== undefined;
    }

    public sair() {
        
        // Simular remoção de token
        localStorage.removeItem('idToken');
        this.fakeTokenId = undefined;
        this.router.navigate(['/']);
    }
}