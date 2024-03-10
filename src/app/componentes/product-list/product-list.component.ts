import { Component } from '@angular/core';

import { CartService } from '../../servicios/cart.service';
import { Observable, catchError, map, of } from 'rxjs';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { Article } from 'src/app/interface/article.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  articles$: Observable<any[]> | undefined;

  constructor(private firebaseService: FirebaseService, private cartService: CartService) { }

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles() {
    this.articles$ = this.firebaseService.getAllArticulos();

    // Crear artículos predeterminados en Firebase
    this.createDefaultArticles();
  }

  createDefaultArticles() {

    const defaultArticles: Article[] = [
      { id: 1, name: 'Adidas azul', price: 50, imageUrl: 'assets/zapato1.jpg' },
      { id: 2, name: 'Adidas colores', price: 60, imageUrl: 'assets/zapato2.jpg' },
      { id: 3, name: 'Adidas blancas', price: 70, imageUrl: 'assets/zapato3.jpg' }
    ];


    defaultArticles.forEach(article => {
      this.firebaseService.addArticulo(article)
        .then(() => console.log('Artículo agregado exitosamente a Firebase'))
        .catch(error => console.error('Error al agregar el artículo a Firebase:', error));
    });
  }


  handleAddToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
