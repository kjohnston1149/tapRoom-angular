import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'beer-list',
  template:`
  <div *ngFor="let currentBeer of childBeerList">
  <h2> {{ currentBeer.name }} </h2>
  <img src={{currentBeer.imageFilePath}}>
  <p>Pints left : {{ currentBeer.amountLeft }}</p>
  <button (click)="subtractOnePint(currentBeer)"></button>
  <br>
 <button (click)="editButtonHasBeenClicked(currentBeer)">Edit</button>

 </div>
  `
})


export class BeerListComponent {
  @Input() childBeerList: Beer[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(beerToEdit: Beer) {
    this.clickSender.emit(beerToEdit);
    }
  }
