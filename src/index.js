import http from 'http';
import dotenv from 'dotenv'

const env = dotenv.config({path: '.env'});
console.log(env)

http.createServer((req,res) => {
  res.writeHead(200,{'Content-type': 'text/plain'});
  res.end('Hello world\n')
}).listen(3000,'127.0.0.1');

console.log('Server running at http://127.0.0.1:3000/');