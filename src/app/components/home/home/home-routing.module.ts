import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { SearchComponent } from '../../search/search.component';
import { ResultComponent } from '../../result/result.component';





const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'search', component: SearchComponent }, 
  { path: 'result/people/:id', component: ResultComponent }
  
];

@NgModule({
 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }