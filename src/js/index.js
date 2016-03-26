// Javascript Entry Point
import $ from 'jquery';
import GameElement from './gameElement';
import Game from './game';
import Ball from './ball';
import Paddle from './paddle';

var game = new Game();
var ball = new Ball();
var leftPaddle = new Paddle('leftPaddle', 7.5, 250);
var rightPaddle = new Paddle('rightPaddle', 992.5, 250);
var running = setInterval(()=>{
	game.update();
	ball.update();
	ball.trackLeftSide();
	// console.log(ball.trackRightSide());
	ball.trackRightSide();
	leftPaddle.trackRightSide();
	rightPaddle.trackLeftSide();
	moveLeft(ball.trackRightSide(), rightPaddle.trackLeftSide())
	moveRight(ball.trackLeftSide(), leftPaddle.trackRightSide())
	if (ball.isMoving()){
	ball.moveLikeABall();
	};
}, 1);

$('.app').append(game.render());
$('.app').append(ball.render());
$('.app').append(leftPaddle.render());
$('.app').append(rightPaddle.render());


$(document).on('keyup' || 'keydown', event => {
  // console.log('keyup', event.keyCode);
  var key = event.keyCode;
  if (key === 32) {
    //spacebar
    ball.isMoving()
	}
  if(key === 87){
  	leftPaddle.moveUp();
  }
  if(key === 83){
  	leftPaddle.moveDown();
  }
  if(key === 38){
  	rightPaddle.moveUp();
  }
  if(key === 40){
  	rightPaddle.moveDown();
  }
});

function moveLeft([a, b], [x, y]){
	if (a > x && (b >= (y - 101)) && b <= y){
		ball.direction = -(ball.direction);
	}
}
function moveRight([a, b],[x, y]){
	if (a < x && (b >= (y - 101)) && b <= y){
		ball.direction = -(ball.direction);
	}
}