// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// @Injectable()
// export class CorsInterceptor implements HttpInterceptor {

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // Clone the request and add custom headers
//     const modifiedReq = req.clone({
//       setHeaders: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*', // Ensures CORS handling
//         'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//         'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//       },
//     });
  
//     return next.handle(modifiedReq).pipe(
//       catchError((error: HttpErrorResponse) => {
//         if (error.status === 0) {
//           console.error('A CORS error occurred:', error);
//         }
//         return throwError(() => new Error(error.message));
//       })
//     );
//   }
// }
