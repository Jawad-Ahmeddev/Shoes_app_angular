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

  
  // placeholderSrc = 'https://www.bing.com/images/search?view=detailV2&ccid=sMerUYr1&id=BF51F62C49C099108AB69A0FCC6A90729566DB4D&thid=OIP.sMerUYr1YD9aHIEPsepiTgAAAA&mediaurl=https%3a%2f%2fstatic.vecteezy.com%2fsystem%2fresources%2fpreviews%2f005%2f337%2f799%2foriginal%2ficon-image-not-found-free-vector.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.b0c7ab518af5603f5a1c810fb1ea624e%3frik%3dTdtmlXKQaswPmg%26pid%3dImgRaw%26r%3d0&exph=474&expw=474&q=image+not+found+image&simid=608007330850424564&FORM=IRPRST&ck=2D3741DF6E3900B5EAC20C394EA06AD0&selectedIndex=1&itb=0';  // Placeholder image URL

  // onImageError(event: Event) {
  //   const target = event.target as HTMLImageElement;
  //   target.src = this.placeholderSrc;
  // }

}
