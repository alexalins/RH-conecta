import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SolicitacoesPage } from './solicitacoes.page';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { ListModule } from 'src/app/shared/components/list/list.module';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalGetComponent } from 'src/app/shared/components/modal-get/modal-get.component';

const routes: Routes = [
  {
    path: '',
    component: SolicitacoesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HeaderModule,
    ListModule,
  ],
  declarations: [SolicitacoesPage, ModalComponent, ModalGetComponent],
  entryComponents: [ModalComponent, ModalGetComponent]
})
export class SolicitacoesPageModule {}
