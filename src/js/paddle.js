import $ from 'jquery';
import GameElement from './gameElement';

export default class Paddle extends GameElement {
	constructor(padClass, x, y){
		super();
		this.class = padClass;
		this.setDimensions([100, 15])
		this.setCoordinates([x, y - this.height/2])
	}
}