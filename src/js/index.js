// Javascript Entry Point
import $ from 'jquery';
import GameElement from './gameElement';
import Game from './game';
import Ball from './ball';
import Paddle from './paddle';

var game = new Game();
var ball = new Ball();
var leftPaddle = new Paddle('leftPaddle', 15, 250);
var rightPaddle = new Paddle('rightPaddle', 985, 250);
var running = setInterval(()=>{
	game.update();
	ball.update();
	if (ball.isMoving()){
	ball.moveLikeABall()
	};
}, 1);

$('.app').append(game.render());
$('.app').append(ball.render());
$('.app').append(leftPaddle.render());
$('.app').append(rightPaddle.render());


$(document).on('keyup', event => {
  console.log('keyup', event.keyCode);
  var key = event.keyCode;
  if (key === 32) {
    //spacebar
    ball.isMoving()
	}
});