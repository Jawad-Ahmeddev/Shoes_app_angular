import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchValue : string = '';

  @Output()
  searchedThroughProducts: EventEmitter<string> = new EventEmitter<string>()
  
  @ViewChild('inputSearch') searchItem: ElementRef;
  searchButtonClicked(){
    this.searchValue=  this.searchItem.nativeElement.value;
    this.searchedThroughProducts.emit(this.searchValue);
  }

}
