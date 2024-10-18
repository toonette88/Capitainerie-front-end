import { 
  HttpEvent, 
  HttpInterceptor, 
  HttpRequest,
  HttpHeaders,
  HTTP_INTERCEPTORS, 
  HttpHandler
} from "@angular/common/http";
import { TokenService } from "../_services/token.service";
import { catchError, Observable, Subject, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { ApiErrorService } from "../_subjects/api-error.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor (private tokenService: TokenService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders()
      .append('Authorization', `Bearer ${this.tokenService.getToken()}`);
    const modifiedReq = req.clone({ headers });
    return next.handle(modifiedReq);
  }
}

export const TokenInterceptorProvider =[
   {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
]


