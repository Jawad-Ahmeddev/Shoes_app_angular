import { Component, Input } from '@angular/core';
import { product } from 'src/app/productType/productType';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  product:product;

  

}
