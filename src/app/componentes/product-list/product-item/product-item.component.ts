import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/servicios/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: any; // Recibiendo el producto del padre
  @Output() addToCartEvent = new EventEmitter<any>();

  constructor(private cartService: CartService) {}

  addToCart() {
    this.addToCartEvent.emit(this.product);
  }
}
