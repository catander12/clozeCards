var inq = require(`inquirer`);
var basic = require(`./constructors/basicCard.js`);
var cloze = require(`./constructors/clozeCard.js`);

var basicCards = [];
var clozeCards = [];

create();

function create(){
	inq.prompt([
		{
			type:'list',
			name:'typeOfCard',
			message:'What type of card are you trying to create?',
			choices:['Baisc Card (A Front and Back)','Cloze Deletion Card (A line of text with some of it missing)'],
			default:0
		}]).then(answers => {
			if(answers.typeOfCard == 'Baisc Card (A Front and Back)'){
				basicCard();
			}else if(answers.typeOfCard == 'Cloze Deletion Card (A line of text with some of it missing)'){
				clozeCard();
			}
	    
	});
}

function mainMenu(){
	inq.prompt([
		{
			type:'list',
			name:'doNext',
			message:'What would you like to do now?',
			choices:['Make a Basic card','Make a Cloze Card','Study Basic Cards','Study Cloze Cards'],
			default:0
		}]).then(answers => {
			switch(answers.doNext){
				case "Make a Cloze Card":
				clozeCard();
				break;
				case "Make a Basic card":
				basicCard();
				break;
				case "Study Basic Cards":
				studyB();
				break;
				case "Study Cloze Cards":
				studyC();
				break
				case "":
				console.log("goodbye!");
				break;

			}
	    
	});
}

function basicCard(){
	inq.prompt([
		{
			type:'input',
			name:'frontInput',
			message:'What would you like the front of your card to say? (Question)',
			default:'Front of Card'
		},
		{
			type:'input',
			name:'backInput',
			message:'What would you like the back of your card to say? (Answer)',
			default:'Back of Card'

		}]).then(answers => {
			basicCards.push(new basic(answers.frontInput,answers.backInput));
			console.log('The front of your card says: ' + answers.frontInput);
			console.log('The back of your card says: ' + answers.backInput);
			mainMenu();
	});

	

}

function clozeCard(){
	inq.prompt([
		{
			type:'input',
			name:'fullInput',
			message:'What would you like the full sentence to say?',
			default:'No sentence entered'
		},
		{
			type:'input',
			name:'ommission',
			message:'What would you like to be ommited?',
			default:'sentence'

		}]).then(answers => {
			clozeCards.push(new cloze(answers.fullInput,answers.ommission));
			console.log('The full answer will say: ' + answers.fullInput);
			console.log('The part that will be ommited will say: ' + answers.ommission);
			mainMenu();
	});

}


function studyB(){
	for(i = 0; i < basicCards.length;i++){

	}

	return console.log("Nice Study Sesh!");
	mainMenu();
}
