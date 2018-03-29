module.exports = function basic(front, back){

	if(!(this instanceof basic)){
		return new basic(front,back);
	}
	
	this.frontOfCard = front;
	this.backOfCard = back;
}