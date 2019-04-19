import { Component, OnInit, ViewChild } from '@angular/core';
import { Estado } from './models/estado';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '../../../../node_modules/@angular/material/paginator';
import { MatSort } from '../../../../node_modules/@angular/material/sort';
import { ValorFrete } from './models/valorfrete';
import { Cidade } from './models/cidade';
import { Cep } from './models/cep';

@Component({
  selector: 'app-calculafrete',
  templateUrl: './calculafrete.component.html',
  styleUrls: ['./calculafrete.component.css']
})
export class CalculafreteComponent implements OnInit {

  public estado: Estado;
  public cidade: Cidade;
  public valorFrete: ValorFrete;
  public cep: Cep;
  public isExpandidoEstado: number;
  public isExpandidoValorFrete: number;
  public isExpandidoCidade: number;
  public isExpandidoCalculaFrete: number;
  public estadoList: Array<Estado>;
  public valorFreteList: Array<ValorFrete>;
  public cidadeList: Array<Cidade>;
  public cepList: Array<Cep>;
  public dsEstado: any;
  public dsValorFrete: any;
  public dsCidade: any;
  public edicaoEstado: boolean = false;
  public edicaoValorFrete: boolean = false;
  public dsCep: any;
  public peso: number;
  public estadoO: Estado;
  public estadoD: Estado;
  public resultadoValorFrete: number;

  public edicaoCep: boolean;
  public idCep: number;

  displayedColumnsEstado: string[] = ['actionsColumn', 'id', 'sigla', 'nome'];
  displayedColumnsValorFrete: string[] = ['actionsColumn', 'id', 'estadoOrigem', 'estadoDestino', 'valor'];
  displayedColumnsCidade: string[] = ['actionsColumn', 'id', 'nome'];
  displayedColumnsCep: string[] = ['actionsColumn', 'cep']; //, 'id'

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() { }

  ngOnInit() {
    this.estado = new Estado;
    this.valorFrete = new ValorFrete;
    this.estadoList = new Array<Estado>();
    this.valorFreteList = new Array<ValorFrete>();
    this.cidadeList = new Array<Cidade>();
    this.cidade = new Cidade;
    this.cepList = new Array<Cep>();
    this.cep = new Cep;
    this.isExpandidoEstado = 0;
    this.isExpandidoValorFrete = 0;
    this.isExpandidoCidade = 0;
    this.idCep = 0;
    //this.carregaEstado();
    this.edicaoCep = false;
    this.estadoO = new Estado();
    this.estadoD = new Estado();
  }

  setExpandidoEstado() {
    this.isExpandidoEstado = 1;
  }

  setExpandidoValorFrete() {
    this.isExpandidoValorFrete = 1;
  }

  setExpandidoCidade() {
    this.isExpandidoCidade = 1;
  }

  setExpandidoCalculaFrete() {
    this.isExpandidoCalculaFrete = 1;
  }

  salvarEstado() {
    if (this.edicaoEstado == false) {
      console.log("Estado Salvo")
      console.log(this.estado);
      this.estadoList.push(this.estado);
      console.log("Lista de Estados");
      console.log(this.estadoList);
      this.estado = new Estado();

      this.atualizaTableEstado();
    } else {
      this.estadoList.splice(this.estadoList.findIndex
        (d => d.id === this.estado.id), 1);
      this.estadoList.push(this.estado);
      this.edicaoEstado = false;
    }
  }

  salvarCidade() {
    this.cidade.cepList = this.cepList;
    this.cidadeList.push(this.cidade);
    this.cidade = new Cidade();
    this.cepList = new Array<Cep>();
    
    this.atualizaTableCep();
    this.atualizaTableCidade();   
  }  

  salvarValorFrete() {
    if (this.edicaoValorFrete == false) {
      console.log("Estado Salvo")
      console.log(this.estado);
      this.valorFreteList.push(this.valorFrete);
      console.log("Lista de Valor Frete");
      console.log(this.valorFreteList);
      this.valorFrete = new ValorFrete();
    } else {
      this.valorFreteList.splice(this.valorFreteList.findIndex
        (d => d.id === this.valorFrete.id), 1);
      this.valorFreteList.push(this.valorFrete);
      this.edicaoValorFrete = false;
    }

    this.atualizaTableValorFrete();
  }

  sortDataEstado() {
    this.dsEstado.sort = this.sort;
  }

  sortDataValorFrete() {
    this.dsValorFrete.sort = this.sort;
  }

