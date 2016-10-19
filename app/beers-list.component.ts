import { Component } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'beer-list',
  template:`
  <div *ngFor="let currentBeer of beers">
  <h3> {{ currentBeer.name }} </h3>
 <button (click)="showDetails(currentBeer)">Edit</button>
 </div>
  `
})

export class BeerListComponent {
  public beers: Beer[] = [
    new Beer("pFriem CDA", "Caldera Pilot Rock Porter", 6, "5%"),
    new Beer("Black Butte Porter", "The Abyss Deschuttes ipa", 7.5, "9%"),
    new Beer("Apricot Goose De Garde Brewing Saison", "Cascade Sang Nior Cascade Brewing", 7, "4.9%")
  ];
}
