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

  salvarEstado(){
    console.log("Estado Salvo")
    console.log(this.estado);
    this.estadoList.push(this.estado);
    console.log("Lista de Estados");
    console.log(this.estadoList);
    this.estado = new Estado(); //Instancia uma novo Estado para não perder a referência da primeira0,

    this.dsEstado = new MatTableDataSource<Estado>(this.estado);
    this.dsEstado.paginator = this.paginator;
    //this.dataSource.Sort = this.matSort;    
  }

}
