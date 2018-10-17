import { Injectable } from  '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './services/authentication.service'

@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(private auth: AuthenticationService) {}

    canActivate() {

        return this.auth.authenticate();
    }
}