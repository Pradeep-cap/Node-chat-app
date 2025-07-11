const net = require('net');

const client = net.createConnection({ port: 5000 }, () => {
    console.log('Connected to server!');
    process.stdin.on('data', (data) => {
        client.write(data);
    });
});

client.on('data', (data) => {
    console.log(data.toString());
});

client.on('end', () => {
    console.log('Disconnected from server');
});
