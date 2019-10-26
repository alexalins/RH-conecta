import { Component, OnInit } from '@angular/core';
import { Reembolso } from '../../models/reembolso';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-get',
  templateUrl: './modal-get.component.html',
  styleUrls: ['./modal-get.component.scss'],
})
export class ModalGetComponent implements OnInit {

  solicitacao: Reembolso;
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  close() {
    this.modalController.dismiss();
  }

}
