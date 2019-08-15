exports.run = (client, message, args) => {
var help = "Ronovo V 0.1 Command List\n";
var line = "-------------------\n";
var color = "+color : Simple Embed Test\n"
var kick = "+kick : kicks players (not operational)\n"
var ping = "+ping : returns pong\n"
var reload = "+reload [command] : refreshes changes\n"
var diceChainCmd = "+diceChain : DCC dicechain\n"
var string = help + line + color + kick + ping + reload + diceChainCmd;
var explain = "-Rolls an RPG die(or dice)\n";
var roll = "+roll [num_of_dice][dice_type]\n"
var exproll = "-ex. roll d20 or roll 2d6\n"
var rollSupport = "-Max Number Of Dice: 9\n"
var dice = "-Dice(for DCC-Bot Alpha) \n"
var diceChain = "-d3\n-d4\n-d5\n-d6\n-d7\n-d8\n-d10\n-d12\n-d14\n-d16\n-d20\n-d24\n-d30\n"
string = string + line + dice + line + roll + explain + exproll + rollSupport + diceChain;
var level = "Ronovo's Level System\n"
var intro = "-1 command = 1 point\n"
var cmd = "-Commands:\n"
var point = "+points : shows current points\n"
var lvl = "+level : shows current level"
string = string + line + level + line  + intro + cmd + point + lvl;
message.channel.send({embed: {
  color: 3447003,
  description: string
}});
}