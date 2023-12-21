import {Component, OnInit} from '@angular/core';
import {Diaria} from '../../shared/modelo/diaria';
import {DiariaService} from '../../shared/services/diaria.service';
import {ActivatedRoute, Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { Observable } from 'rxjs';
import { GuardianUserService } from 'src/app/shared/services/guardian-user.service';
import { GuardianDayService } from 'src/app/shared/services/guardian-day.service';


@Component({
  selector: 'app-cadastro-diaria',
  templateUrl: './cadastro-diaria.component.html',
  styleUrls: ['./cadastro-diaria.component.css']
})
export class CadastroDiariaComponent implements OnInit {

  diaria: Diaria
  durationInSeconds: number = 5;
  botaonome: string = 'Cadastrar';
  diarias: Diaria[] = [];
  

  operacaoCadastro = true;
  mensagemSnackBar: string = "O seu dia foi cadastrado!! 😊💜";

  constructor( private _snackBar: MatSnackBar,
     private diariaService: DiariaService,
     private rotalAtual: ActivatedRoute,
     private roteador: Router,
    private guardianUserService: GuardianUserService,
    private guardianDayService: GuardianDayService){
    this.diaria = new Diaria();
    this.carregarDiarias();
    if (this.rotalAtual.snapshot.paramMap.has('id')) {
      this.operacaoCadastro = false;
      this.botaonome = 'Editar';
      this.mensagemSnackBar= "O seu dia foi editado!! 😊💜";
      const idParaEdicao = Number(this.rotalAtual.snapshot.paramMap.get('id'));

      this.diariaService.pesquisarPorId(idParaEdicao).subscribe(
        diariaRetornada => this.diaria = diariaRetornada
      );
    }
  }

  ngOnInit(): void {
  }

  carregarDiarias() {
    this.diariaService.listar().subscribe(
      diarias => this.diarias = diarias
    );
  }

  inserirDiaria(): void {
    let operacao: Observable<any>;
  
    if (this.diaria.id) {
      operacao = this.diariaService.atualizar(this.diaria);
      this.guardianDayService.setDiaria(this.diaria);

    } else {
    const diariaExistente = this.diarias.find(d => d.dataDia === this.diaria.dataDia);
    
    if (diariaExistente) {
      this._snackBar.openFromComponent(SnackBarComponent, {
        data: { mensagem: 'Já existe um registro com esta data!! 🤡🤍' },
        duration: this.durationInSeconds * 1000
      });
      return; 
    }
      operacao = this.diariaService.inserir(this.diaria, this.guardianUserService.getUsuario());
      this.guardianDayService.setDiaria(this.diaria);
      
    }

  
    operacao.subscribe(
      () => {
        this.roteador.navigate(['/telaprincipal/listagemdiaria']);
        this._snackBar.openFromComponent(SnackBarComponent, {
          data: {mensagem: this.mensagemSnackBar},
          duration: this.durationInSeconds * 1000
        });
      }
    );
  }
  
  
  
}

