import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.components';
import { BeersListComponent } from './beers-list.component';
import { EditBeerComponent } from './edit-beer.component';
import { NewBeerComponent } from './new-beer.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    BeersListComponent,
    EditBeerComponent,
    NewBeerComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
