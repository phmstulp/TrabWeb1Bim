import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule, MatRadioModule, MatButtonModule, 
  MatTableModule, MatIconModule, MatIconRegistry, MatPaginatorModule,
   MatSort, MatSortModule } from '@angular/material';
import { HttpClientModule, HttpClient } from '../../node_modules/@angular/common/http';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { CalculafreteComponent } from './cadastros/calculafrete/calculafrete.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CalculafreteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    BrowserAnimationsModule, //Daqui pra baixo são componentes do material
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
