import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.components';
import { NewBeerComponent } from './new-beer.component';
import { BeerListComponent } from './beers-list.component';
import { EditBeerComponent } from './edit-beer.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    NewBeerComponent,
    BeerListComponent,
    EditBeerComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
