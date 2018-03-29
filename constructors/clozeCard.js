module.exports = function(full,cut){
	this.fullSentence = full;

	//this will make the sentence missing the answer
	this.partial = makePartial(full,cut)

	function makePartial(fullSentence,partToCut){

		var start = fullSentence.indexOf(partToCut);
		var end = start + fullSentence.length;
		var lengthOfPartial = fullSentence.slice(start,end).length;
		
		var temp;

			for(i = 0;i<lengthOfPartial;i++){
				temp += "_";
			}


		return fullSentence.slice(0,start)  + temp + fullSentence.slice(end,fullSentence.length);
	}

	//this displays the whole sentence with the answer
	this.display = function(){
		console.log("The full answer is... \n" + this.fullSentence);
	}





}