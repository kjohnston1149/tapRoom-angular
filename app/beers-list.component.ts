import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'beer-list',
  template:`
  <div *ngFor="let currentBeer of childBeerList">
  <h3> {{ currentBeer.name }} </h3>
 <button (click)="editButtonHasBeenClicked(currentBeer)">Edit</button>
 </div>
  `
})

export class BeerListComponent {
  @Input() childBeerList: Task[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(beerToEdit: Task) {
    this.clickSender.emit(beerToEdit);
  }
}
