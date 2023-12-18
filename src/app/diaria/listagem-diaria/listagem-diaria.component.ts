import {Component, OnInit} from '@angular/core';
import {Diaria} from "../../shared/modelo/diaria";
import {DiariaService} from '../../shared/services/diaria.service';
import {ActivatedRoute, Router} from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

import { MatButtonModule } from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

import { CompartilharDiariaComponent } from '../compartilhar-diaria/compartilhar-diaria.component';

@Component({
  selector: 'app-listagem-diaria',
  templateUrl: './listagem-diaria.component.html',
  styleUrls: ['./listagem-diaria.component.css']
})
export class ListagemDiariaComponent implements OnInit {

  diarias: Array<Diaria> = [];
  mensagemSanckBar: string = 'Diária removida com sucesso! 😢💔';
  durationInSeconds: number = 5;

  constructor(private _snackBar: MatSnackBar, private diariaService: DiariaService, private rotaAtual: ActivatedRoute, private roteador: Router, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.diariaService.listar().subscribe(
      diarias => this.diarias = diarias
    );
  }

  editar(diaria: Diaria): void {
    this.roteador.navigate(['telaprincipal/editadiaria', diaria.id]);
  }

  click(): void{
    const dialogRef = this.dialog.open(CompartilharDiariaComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  remover(diaria: Diaria): void {
    const id = diaria.id;
    if (id) {
      this.diariaService.remover(id).subscribe(
        resposta => {
          const indxDiariaARemover = this.diarias.findIndex(d => d.id === id);
          if (indxDiariaARemover > -1) {
            this.diarias.splice(indxDiariaARemover, 1);
          }
          this._snackBar.openFromComponent(SnackBarComponent, {
            data: { mensagem: this.mensagemSanckBar },
            duration: this.durationInSeconds * 1000
          })
        }
      );
    } else {
      console.error('ID da diária é indefinido.');
    }
  }

}

