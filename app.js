const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <h1>Hello from DevOps!</h1>
            <p>Welcome to my Junior DevOps Assignment.</p>
            <p>Node.js Application is Running Successfully!</p>
        `);
    } else if (req.url === '/health') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            status: 'UP',
            application: 'Node.js',
            port: PORT
        }));
    } else {
        res.writeHead(404);
        res.end('404 - Page Not Found');
    }
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
