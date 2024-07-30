import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { product } from '../productType/productType';
import { ProductListComponent } from '../product-list/product-list.component';
import { OnInit } from '@angular/core';
import { SearchService } from 'src/app/search.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  isVisible: boolean = true;
  @Input() productListComp: ProductListComponent = undefined;
  Product: product ;



  ngOnInit() {
    this.Product= this.productListComp.selectedProduct;
  }
  closePage() {
    this.isVisible = false;
  }

  OpenPage() {
    this.isVisible = true;
  }
 
  
}
