const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    const pathname = new URL(req.url, `http://${req.headers.host}`).pathname;

    if (pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
            <h1>Hello from DevOps!</h1>
            <p>Welcome to my Junior DevOps Assignment</p>
            <p>Node.js Application is Running Successfully !</p>
        `);
    } 
    else if (pathname === '/health') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            status: 'UP',
            application: 'Node.js',
            port: PORT
        }));
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Page Not Found');
    }
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
