import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonDetailsComponent } from './pokemon/pokemon-details/pokemon-details.component';
import { PokemonAddComponent } from './pokemon/pokemon-add/pokemon-add.component';
import { StatComponent } from './stat/stat.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    StatisticsComponent,
    PokemonComponent,
    PokemonDetailsComponent,
    PokemonAddComponent,
    StatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
