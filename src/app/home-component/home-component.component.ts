import { Component, Input, ViewChild, importProvidersFrom } from '@angular/core'
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {

  searchedItems: string= '';
  searchingThroughProducts(result:string){
   this.searchedItems= result;
  }

  @ViewChild('productListComponent')  productListComponent : ProductListComponent;

  @Input()
  productDetails: boolean = true

}
