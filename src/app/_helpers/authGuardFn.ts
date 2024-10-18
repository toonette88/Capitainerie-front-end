import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { TokenService } from "../_services/token.service";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private tokenService: TokenService
    ) {}
    

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        
            if(this.tokenService.isLogged()){
                return true
            }

            return this.router.navigate(['auth'])
    }
}