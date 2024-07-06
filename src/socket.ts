import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
// const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:4000';
var URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? "";

URL.replace(/^http/, 'ws')


export const socket = io(URL, {
    autoConnect: true
  });