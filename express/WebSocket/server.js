import net from 'net'; // Corrected import statement

const server = net.createServer((socket) => {
    console.log("Client Connected");

    socket.write("Welcome to Client!");

    socket.on("data", (data) => { // Fixed syntax error here
        console.log("Server says:", data.toString());
    });
});

server.listen(8080, () => { // Added server listen call
    console.log("Server is listening on port 8080");
});