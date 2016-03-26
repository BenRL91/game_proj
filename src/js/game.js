import $ from 'jquery';
import GameElement from './gameElement';


export default class Game extends GameElement {
	constructor(){
		super();
		this.setDimensions([500, 1000]);
		this.setCoordinates([null, null])
		this.class = 'game';
	}
	update(){
		this.render();
	}
}
