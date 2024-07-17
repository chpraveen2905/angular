import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  count: number = 0;

  constructor(){
    this.startCounter();
  }
  // ngOnInit(): void {
  //   this.startCounter();
  // }
  startCounter(){
    setInterval(()=>{
      if(this.count <= 5){
        console.log(this.count++);
      }
    },1000);
  }
}
