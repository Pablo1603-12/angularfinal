import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductItemComponent } from '../../componentes/product-list/product-item/product-item.component';

const routes: Routes = [
  { path: '', component: ProductItemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductItemRoutingModule { }
