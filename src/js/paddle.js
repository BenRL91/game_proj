import $ from 'jquery';
import GameElement from './gameElement';

export default class Paddle extends GameElement {
	constructor(padClass, x, y){
		super();
		this.class = padClass;
		this.setDimensions([120, 15])
		this.setCoordinates([x, y - this.height/2]);
		this.leftSide = this.trackLeftSide();
		this.rightSide = this.trackRightSide();
	}
	moveUp(){
		var [x, y] = this.getCoordinates()
		y -= 40;
		this.setCoordinates([x, y]);
		this.HTML.css({top: `${y}px`, left: `${x}px`});
	}
		moveDown(){
		var [x, y] = this.getCoordinates()
		y += 40;
		this.setCoordinates([x, y]);
		this.HTML.css({top: `${y}px`, left: `${x}px`});
	}
	trackLeftSide(){
		var [x, y] = this.getCoordinates()
		// console.log[x,y]
		// console.log([x, y +100])
		return [x, y +100];
	}
	trackRightSide(){
		var [x, y] = this.getCoordinates()
		return [x + 15, y + 100];
	}
}