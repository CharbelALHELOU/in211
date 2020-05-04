import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  id: number;
  pokemon: Pokemon;
  routeSub: Subscription;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private list: PokemonService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute
      .paramMap
      .subscribe((params) => { 
        this.id = parseInt(params.get("id"));
      })

    this.list.getPokemonById(this.id)
      .subscribe((pokemons:Pokemon[])=>{
        this.pokemon = pokemons[0];
      });  
  }

}
