import { Component } from '@angular/core';

@Component({
  selector: 'beers',
  template: `
  <h3>Here's our Current Beers on Tap</h3>
  <div class="container">
  <img src="ipa.jpeg" alt="ipa" (click)="selectsBeer()">
  <div *ngFor="let currentBeer of favoriteBeers">
    <p>{{currentBeer}}</p>
  </div>
  </div>
  `
})

export class BeersListComponent {
  favoriteBeers: string[] = ["IPA", "Lager", "Stout"];
  }
