import io from 'socket.io-client';

//const ENDPOINT = 'http://localhost:3002';  // Adjust this if your server is on a different address
const ENDPOINT = 'http://4.tcp.ngrok.io:19231';  // Adjust this if your server is on a different address

const socket = io(ENDPOINT, {
    transports: ['websocket'],
    upgrade: false,
    reconnection: true,
    reconnectionAttempts: 5,
    timeout: 10000,
    extraHeaders: {
        "ngrok-skip-browser-warning": "69420"
    }
});

export default socket;