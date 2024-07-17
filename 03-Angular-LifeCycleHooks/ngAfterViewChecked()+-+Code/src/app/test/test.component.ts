import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements AfterViewInit, AfterContentChecked, AfterViewChecked {
  @ViewChild('wrapper') wrapper!: ElementRef;

  ngAfterContentChecked(): void {
    console.log('ngAfterContentCheck() hook was invoked...');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() hook was invoked...');
  }

  ngAfterViewChecked(): void {
    const divElem = this.wrapper.nativeElement;
    divElem.style.color = 'gold'
    console.log('ngAfterViewChecked() hook was invoked...', this.wrapper);
  }
}
