import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search.component';
import { ResultComponent } from '../result/result.component';


const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'result/people/:id', component: ResultComponent }
];

@NgModule({
 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }