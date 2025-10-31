    import net from 'net';
    const server = net.createServer((socket) => {
        console.log('Client connected');

        socket.on('data', (chunk) => { 
            console.log('Received: ', chunk.toString());
            socket.write('Server received: ' + chunk);
        });

    });

    server.listen(3000, () => {
        console.log('Server listening on port 3000');
    });
