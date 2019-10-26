import { Component, OnInit } from '@angular/core';
import { SolicitacaoService } from 'src/app/shared/service/solicitacao.service';
import { Reembolso } from 'src/app/shared/models/reembolso';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.page.html',
  styleUrls: ['./solicitacoes.page.scss'],
})
export class SolicitacoesPage implements OnInit {

  solicitacoes: Reembolso[] = [];
  solicitacao: Reembolso = new Reembolso();

  constructor(
    private solicitacaoService: SolicitacaoService,
    private modalController: ModalController
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

  deleteAll(){ this.solicitacaoService.deleteAll()}

  deleteById(solicitacao: Reembolso) {
    if(solicitacao) {
       this.solicitacaoService.delete(solicitacao);
       this.getAll();
    }
  } 

  async showModal(isSave: boolean) {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {solicitacao: this.solicitacao, isSave: isSave}
    });
    modal.present();
  }
}
