import $ from 'jquery';

export default class GameElement {
	constructor(){
		//class
		this.class = 'element';
		//dimensions
		//location
		//update function
		//render everytime it's updated
	}
	render(){
		var [h, w] = this.getDimensions();
		this.setDimensions([h, w]);
		var [x, y] = this.getCoordinates();
		this.setCoordinates([x, y]);
		this.HTML = $(`
					<div class='${this.class}'
						 style='width: ${w}px;
						 	    height: ${h}px;
						 	    top: ${y}px;
						 	    left: ${x}px'>
					</div>`)
		return this.HTML;
	}
	setClass(className){
		return className;
	}
	setDimensions([h, w]){
		this.height = h
		this.width = w
	}
	getDimensions(){
		return [this.height, this.width];
	}
	setCoordinates([x, y]){
		this.xCoord = x
		this.yCoord = y
	}
	getCoordinates(){
		return [this.xCoord, this.yCoord];
	}
	update(){
		//Do what needs to be updated about the element
	}
}