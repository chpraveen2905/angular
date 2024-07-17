import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

interface empInterface {
  id: number;
  name: string;
  role: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  showEmployees = true;
  employees = signal<empInterface[]>([
    { id: 1, name: 'EmployeeA', role: 'Admin' },
    { id: 2, name: 'EmployeeB', role: 'HR' },
    { id: 3, name: 'EmployeeC', role: 'Marketing' },
    { id: 4, name: 'EmployeeD', role: 'Developer' },
    { id: 5, name: 'EmployeeE', role: 'Marketing' },
  ]);

  toggleEmployee() {
    this.showEmployees = !this.showEmployees;
  }
}
