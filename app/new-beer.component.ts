
import { Component, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'new-beer',
  template: `
    <h3> New Beer </h3>
    <div class="well">
      <div class="form-group">
        <label> Enter Beer Name:</label>
        <input #newName class="form-control">
      </div>
      <div class="form-group">
        <label> Enter Beer Brand:</label>
        <input #newBrand class="form-control">
      </div>

      <div class="form-group">
        <label> Enter Beer Price:</label>
        <input #newPrice class="form-control">
      </div>
      <div class="form-group">
        <label> Enter Beer Alcohol percentage:</label>
        <input #newAlcoholContent class="form-control">
        <br>
        <p> Click on the image below to submit </p>
      </div>
        <button (click)="addClicked(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value); newName.value=''; newBrand.value='';
        newPrice.value='';
        newAlcoholContent.value='';"><img src="ipa.jpeg" alt="ipa"></button>
    </div>
  `
})

export class NewBeerComponent {
  @Output() newBeerSender = new EventEmitter();
  addClicked(name: string, brand: string, price: number, alcoholContent: string) {
    var newBeerToAdd: Beer = new Beer(name, brand, price, alcoholContent);
    this.newBeerSender.emit(newBeerToAdd);
  }
}
