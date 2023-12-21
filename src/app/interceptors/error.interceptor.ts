import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private _snackBar: MatSnackBar) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      catchError(response => this.treatsWrongAnswer(response))
    );
  }

  private treatsWrongAnswer(response: object): Observable<HttpEvent<any>> {
    if (response instanceof HttpErrorResponse) {
      this._snackBar.open('Erro: ' + response.message, 'Fechar', {
        duration: 5000,
      });
    }
    return throwError(response);
  }
}
