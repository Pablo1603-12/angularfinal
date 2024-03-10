import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { ProductListComponent } from './componentes/product-list/product-list.component';
import { ShoppingCartComponent } from './componentes/shopping-cart/shopping-cart.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { CategoriesComponent } from './componentes/chield/categories/categories.component';

const routes: Routes = [
  { path: '', component: HomePageComponent }, // Ruta para la página de inicio
  { path: 'productos', component: ProductListComponent }, // Ruta para la lista de productos
  { path: 'cart', component: ShoppingCartComponent }, // Ruta para el carrito de compras
  { path: 'usuario', component: UsuariosComponent},
  { 
    path: 'products', // Ruta para la lista de productos
    children: [
      { path: 'categories', component: CategoriesComponent }, // Ruta hija para categorías
     
    ]
  }
  
  // Agrega más rutas según sea necesario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
