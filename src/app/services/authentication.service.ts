import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable()
export class AuthenticationService {
    constructor(private readonly http: HttpClient) { }

    private headers: HttpHeaders = new HttpHeaders();
    private host = 'https://dev-157766.oktapreview.com';
    private options = { headers: this.headers };

    login(username: string, password: string): Observable<any> {

        let apiKey: '00JPa6wqrZfLUKcinSeGBTPQLqZijRtQnlqcDrBdtE';

        this.headers.append('Accept', 'application/json');
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'SSWS ' + apiKey);
    
        
        return this.http.post(
            this.host + '/api/v1/authn',
            {
                "username": username,
                "password": password,
                "options": {
                    "multiOptionalFactorEnroll": true,
                    "warnBeforePasswordExpired": true
                }
            },
            this.options
        )
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



    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}