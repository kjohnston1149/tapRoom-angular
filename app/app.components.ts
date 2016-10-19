import { Component } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <h1> Welcome to the Taproom!</h1>
  <h2> Here's a list of our current specialty beers on tap:</h2>
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
    new Beer("pFriem CDA", "Caldera Pilot Rock Porter", 6, "5%", "pfriem.jpeg"),
    new Beer("Black Butte Porter", "The Abyss Deschuttes ipa", 7.5, "9%", "butte.jpg"),
    new Beer("Apricot Goose De Garde Brewing Saison", "Cascade Sang Nior Cascade Brewing", 7, "4.9%", "saison.jpg"),

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
