const http = require('http')
const port = 5055

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "https://replit.com",
		"Access-Control-Allow-Methods": "GET, PING, OPTIONS",
		"Content-Type": "text/html"
    })
})

server.listen(port, () => console.log('server for UpTimeRobot is ready'))