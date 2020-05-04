import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexComponent } from './pokedex/pokedex.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PokemonDetailsComponent } from './pokemon/pokemon-details/pokemon-details.component';
import { PokemonAddComponent } from './pokemon/pokemon-add/pokemon-add.component';


const routes: Routes = [
  { path: "", component: PokedexComponent},
  { path:"pokedex", component: PokedexComponent},
  { path:"statistics", component: StatisticsComponent},
  { path:"addPokemon", component:PokemonAddComponent},
  { path:'pokemon/:id' , component: PokemonDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