  aplicarFiltroEstado(valor: string) {
    valor = valor.trim();
    valor = valor.toLowerCase();
    console.log("Realiza o filtro com " + valor);
    this.dsEstado.filterPredicate = (data: Estado, filter: string) =>
      data.id.toString().indexOf(filter) != -1 ||
      data.sigla.toLowerCase().indexOf(filter) != -1 ||
      data.nome.toLowerCase().indexOf(filter) != -1;

    this.dsEstado.filter = valor;
  }

  aplicarFiltroValorFrete(valor: string) {
    valor = valor.trim();
    valor = valor.toLowerCase();
    console.log("Realiza o filtro com " + valor);
    this.dsValorFrete.filterPredicate = (data: ValorFrete, filter: string) =>
      data.id.toString().indexOf(filter) != -1 ||
      data.estadoOrigem.toString().toLowerCase().indexOf(filter) != -1 ||
      data.estadoDestino.toString().toLowerCase().indexOf(filter) != -1 ||
      data.valor.toString().indexOf(filter) != -1;

    this.dsValorFrete.filter = valor;
  }

  aplicarFiltroCidade(valor: string) {

  }

  sortDataCidade() {

  }

  editarEstado(id: number) {
    let estadoUpdate;
    this.estadoList.forEach(item => {
      if (item.id == id) {
        estadoUpdate = item;
      }
    });
    this.estado = estadoUpdate;
    this.edicaoEstado = true;
  }

  editarCep(id: number) {
    this.edicaoCep = true;    
    let cepUpdate;
    this.cepList.forEach(item => {
      if (item.id == id) {
        cepUpdate = item;
      }
    });  
    this.cep = cepUpdate;
  }  

  editarValorFrete(id: number) {
    let valorFreteUpdate;
    this.valorFreteList.forEach(item => {
      if (item.id == id) {
        valorFreteUpdate = item;
      }
    });
    this.valorFrete = valorFreteUpdate;
    this.edicaoValorFrete = true;
  }

  excluirEstado(id: number) {
    this.estadoList.splice(this.estadoList.findIndex
      (d => d.id === id), 1);
    console.log("Lista de Veiculos");
    console.log(this.estadoList);
    this.atualizaTableEstado();
  }

  excluirValorFrete(id: number) {
    this.valorFreteList.splice(this.valorFreteList.findIndex
      (d => d.id === id), 1);
    console.log("Lista de Valor Frete");
    console.log(this.valorFreteList);
    this.atualizaTableValorFrete();
  }

  excluirCep(id: number) {
    this.cepList.splice(this.cepList.findIndex
      (d => d.id === id), 1);
    this.atualizaTableCep();
  }  

  atualizaTableEstado() {
    this.dsEstado = new MatTableDataSource<Estado>(this.estadoList);
    this.dsEstado.paginator = this.paginator;
    this.dsEstado.sort = this.sort;
  }

  atualizaTableValorFrete() {
    this.dsValorFrete = new MatTableDataSource<ValorFrete>(this.valorFreteList);
    this.dsValorFrete.paginator = this.paginator;
    this.dsValorFrete.sort = this.sort;
  }

  atualizaTableCidade(){
    this.dsCidade = new MatTableDataSource<Cidade>(this.cidadeList);
    this.dsCidade.paginator = this.paginator;
    this.dsCidade.sort = this.sort;
  }  

  addCep(){
    if (this.edicaoCep == false) {
      console.log("CEP Salvo")
      console.log(this.cep);
      this.cep.id = this.idCep;
      this.cepList.push(this.cep);
      this.cep = new Cep();
      this.idCep = this.idCep + 1;       
    } else {
      console.log(this.cep);
      this.cepList.splice(this.cepList.findIndex
        (d => d.id === this.cep.id), 1);
      this.cepList.push(this.cep);
      //this.cep = new Cep(); 
      this.edicaoCep = false;      
    }

    // if (this.edicaoValorFrete == false) {
    //   this.valorFreteList.push(this.valorFrete);
    //   this.valorFrete = new ValorFrete();
    // } else {
    //   this.valorFreteList.splice(this.valorFreteList.findIndex
    //     (d => d.id === this.valorFrete.id), 1);
    //   this.valorFreteList.push(this.valorFrete);
    //   this.edicaoValorFrete = false;
    // }    

    this.atualizaTableCep();  
  }

  atualizaTableCep() {
    this.dsCep = new MatTableDataSource<Cep>(this.cepList);
    this.dsCep.paginator = this.paginator;
    this.dsCep.sort = this.sort;
  }  

  calculaFrete() {
    let resultado;
    this.valorFreteList.forEach(item => {
      if ((item.estadoOrigem == this.estadoO) 
          && (item.estadoDestino == this.estadoD)) {
          resultado = this.peso * item.valor;
      }
    });
    this.resultadoValorFrete = resultado;
  }

}