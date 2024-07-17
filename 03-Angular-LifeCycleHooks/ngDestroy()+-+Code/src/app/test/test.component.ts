import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit, OnDestroy{
  ngOnInit(): void {
    console.log("TestComponent: OnInit");
  }

  ngOnDestroy(): void {
    console.log("TestComponent: OnDestroy");
  }
}
