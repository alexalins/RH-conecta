import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReembolsoPage } from './reembolso.page';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { ListModule } from 'src/app/shared/components/list/list.module';

const routes: Routes = [
  {
    path: '',
    component: ReembolsoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HeaderModule,
    ListModule
  ],
  declarations: [ReembolsoPage]
})
export class ReembolsoPageModule {}
