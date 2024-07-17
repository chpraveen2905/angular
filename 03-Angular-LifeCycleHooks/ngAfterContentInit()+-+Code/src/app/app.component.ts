import { AfterContentInit, DoCheck ,Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck{
  dataFromParent = '';

  // ngAfterContentInit(): void {
  //   console.log("ngAfterContentInit was invoked...");
  // }
  ngDoCheck(): void {
    console.log("ngDoCheck was invoked...");
  }

  sendDataToChild(): void{
    let random = Math.floor(Math.random() * 10);
    this.dataFromParent = "Random Number: " + random;
  }

}
