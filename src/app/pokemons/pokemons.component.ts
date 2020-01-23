import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  choice;

  constructor(private service: PokemonService) {}

  tab = this.service.pokemon;
  nb = this.service.nbPokemons();

  ngOnInit() {}

}
