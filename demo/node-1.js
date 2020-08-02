const http = require('http');
const meneye = require('memeye');

meneye();
let leakArray = [];
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        // leakArray.push(Math.random())
        // console.log(leakArray);
        res.end('leakArray')
    }
})
server.listen(3000)