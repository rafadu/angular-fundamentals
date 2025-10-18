import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() productDetail!: IProduct;
  @Output() buy = new EventEmitter()

  getImageUrl(product: IProduct){
    if (!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }

  getDiscountedClasses(product: IProduct){
    // return { strikethrough: product.discount > 0 };
    // if(product.discount > 0)
    //   return 'strikethrough'
    // else
    //   return ''
    if(product.discount > 0)
      return ['strikethrough']
    else
      return []
  }

  buyButtonClicked(){
    this.buy.emit();
  }
}
