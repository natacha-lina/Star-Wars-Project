import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importação do FormsModule
import { ResultComponent } from '../result/result.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { FooterComponent } from '../../shared/footer/footer.component';


@NgModule({
  declarations: [
    SearchComponent,
    ResultComponent,
  ],
  imports: [
    CommonModule,
    FormsModule, // FormsModule deve estar aqui
    HttpClientModule,
    SearchRoutingModule,
    FooterComponent
  ]
})
export class SearchModule { }
