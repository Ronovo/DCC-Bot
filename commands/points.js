const sql = require("sqlite");
sql.open("./score.sqlite");

exports.run = (client, message, args) => { 
sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      if (!row) return message.reply("sadly you do not have any points yet!");
      message.reply(`you currently have ${row.points} points, good going!`);
    });
}