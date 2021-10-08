var http = require('http');

http.createServer(function (req,res){
	res.write('Hello World!');
	res.end();
}).listen(7070);
//let z = 19*97;
//<button onclick=alert(z)>Free number right here</button>
