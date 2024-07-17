import {
  AfterContentChecked,
  AfterContentInit,
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
export class TestComponent implements AfterViewInit, AfterContentInit, AfterContentChecked {
  @ViewChild('wrapper') wrapper!: ElementRef;

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit was invoked...');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked() was invoked...');
  }

  ngAfterViewInit(): void {
    const divElement: HTMLElement = this.wrapper.nativeElement;
    divElement.style.color = "goldenrod";
    divElement.style.fontSize = "15px";
    divElement.style.fontWeight = "300";

    console.log("ngAfterViewInit() hook was invoked...", this.wrapper);
  }
}
