import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'edit-beer',
  template: `
    <div *ngIf="childSelectedBeer">
      <h1>Select Amount</h1>
      <div>
        <label>Enter Your Brand</label>
        <input [(ngModel)]="childSelectedBeer.description">
      </div>
      <div>
        <label>Enter Amount:</label>
        <input [(ngModel)]="childSelectedBeer.id">
        <button (click)="finishedEditing()">Done</button>
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
