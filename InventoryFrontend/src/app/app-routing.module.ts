import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'locations', component: LocationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
