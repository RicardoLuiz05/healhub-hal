import { Component } from '@angular/core';
import { AuthenService } from 'src/app/shared/services/authen.service';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.css']
})
export class TelaPrincipalComponent {
  constructor(private authService: AuthenService) {}

  logout(): void {
    this.authService.logout();
  }
}
