// var http = require('http');
// var port = 9090;
// http.createServer(responseHandler).listen(port);
// console.log('Server running at http://127.0.0.1:' + port + '/');
//
// function responseHandler(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('<html><body><h1>Hello World</h1></body></html>');
// }
//

// var fs = require('fs');
//
// function copyfile(src, dist) {
//     fs.writeFileSync(dist, fs.readFileSync(src));
// }
//
// function main(argv) {
//     copyfile(argv[0], argv[1]);
// }
//
// main(process.argv.slice(2));

// var http = require('http');
// http.createServer(function (request, response) {
//
//     response.writeHead(200, {
//         'Contetnt-Type': 'text/plain'
//     });
//     response.end('Hello World\n');
// }).listen(8888);
//
// console.log('Serve running ati http://127.0.0.1:8888');

var a = '全局';
var F = function () {
    var b = '本地';
    var N = function () {
        var c = '内部';
         return b;
    };
    return N;
};
var inner = F();
console.log(inner);
//console.log(b);