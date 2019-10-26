import { Component, OnInit } from '@angular/core';
import { SolicitacaoService } from 'src/app/shared/service/solicitacao.service';
import { Reembolso } from 'src/app/shared/models/reembolso';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalGetComponent } from 'src/app/shared/components/modal-get/modal-get.component';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.page.html',
  styleUrls: ['./solicitacoes.page.scss'],
})
export class SolicitacoesPage implements OnInit {

  solicitacoes: Reembolso[] = [];
  solicitacao: Reembolso;

  constructor(
    private solicitacaoService: SolicitacaoService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.solicitacao = new Reembolso();
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

  udpate(solicitacao: Reembolso) {
    this.solicitacao = solicitacao;
    this.showModal(false);
  }

  async showModal(isSave: boolean) {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {solicitacao: this.solicitacao, isSave: isSave}
    });
    modal.onDidDismiss().then((data) => {
      this.getAll();
      this.solicitacao = new Reembolso();
    });
    modal.present();
  }

  async showModalGet(solicitacaoGet: Reembolso) {
    const modalGet = await this.modalController.create({
      component: ModalGetComponent,
      componentProps: {solicitacao: solicitacaoGet}
    });
    modalGet.present();
  }
}
