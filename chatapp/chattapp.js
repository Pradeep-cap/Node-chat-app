// Simple Node.js TCP Chat App
// Run: node chattapp.js
// Connect with: telnet localhost 5000

const net = require('net');

const clients = [];

const server = net.createServer((socket) => {
    socket.write('Welcome to the Node.js Chat App!\n');
    clients.push(socket);

    socket.on('data', (data) => {
        for (const client of clients) {
            if (client !== socket) {
                client.write(data);
            }
        }
    });

    socket.on('end', () => {
        clients.splice(clients.indexOf(socket), 1);
    });

    socket.on('error', () => {
        clients.splice(clients.indexOf(socket), 1);
    });
});

server.listen(5000, () => {
    console.log('Chat server running on port 5000');
});
