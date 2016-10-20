import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'beer-list',
  template:`
  <div *ngFor="let currentBeer of childBeerList">
  <h2> {{ currentBeer.name }} </h2>
  <img src={{currentBeer.imageFilePath}}>
  <h4>How's your beer level? {{ currentBeer | low }}</h4>
  <p>Pints left : {{ currentBeer.amountLeft }}</p>
  <button class="btn btn-warning" (click)="subtractOnePint(currentBeer)">Sell 1 pint</button>
  <br>
 <button class="btn btn-danger" (click)="editButtonHasBeenClicked(currentBeer)">Edit</button>
 </div>
  `
})


export class BeerListComponent {
  @Input() childBeerList: Beer[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(beerToEdit: Beer) {
    this.clickSender.emit(beerToEdit);
    }
  subtractOnePint(beerToDispense: Beer) {
    beerToDispense.dispensePint();
      }
}
//
// public clickedLow:
// onClick(subtractOnePint(currentBeer)) {
//   this.clickedLow = (subtractOnePint(currentBeer));
//   console.log(this.selectedLow);
// }
