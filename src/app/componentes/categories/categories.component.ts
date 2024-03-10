// categories.component.ts
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interface/category.interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [
    { id: 1, name: 'Zapatillas', imageUrl: 'assets/zapato1.jpg', description: 'Descubre nuestra selección de zapatillas deportivas.', price: 30  },
    { id: 2, name: 'Ropa', imageUrl: 'assets/ropa.jpg', description: 'Encuentra la mejor ropa para tus entrenamientos.', price: 70  },
    { id: 3, name: 'Accesorios', imageUrl: 'assets/accesorio.jpg', description: 'Explora nuestra colección de accesorios deportivos.', price: 50  }
  ];

  constructor() { }

  ngOnInit(): void {
    // No necesitamos cargar categorías de una API, ya que los datos son ficticios
  }
}
