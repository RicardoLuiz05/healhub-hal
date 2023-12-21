import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DiariaService } from 'src/app/shared/services/diaria.service';
import { GuardianUserService } from 'src/app/shared/services/guardian-user.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements AfterViewInit {
  displayedColumns: string[] = ['dataDia', 'coposDAgua', 'exercicios'];
  dataSource = new MatTableDataSource<Diaria>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private diariaService: DiariaService, public guardianUserService: GuardianUserService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.carregarDadosDoServidor();
  }

  carregarDadosDoServidor() {
    const userId = this.guardianUserService.getUsuario().id;


    if (userId) {
      this.diariaService.listar().subscribe(
        data => {
          const diariasDoUsuario = data.filter(diaria => diaria.usuario.id === userId);
          this.dataSource.data = diariasDoUsuario;
        },
        error => {
          console.error('Erro ao carregar dados do servidor:', error);
        }
      );
    } else {
      console.error('ID do usuário não disponível');

    }
  }
}

export interface Diaria {
  id: Number;
  dataDia: string;
  coposDAgua: Number;
  exercicios: string;
}
