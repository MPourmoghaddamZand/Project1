/* M.Pourmoghaddam */
const net = require('net');
const readline = require('readline');
const client = net.createConnection({ port: 3000, host: 'localhost' }, () => {
    console.log('Connected to server');
});
client.on('data', (data) => {
    console.log('Server: ' + data.toString());
});
client.on('error', (err) => {
    console.log('First Run the file "Server.js"');
    client.destroy();
});
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', (input) => {
    client.write(input);
});
