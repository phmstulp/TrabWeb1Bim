import { Component, OnInit, ViewChild } from '@angular/core';
import { Estado } from './models/estado';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '../../../../node_modules/@angular/material/paginator';
import { MatSort } from '../../../../node_modules/@angular/material/sort';

@Component({
  selector: 'app-calculafrete',
  templateUrl: './calculafrete.component.html',
  styleUrls: ['./calculafrete.component.css']
})
export class CalculafreteComponent implements OnInit {

  public estado: Estado;
  public isExpandido: number;
  public estadoList: Array<Estado>;
  public dsEstado: any;

  displayedColumns: string[] = ['id', 'sigla', 'nome'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() { }

  ngOnInit() {
    this.estado = new Estado;
    this.estadoList = new Array<Estado>();
    this.isExpandido = 0;
  }

  setExpandido() {
    this.isExpandido = 1;
  }

  salvarEstado(){
    // console.log("Estado Salvo")
    // console.log(this.estado);
    this.estadoList.push(this.estado);
    console.log("Lista de Estados");
    console.log(this.estadoList);
    this.estado = new Estado(); //Instancia uma novo Estado para não perder a referência da primeira0,

    this.dsEstado = new MatTableDataSource<Estado>(this.estadoList);
    this.dsEstado.paginator = this.paginator;
    //this.dataSource.Sort = this.matSort;    
  }

  carregaEstado(){
    
  }

  sortData(){
    this.dsEstado.sort = this.sort;
  }

}
