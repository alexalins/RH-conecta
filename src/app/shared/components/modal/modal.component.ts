import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Reembolso } from '../../models/reembolso';
import { SolicitacaoService } from '../../service/solicitacao.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  solicitacao: Reembolso;
  isSave: boolean;

  constructor(
    private modalController: ModalController,
    private solicitacaoService: SolicitacaoService,
  ) { }

  ngOnInit() {
  }

  close() {
    this.modalController.dismiss();
  }

  save() {
    if(this.solicitacao) {
      this.solicitacaoService.save(this.solicitacao);
      this.clear();
    }
  }

  update() {
    if(this.solicitacao) {
      this.solicitacaoService.update(this.solicitacao);
      this.close();
    }
  }

  clear() {
    this.solicitacao = new Reembolso();
  }
}
