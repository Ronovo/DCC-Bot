//Random Flag I use for conditionals. Will Give it a name at some point.
//#BadCodingHabits
var flag = false;

//All Of The Dice We will Be Using
var d3 = {
  sides: 3,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

var d4 = {
  sides: 4,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

var d5 = {
  sides: 5,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

var d6 = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

var d7 = {
  sides: 7,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

var d8 = {
  sides: 8,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

var d10 = {
  sides: 10,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

var d12 = {
  sides: 12,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

var d14 = {
  sides: 14,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

var d16 = {
  sides: 16,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

var d20 = {
  sides: 20,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

var d24 = {
  sides: 20,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

var d30 = {
  sides: 20,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

var d100 = {
  sides: 100,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

function diceSwitch(string) {
	var result = 0;
	switch(string) {
		case "d3":
			 result = d3.roll();
		break;
		case "d4":
			 result = d4.roll();
		break;
		case "d5":
			 result = d5.roll();
		break;
		case 'd6':
			 result = d6.roll();
		break;
		case "d7":
			 result = d7.roll();
		break;
		case 'd8':
			 result = d8.roll();
		break;
		case 'd10':
			 result = d10.roll();
		break;
		case 'd12':
			 result = d12.roll();
		break;
		case 'd14':
			 result = d14.roll();
		break;
		case 'd16':
			 result = d16.roll();
		break;
		case 'd20':
			 result = d20.roll();
		break;
		case 'd24':
			 result = d24.roll();
		break;
		case 'd30':
			var result = d30.roll();
		break;
		case 'd100':
			var result = d100.roll();
		break;
		default:
			flag = true;
	 }
	 return result
}

function diceRoll(client, message, args){
	var firstChar = args[0].charAt(0);
	//First Option : They send a single die
	if(firstChar == 'd'){
		var result = diceSwitch(args[0]);
		if(!flag){
			var msg = "You rolled a " + result;
		} else {
			var msg = "That is not a valid roll."
		}
		flag = false;
		message.channel.send(msg).catch(console.error);
	} else {
		//Second option : They send multiple dice
		if(firstChar <='9' && firstChar >='0') {
			var validFlag = true;
			var x = firstChar;
			if(args[0].length == 3){
				var die = args[0].substring(1,3)
			} else if(args[0].length == 4){
				var die = args[0].substring(1,4)
			} else if(args[0].length == 5){
				var die = args[0].substring(1,5)
			}
			var result = 0;
			var total = 0;
			for(i = 0; i < x; i++){
				result = diceSwitch(die);
				//if flag is true, die type sent was not valid
				if(flag){
					var msg = "That is not a valid die type."
					message.channel.send(msg).catch(console.error);
					flag = false
					validFlag = false;
					break;
				}
				total = total + result;
			}
			if(validFlag){
				var msg = "You rolled " + args[0] + " for a total of " + total+"!";
				message.channel.send(msg).catch(console.error);	
			}
		//Final Option : They didn't send a valid string
		} else{
			var msg = "Your roll must begin with a number or d!"
			message.channel.send(msg).catch(console.error);
		}
	}
}	


exports.run = (client, message, args) => {
	diceRoll(client, message, args)
}