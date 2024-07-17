import { Component, DoCheck} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  // count: number = 0;
  // previousCount: number = 0;

  // ngDoCheck(): void {
  //   // Custom change detection logic
  //   if (this.count !== this.previousCount) {
  //     console.log('Count has changed. New count:', this.count);
  //     this.previousCount = this.count;
  //   }
  // }

  // incrementCount(): void {
  //   this.count++;
  // }
  user = { name: 'John' };

  changeUserName(): void {
    // Modify the 'name' property of the 'user' object
    this.user.name = 'Alice';
  }
}
