import io from 'socket.io-client';

const ENDPOINT = 'http://localhost:3001';  // Adjust this if your server is on a different address

const socket = io(ENDPOINT);

export default socket;