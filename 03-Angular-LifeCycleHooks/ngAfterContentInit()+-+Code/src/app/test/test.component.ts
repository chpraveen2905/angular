import { AfterContentInit, Component, ContentChild, DoCheck, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements AfterContentInit{
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;

  // ngDoCheck(): void {
  //   console.log("ngDoCheck was invoked...");
  // }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit was invoked...");
    console.log('ngAfterContentInit - wrapper', this.wrapper);
    console.log('ngAfterContentInit - ', 'contentWrapper', this.content);
  }
  
}
