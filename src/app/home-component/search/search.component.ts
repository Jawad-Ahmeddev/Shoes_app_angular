import { Component, EventEmitter, OnInit, Output, ViewChild, inject } from '@angular/core';
import { ElementRef } from '@angular/core';
import { SearchService } from '../../search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
  searchValue : string = '';

  @Output()
  searchedThroughProducts: EventEmitter<string> = new EventEmitter<string>()
  
  @ViewChild('inputSearch') searchItem: ElementRef;
  searchButtonClicked(){
    this.searchValue=  this.searchItem.nativeElement.value;
    this.searchedThroughProducts.emit(this.searchValue);
  }
 
  searchService: SearchService = inject(SearchService)
  

  onSearchItem(){
    this.searchValue=this.searchItem.nativeElement.value
    this.searchService.onSearchItem(this.searchValue);
    console.log(this.searchValue)
   
  }
  

}
