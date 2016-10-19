import { Component } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <h3> Welcome to the Taproom!</h3>
  <beer-list
    [childBeerList]="masterBeerList"
    (clickSender)="showDetails($event)"></beer-list>
   <edit-beer
   [childSelectedBeer]="selectedBeer"
   (doneClickedSender)="finishedEditing()"></edit-beer>
   <new-beer
   (newBeerSender)="addBeer($event)"></new-beer>
  </div>
  `
})

export class AppComponent {
  public masterBeerList: Beer[] = [
    new Beer("pFriem CDA", "Caldera Pilot Rock Porter", 6, "5%"),
    new Beer("Black Butte Porter", "The Abyss Deschuttes ipa", 7.5, "9%"),
    new Beer("Apricot Goose De Garde Brewing Saison", "Cascade Sang Nior Cascade Brewing", 7, "4.9%"),

  ];
  selectedBeer: Beer = null;
  showDetails(clickedBeer: Beer) {
    this.selectedBeer = clickedBeer;
  }

  finishedEditing() {
    this.selectedBeer = null;
  }
  addBeer(newBeerFromChild: Beer) {
    this.masterBeerList.push(newBeerFromChild);
  }

}
