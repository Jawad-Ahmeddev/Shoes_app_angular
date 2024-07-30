import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  @Output()
  selectedButtonFilteredChanged : EventEmitter<string>= new EventEmitter<string>();
  selectedFilteredRadioButton: string = 'All'

  onSelectedFilteredRadioButtonChanges(){
    
    this.selectedButtonFilteredChanged.emit(this.selectedFilteredRadioButton);
     console.log(this.selectedFilteredRadioButton);
  }
}
