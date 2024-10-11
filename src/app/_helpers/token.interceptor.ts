import { HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { TokenService } from "../_services/token.service";

export function tokenInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {

  //Injection du serviceToken et obtention du token
const token = inject(TokenService).getToken();

//Si token, clonage et  modification de la requête
if(token){
  const newReq = req.clone({
    headers: req.headers.append('Authorization', token)
});
return next(newReq)
} else {

  return next(req)
}




}


