import { Component, OnInit } from '@angular/core';
import { ReembolsoService } from 'src/app/shared/service/reembolso.service';
import { Reembolso } from 'src/app/shared/models/reembolso';

@Component({
  selector: 'app-reembolso',
  templateUrl: './reembolso.page.html',
  styleUrls: ['./reembolso.page.scss'],
})
export class ReembolsoPage implements OnInit {

  reembolsos: Reembolso[] = [];

  constructor(
    private reembolsoService: ReembolsoService
  ) { }

  ngOnInit() {
    this.getReembolso();  
  }

  getReembolso() {
    this.reembolsoService.getJSON().subscribe(
      res => {
        this.reembolsos = res;
      }
    )
  }
}
