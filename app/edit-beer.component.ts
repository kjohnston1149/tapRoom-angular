import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'edit-beer',
  template: `
    <div *ngIf="childSelectedBeer">
      <h1>Edit Beer</h1>
      <div>
        <label>Name</label>
        <input [(ngModel)]="childSelectedBeer.name">
      </div>
      <div>
        <label>Brand</label>
        <input [(ngModel)]="childSelectedBeer.brand">
      </div>
      <div>
        <label>Enter Price:</label>
        <input [(ngModel)]="childSelectedBeer.price">
      </div>
      <div>
        <label>Enter Alcohol Content:</label>
        <input [(ngModel)]="childSelectedBeer.alcoholContent">
        <button (click)="doneClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditBeerComponent {
  @Input() childSelectedBeer: Beer;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
  }
