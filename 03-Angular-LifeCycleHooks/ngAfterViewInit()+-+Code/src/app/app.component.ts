import { DoCheck ,Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck{
  ngDoCheck(): void {
    console.log("ngDoCheck was invoked...");
  }
}
