import { Component, OnInit, Input } from '@angular/core';
import { Reembolso } from '../../models/reembolso';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  @Input() itens: Reembolso[] = [];

  constructor() { }

  ngOnInit() {
  }

}
