/* M.Pourmoghaddam */
const net = require('net');
const server = net.createServer((socket) => {
    console.log('Client connected');
    socket.on('data', (data) => {
        console.log('Client: ' + data.toString());
    });
    process.stdin.on('data', (input) => {
        socket.write(input);
    });
});
server.listen(3000, () => {
    console.log('Server is running...');
});
