import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnChanges{
  @Input() user: any;

  ngOnChanges(changes: SimpleChanges): void {
    // This method will be called when the 'user' input changes.
    console.log('ngOnChanges called Changes:', changes);
  }
  // @Input() user: any;
  // private previousUserName: string | undefined;
  
  // ngDoCheck(): void {
  //   if (this.user.name !== this.previousUserName) {
  //     this.previousUserName = this.user.name;
  //     console.log('ngDoCheck called - User name changed:', this.user.name);
  //   }
  // }
}
