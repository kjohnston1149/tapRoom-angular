
import { Component, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'new-beer',
  template: `
    <h3> New Beer </h3>
    <div>
      <label> Enter Beer Description:</label>
      <input #newDescription>
    </div>
    <div>
      <label> Enter Beer ID </label>
      <input #newId>
      <button (click)="addClicked(newDescription.value, newId.value); newDescription.value=''; newId.value='';"><img src="ipa.jpg" alt="ipa"></button>
    </div>
  `
})

export class NewBeerComponent {
  @Output() newBeerSender = new EventEmitter()
  addClicked(description: string, id: number) {
    // var newBeerToAdd: Beer = new Beer(description, id);
    // this.newBeerSender.emit(newBeerToAdd);
  }
}
