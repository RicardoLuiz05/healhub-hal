// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor,
//   HttpErrorResponse
// } from '@angular/common/http';
// import { Observable, catchError, throwError } from 'rxjs';
// import { SnackBarComponent } from '../diaria/snack-bar/snack-bar.component';

// @Injectable()
// export class ErrorInterceptor implements HttpInterceptor {

//   constructor(private _snackBar: SnackBarComponent) {}

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
//     return next.handle(request).pipe(
//       catchError(response => this.treatsWrongAnswer(response))
//     )
//   }

//   private treatsWrongAnswer(response: object): Observable<HttpEvent<any>> {
//     if (response instanceof HttpErrorResponse) {
//         this._snackBar.openFromComponent(SnackBarComponent, {
//             data: {mensagem: "oie"},
//             duration: 5 * 1000
//         });
//     }
//     return throwError(response);
//   }
// }