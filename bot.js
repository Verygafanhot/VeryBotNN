var http = require('http');
http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('estou online nao se preocupe\n');
}).listen(process.env.PORT);
console.log('Servidor rodando em http://127.0.0.1:1337/');
const {Client, RichEmbed } = require('discord.js')

const Files = require(require('path').join(__dirname, 'js', 'Main.js')).Files;

if(!process.send) {

Files.initStandalone();

} else {

process.on('message', function(content) {
	Files.initBotTest(content);
});

}