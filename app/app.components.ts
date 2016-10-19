import { Component } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <h3> Welcome to the Taproom!</h3>
  <beers></beers>

  <beer-list
      [childBeerList]="masterBeerList"
      (clickSender)="showDetails($event)"></beer-list>
   <edit-beer
      [childSelectedBeer]="selectedBeer"
      (doneClickedSender)="finishedEditing()"></edit-beer>
   <new-beer (newBeerSender)="addBeer($event)"></new-beer>
  </div>
  `
})

export class AppComponent {
  public masterBeerList: Beer[] = [
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
