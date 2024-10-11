import { inject } from "@angular/core";
import { AuthService } from "../_services/auth.service"; 
import { Router } from "@angular/router";
import { TokenService } from "../_services/token.service";

export const AuthGuardFn = () => {
    const auth = inject(AuthService);
    const router = inject(Router);
    const token = inject(TokenService)
    
    if (token.isLogged()) {
        return true;
    }
    router.navigate(['auth']);
    return false
}
