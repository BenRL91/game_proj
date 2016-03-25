import $ from 'jquery';
import GameElement from './gameElement';
import {HEIGHT, WIDTH} from './game_info';

const SPEED = 1

export default class Ball extends GameElement {
	constructor(){
		super();
		this.setDimensions([20, 20]);
		this.setCoordinates([WIDTH/2, HEIGHT/2]);
		this.direction = Math.PI/9;
		this.class = 'ball';
	}
	moveLikeABall(){
		var [h, w] = this.getDimensions();
		var [x, y] = this.getCoordinates();
    x += Math.sin(this.direction) * SPEED;
    y -= Math.cos(this.direction) * SPEED;

    if (x > WIDTH) {
      	this.direction = -this.direction;
    }
    if (x < 0) {
    	this.direction = -this.direction;
    }

    if (y > HEIGHT) {
		this.direction = 1/this.direction; 
	   }
    if (y < 0) {
		this.direction = 1/this.direction;	
    }
		this.setCoordinates([x, y]);
		this.HTML.css({top: `${y}px`, left: `${x}px`})
	}
	isMoving(){
			return true;
	}
}