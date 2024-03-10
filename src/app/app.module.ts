import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { ProductListComponent } from './componentes/product-list/product-list.component';
import { ShoppingCartComponent } from './componentes/shopping-cart/shopping-cart.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ProductItemComponent } from './componentes/product-list/product-item/product-item.component';

import { FormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { CategoriesComponent } from './componentes/chield/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductListComponent,
    ShoppingCartComponent,
    NavbarComponent,
    ProductItemComponent,
    UsuariosComponent,
    CategoriesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp({"projectId":"tienda-b94c5","appId":"1:539436810942:web:6498667345f11bc11314ef","databaseURL":"https://tienda-b94c5-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"tienda-b94c5.appspot.com","apiKey":"AIzaSyCBjVuXtM7D-JixyP6I_Yr2nLijvmNEJqs","authDomain":"tienda-b94c5.firebaseapp.com","messagingSenderId":"539436810942","measurementId":"G-9L4BKZQVVC"})),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
