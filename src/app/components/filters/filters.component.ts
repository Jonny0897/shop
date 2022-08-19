import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Input() all: number = 0;
  @Input() novels: number = 0;
  @Input() manga: number = 0;


  selectedRadioButtonValue: string = 'all';

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  filterRadioChanged: EventEmitter<string> = new EventEmitter<string>();

  onRadioChanged() {
    this.filterRadioChanged.emit(this.selectedRadioButtonValue);
  }



}
