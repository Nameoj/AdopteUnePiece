import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BuyerService } from './buyer.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterService implements HttpInterceptor {

  constructor(private buyerService: BuyerService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq = req;
    const token = this.buyerService.getAuthenticatedToken();
    if (token != null) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
    }
    return next.handle(authReq);
  }

}
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterService, multi: true }
];
