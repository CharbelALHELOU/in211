import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  
  pokemons : Pokemon[];
  mostHp: number =0;
  fastest : number =0;
  bestAtt : number =0;
  bestDef : number =0;

  constructor(private pokemonService: PokemonService) { 
  }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe( (pokemons: Pokemon[]) => {
      this.pokemons = pokemons;
      for (const pokemon of this.pokemons) { 
        if (pokemon.statistic.hp > this.mostHp) this.mostHp = pokemon.statistic.hp;
        if (pokemon.statistic.attack > this.bestAtt) this.bestAtt = pokemon.statistic.attack;
        if (pokemon.statistic.defense > this.bestDef) this.bestDef = pokemon.statistic.defense;
        if (pokemon.statistic.speed> this.fastest) this.fastest = pokemon.statistic.speed;
      }
    })

    
  }

  }
  

