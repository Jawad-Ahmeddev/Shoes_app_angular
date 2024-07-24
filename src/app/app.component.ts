import { Component, Input, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecart';
  searchedItems: string= '';
  searchingThroughProducts(result:string){
   this.searchedItems= result;
  }

  @ViewChild('productListComponent')  productListComponent : ProductListComponent;


  
}
