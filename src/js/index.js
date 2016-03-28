// Javascript Entry Point
import $ from 'jquery';
import {range} from 'lodash';
import GameElement from './gameElement';
import Game from './game';
import Ball from './ball';
import Paddle from './paddle';
import Scoreboard from './scoreboard';

var game = new Game();
var ball = new Ball();
var leftPaddle = new Paddle('leftPaddle', 7.5, 250);
var rightPaddle = new Paddle('rightPaddle', 992.5, 250);
var leftScoreboard = new Scoreboard('leftScore', 40, 10);
var rightScoreboard = new Scoreboard('rightScore', 960, 10);
var s1 = 1;
var s2 = 1;
var player;
var running = setInterval(()=>{
	game.update();
	ball.update();
	ball.trackLeftSide();
	// console.log(ball.trackRightSide());
	ball.trackRightSide();
	leftPaddle.trackRightSide();
	rightPaddle.trackLeftSide();
	moveLeft(ball.trackRightSide(), rightPaddle.trackLeftSide());
	moveRight(ball.trackLeftSide(), leftPaddle.trackRightSide());
	scorePoint();
	endGame();
	if (ball.isMoving()){
	ball.moveLikeABall();
	};
}, 1);

$('.app').append(game.render());
$('.app').append(ball.render());
$('.app').append(leftPaddle.render());
$('.app').append(rightPaddle.render());
$('.app').append(leftScoreboard.render());
$('.app').append(rightScoreboard.render());

var $scoreL = $('.leftScore');
var $scoreR = $('.rightScore');

$scoreL.html('0');
$scoreR.html('0');

function scorePoint(){
	var [x, y] = ball.trackLeftSide();
	var [a, b] = ball.getCoordinates();
	if(x > 1000){
		$scoreL.html(`${s1++}`);
		ball.setCoordinates([500, 250]);
	}else if(x < 0){
		$scoreR.html(`${s2++}`);
		ball.setCoordinates([500, 250]);
	};
};



$(document).on('keyup' || 'keydown', event => {
  // console.log('keyup', event.keyCode);
  var key = event.keyCode;
  if (key === 32) {
    //spacebar//
    ball.isMoving()
	};
  if(key === 87){
  	leftPaddle.moveUp();
  };
  if(key === 83){
  	leftPaddle.moveDown();
  };
  if(key === 38){
  	rightPaddle.moveUp();
  };
  if(key === 40){
  	rightPaddle.moveDown();
  };
});

function moveLeft([a, b], [x, y]){
	if (a > x && (b >= (y - 101)) && b <= y){
		ball.direction = -(ball.direction);
	};
};
function moveRight([a, b],[x, y]){
	if (a < x && (b >= (y - 101)) && b <= y){
		ball.direction = -(ball.direction);
	};
};
function displayEndScreen(player){
	document.write(player + ' WON! Refresh the page to play again!')
	clearInterval(running)
};
function endGame(){
if (s1 === 3){
	player = 'Player 1'
	displayEndScreen(player);
}else if (s2 === 3){
	player = 'Player 2'
	displayEndScreen(player);
	};
};
