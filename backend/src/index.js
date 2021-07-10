import { server } from './server';
import './db';

server.start({ port: 3001 }, ({port}) => {
	console.log("Server online! Port:", port);
});