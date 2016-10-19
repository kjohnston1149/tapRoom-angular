import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.components';
import { EditBeerComponent } from './edit-beer.component';
import { NewBeerComponent } from './new-beer.component';
import { BeerListComponent } from './beers-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    EditBeerComponent,
    NewBeerComponent,
    BeerListComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
