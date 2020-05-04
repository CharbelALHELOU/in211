import { Component, OnInit, OnChanges, Output, Input, EventEmitter, SimpleChanges  } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { Statistic } from 'src/app/models/statistic';
import { PokemonService } from 'src/app/pokemon.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-pokemon-add',
  templateUrl: './pokemon-add.component.html',
  styleUrls: ['./pokemon-add.component.css']
})
export class PokemonAddComponent implements OnInit, OnChanges {

  @Input() selectedpokemon: Pokemon;
  pokemon: Pokemon = new Pokemon();
  @Output() update: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private pokemonService: PokemonService) {

  }

  ngOnInit() {
    this.pokemon.statistic = new Statistic();
    this.pokemon.statistic.attack = 0;
    this.pokemon.statistic.hp = 0;
    this.pokemon.statistic.defense = 0;
    this.pokemon.statistic.speed = 0;
  }

  ngOnChanges() {
    this.pokemon = this.selectedpokemon;
  }

  debug( form ): void {
    console.log(form);
  }

  isAddAction(pokemonId){
    return isNullOrUndefined(pokemonId) || pokemonId === 0
  }
  
  processForm(pokemon: Pokemon): void {
    console.log(pokemon);
    this.pokemonService.addPokemon( pokemon ).subscribe((pokemon: Pokemon) => {
      this.update.emit(true);
    })
  }

}
