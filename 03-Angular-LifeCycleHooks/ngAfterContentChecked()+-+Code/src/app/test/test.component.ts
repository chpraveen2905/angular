import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements AfterContentInit, AfterContentChecked {
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit was invoked...');
    console.log('ngAfterContentInit - ', 'contentWrapper', this.content);
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked() was invoked...");
  }
}
