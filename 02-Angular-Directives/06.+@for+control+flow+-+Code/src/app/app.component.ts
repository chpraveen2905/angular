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
  employees = signal<empInterface[]>([
    { id: 1, name: 'EmployeeA', role: 'Admin' },
    { id: 2, name: 'EmployeeB', role: 'HR' },
    { id: 3, name: 'EmployeeC', role: 'Marketing' },
    { id: 4, name: 'EmployeeD', role: 'Developer' },
    { id: 5, name: 'EmployeeE', role: 'Team Lead' },
    { id: 6, name: 'EmployeeF', role: 'Developer' },
    { id: 7, name: 'EmployeeG', role: 'Marketing' },
    { id: 8, name: 'EmployeeH', role: 'HR' },
    { id: 9, name: 'EmployeeI', role: 'Marketing' },
    { id: 10, name: 'EmployeeJ', role: 'Accounting' },
  ]);
}
