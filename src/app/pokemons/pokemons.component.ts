import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../services/pokemon.service';
import {Pokemon} from '../modeles/pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  choice;
  pokemons: Array<Pokemon>;
  nb: number;

  constructor(private service: PokemonService) {}

  initTableau() {
    this.pokemons = this.service.getPokemons();
  }

  ngOnInit() {
    this.initTableau();
    this.nb = this.service.nbPokemons();
  }

}
