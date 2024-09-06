import io from 'socket.io-client';

const ENDPOINT = 'https://e62f-186-155-19-171.ngrok-free.app/';  // Adjust this if your server is on a different address

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