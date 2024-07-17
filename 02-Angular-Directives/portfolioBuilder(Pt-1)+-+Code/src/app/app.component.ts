import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nm = '';
  em = '';
  ph = '';
  add = '';
  qualification = [{ school: '', degree: '', year: '' }];
  submitted = false;
  showHeading = true;

  addQualification() {
    this.qualification.push({ school: '', degree: '', year: '' });
  }

  submit() {
    this.submitted = true;
    this.showHeading = false;
  }

  edit() {
    this.submitted = false;
  }
}  
