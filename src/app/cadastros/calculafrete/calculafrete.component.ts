import { Component, OnInit, ViewChild } from '@angular/core';
import { Estado } from './models/estado';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '../../../../node_modules/@angular/material/paginator';
import { MatSort } from '../../../../node_modules/@angular/material/sort';
import { ValorFrete } from './models/valorfrete';

@Component({
  selector: 'app-calculafrete',
  templateUrl: './calculafrete.component.html',
  styleUrls: ['./calculafrete.component.css']
})
export class CalculafreteComponent implements OnInit {

  public estado: Estado;
  public valorFrete: ValorFrete;
  public isExpandidoEstado: number;
  public isExpandidoValorFrete: number;
  public estadoList: Array<Estado>;
  public valorFreteList: Array<ValorFrete>;
  public dsEstado: any;
  public dsValorfrete: any;

  displayedColumnsEstado: string[] = ['actionsColumn', 'id', 'sigla', 'nome'];
  displayedColumnsValorFrete: string[] = ['actionsColumn', 'id', 'estadoOrigem', 'estadoDestino', 'valor'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() { }

  ngOnInit() {
    this.estado = new Estado;
    this.valorFrete = new ValorFrete;
    this.estadoList = new Array<Estado>();
    this.valorFreteList = new Array<ValorFrete>();
    this.isExpandidoEstado = 0;
    this.isExpandidoValorFrete = 0;
    this.carregaEstado();
  }

  setExpandidoEstado() {
    this.isExpandidoEstado = 1;
  }

  setExpandidoValorFrete() {
    this.isExpandidoValorFrete = 1;
  }

  salvarEstado(){
    // console.log("Estado Salvo")
    // console.log(this.estado);
    this.estadoList.push(this.estado);
    console.log("Lista de Estados");
    console.log(this.estadoList);
    this.estado = new Estado(); //Instancia uma novo Estado para não perder a referência da primeira0,

    this.atualizaTableEstado();   
  }

  salvarValorFrete(){
    
  }

  carregaEstado(){
    //this.estado = new Estado;
    //this.estado.id = Math.floor(Math.random() * 100) + 1;
    //this.estado.nome = "Jooj";
    //this.estado.sigla = "JS";
    //this.estadoList.push(this.estado);
    //this.dsEstado = new MatTableDataSource<Estado>(this.estadoList);
  }

  sortDataEstado(){
    this.dsEstado.sort = this.sort;
  }

  sortDataValorFrete(){
    this.dsValorfrete.sort = this.sort;
  }

  aplicarFiltroEstado(valor: string){
    valor = valor.trim();
    valor = valor.toLowerCase();
    console.log("Realiza o filtro com " + valor);
    this.dsEstado.filterPredicate = (data: Estado, filter: string ) => 
      data.id.toString().indexOf(filter) != -1 ||
      data.sigla.toLowerCase().indexOf(filter) != -1 ||
      data.nome.toLowerCase().indexOf(filter) != -1;
  
    this.dsEstado.filter = valor;
  }

  aplicarFiltroValorFrete(valor: string) {

  }

  editarEstado(id: number) {
    alert("Editar ==> " + id);
    let estadoUpdate;
    this.estadoList.forEach(item => {
      if (item.id == id) {
        estadoUpdate = item;
      }
    });
    this.estado = estadoUpdate;
  }

  editarValorFrete(id: number) {

  }

  excluirEstado(id: number) {
    this.estadoList.splice(this.estadoList.findIndex
      (d => d.id === id), 1);
    console.log("Lista de Veiculos");
    console.log(this.estadoList);
    this.atualizaTableEstado();
  }

  excluirValorFrete() {

  }

  atualizaTableEstado() {
    this.dsEstado = new MatTableDataSource<Estado>(this.estadoList);
    this.dsEstado.paginator = this.paginator;
    this.dsEstado.sort = this.sort;
  }

  atualizaTableValorFrete() {
    this.dsValorfrete = new MatTableDataSource<ValorFrete>(this.valorFreteList);
    this.dsValorfrete.paginator = this.paginator;
    this.dsValorfrete.sort = this.sort;
  }

  atualizarEstadoOrigem() {

  }

}