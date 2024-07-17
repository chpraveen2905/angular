import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnChanges{
  @Input() inputValue: string = '';
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Calling from the ngOnChanges hook...");
    console.log(changes);
  }
}