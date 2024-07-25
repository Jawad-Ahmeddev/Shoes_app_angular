import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

    searchItem= new Subject<string>();

    onSearchItem(searchInput: string){
      this.searchItem.next(searchInput);

    }

}
