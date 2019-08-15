const sql = require("sqlite");
sql.open("./dcc.sqlite");
//Creates entry with one person. Not Dynamic.
exports.run = (client, message, args) => {
	sql.run("CREATE TABLE IF NOT EXISTS player (userId TEXT, characterId INTEGER)").then(() => {
		sql.run("CREATE TABLE IF NOT EXISTS character (characterId INTEGER, name TEXT, hp INTEGER, moneyID INTEGER, xp INTEGER, equipmentId INTEGER, occupation TEXT)").then(() => {
			sql.get(`SELECT count(*) FROM player`).then(() => {
				sql.run("INSERT INTO player (userId, characterId) VALUES (?, ?)", [message.author.id, 1]).then(() => {
					sql.run("INSERT INTO character (characterId, name, hp, moneyID, xp, equipmentId, occupation) VALUES (?, ?, ?, ?, ?, ?, ?)",[1, 'John', 0, 1, 0, 1, "Guard"]);
				});
			});
		});
	});
	//Figure out why this doesn't work?
	message.channel.send(test);
	message.channel.send("Character Created!" + test).catch(console.error);
}