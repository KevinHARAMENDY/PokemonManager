import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() pk;
  @Output() choix = new EventEmitter();

  clicPokemon() {
    this.choix.emit(this.pk);
  }

  constructor() {}

  ngOnInit() {}
}
