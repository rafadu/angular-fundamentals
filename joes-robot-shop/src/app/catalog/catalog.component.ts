import { Component, inject } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart.service';
import { ProductService } from './product.service';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  //styles: ['a {  font-weight: bold; }'],
})
export class CatalogComponent {
  products: IProduct[];
  filter: string = '';
  //private cartSvc: CartService = inject(CartService);
  

  constructor(private cartSvc: CartService, private productSvc: ProductService) {
    this.products = [];
  }

  ngOnInit(){
    this.productSvc.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  addToCart(product: IProduct){
   this.cartSvc.add(product);
  }
 

  getFilteredProducts() {
    return this.filter === '' 
            ? this.products
            : this.products.filter((product) => product.category === this.filter);
  }
}
