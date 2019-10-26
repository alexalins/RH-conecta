import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SolicitacoesPage } from './solicitacoes.page';
import { HeaderModule } from 'src/app/shared/components/header/header.module';

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
    HeaderModule
  ],
  declarations: [SolicitacoesPage]
})
export class SolicitacoesPageModule {}
