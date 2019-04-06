import { Component, OnInit } from '@angular/core';
import { Estado } from './models/estado';

@Component({
  selector: 'app-calculafrete',
  templateUrl: './calculafrete.component.html',
  styleUrls: ['./calculafrete.component.css']
})
export class CalculafreteComponent implements OnInit {

  public estado: Estado;
  public isExpandido: number;

  constructor() { }

  ngOnInit() {
    this.estado = new Estado;
    this.isExpandido = 0;
  }

  setExpandido() {
    this.isExpandido = 1;
  }

}
