import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()
  all: number=0;
  
  @Input()
  inStock: number=0;

  @Input()
  outStock: number=0;

}
