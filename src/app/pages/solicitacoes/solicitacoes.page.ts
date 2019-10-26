import { Component, OnInit } from '@angular/core';
import { SolicitacaoService } from 'src/app/shared/service/solicitacao.service';
import { Reembolso } from 'src/app/shared/models/reembolso';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.page.html',
  styleUrls: ['./solicitacoes.page.scss'],
})
export class SolicitacoesPage implements OnInit {

  solicitacoes: Reembolso[] = [];
  solicitacao: Reembolso = new Reembolso();

  constructor(
    private solicitacaoService: SolicitacaoService
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.solicitacoes = this.solicitacaoService.getAll();
  }

  getById(id: number) {
    if(id) {
      this.solicitacao = this.solicitacaoService.getById(id);
    }
  } 

  save(solicitacao: Reembolso) {
    if(solicitacao) {
      this.solicitacaoService.save(solicitacao);
      this.getAll();
    }
  }

  deleteAll(){ this.solicitacaoService.deleteAll()}

  deleteById(solicitacao: Reembolso) {
    if(solicitacao) {
       this.solicitacaoService.delete(solicitacao);
       this.getAll();
    }
  } 

  update(solicitacao: Reembolso) {
    if(solicitacao) {
      this.solicitacaoService.update(solicitacao);
      this.getAll();
    }
  }
}
