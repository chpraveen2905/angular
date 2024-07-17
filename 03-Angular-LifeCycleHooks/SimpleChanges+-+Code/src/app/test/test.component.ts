import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnChanges{
  @Input() inputValue: string = '';
  previousVal: string | undefined;
  currentVal: string | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['inputValue']){
      this.previousVal = changes['inputValue'].previousValue;
      this.currentVal = changes['inputValue'].currentValue;
      console.log(changes);
    }
  }
}
