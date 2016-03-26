import GameElement from './gameElement';
import $ from 'jquery';
//Display the current score of the game for each player.

export default class Scoreboard extends GameElement {
  constructor(class, x, y){
    this.setDimensions([100, 100]);
    this.setCoordinates([x, y]);
    this.class = class;
  }
}
