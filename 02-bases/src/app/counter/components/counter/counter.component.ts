import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>{{ counter }}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="decreaseBy(1)">-1</button>
    <button (click)="resetCounter()">Reset</button>
  `
})

export class CounterComponent {
  constructor() { }
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  decreaseBy(value: number): void {
    this.increaseBy(-value);
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
