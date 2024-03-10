import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = []; // Array para almacenar los productos en el carrito

  constructor() { }

  // Método para agregar un producto al carrito
  addToCart(product: any) {
    const item = { product: product }; // Asegúrate de que el objeto tenga la propiedad 'product'
    this.cartItems.push(item);
    console.log('Producto agregado al carrito:', product);
  }

  // Método para obtener todos los productos del carrito
  getCartItems() {
    return this.cartItems;
  }

  // Método para vaciar el carrito
  clearCart() {
    this.cartItems = [];
    console.log('Carrito vaciado.');
  }

  // Método para eliminar un producto del carrito
  removeFromCart(product: any) {
    const index = this.cartItems.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      console.log('Producto eliminado del carrito:', product);
    } else {
      console.error('No se encontró el producto en el carrito:', product);
    }
  }
}
