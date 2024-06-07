import { io } from "socket.io-client";
console.log(process.env.REACT_APP_BACKEND_API);
export const socket = io(new URL(`/ws/notifications`, process.env.REACT_APP_BACKEND_API).toString());