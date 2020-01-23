import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() pk;
  @Output() choix = new EventEmitter();
  private pic = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';

  clicPokemon() {
    this.choix.emit(this.pk);
  }

  constructor() {}

  ngOnInit() {}
}
