import { Injectable } from '@angular/core';
import { Pokemon } from './models/pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { 
  }

  getPokemons() {
    return this.http.get('http://localhost:3000/pokemons');
  }

  getPokemonById( pokemonId: number): Observable<any> {
    return this.http.get('http://localhost:3000/Pokemons/?id=' + pokemonId);
  }

  addPokemon(pokemon: Pokemon): Observable<any> {
    console.log('Was added to the pokedex:... ', Pokemon);
    return  this.http.post('http://localhost:3000/Pokemons', pokemon);
  }
}
