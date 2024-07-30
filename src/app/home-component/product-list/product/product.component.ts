import { Component, Input } from '@angular/core';
import { product } from '../../productType/productType';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  product:product;

  

  // onImageError(event: Event) {
  //   const target = event.target as HTMLImageElement;
  //   target.src = this.placeholderSrc;
  // }

}
