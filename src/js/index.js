// Javascript Entry Point
import $ from 'jquery';
import GameElement from './gameElement';
import Game from './game';
var game = new Game();
var running = setInterval(()=>{
	game.update()
}, 80);

$('.app').append(game.render());