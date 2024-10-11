import { HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { TokenService } from "../_services/token.service";
import { inject } from "@angular/core";



export function tokenInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  // Inject the current `TokenService` and use it to get an authentication token:
  const token = inject(TokenService).getToken();
  // Clone the request to add the authentication header.
  
  if(token !== null ){
    console.log(token)
    const newReq = req.clone();
    console.log(newReq)
    return next(newReq);
  }

  return next(req)
  
}