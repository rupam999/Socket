const express = require('express');
const { Server } = require('socket.io');
var http = require('http');
const cors = require('cors');

const app = express();
app.use(cors());

var server = http.createServer(app);

const io = new Server(server, {
	cors: {
		origin: 'https://socket-gules.vercel.app/',
		methods: ['GET', 'POST'],
	},
});

app.get('/api', (req, res) => {
	io.on('connection', (socket) => {
		console.log(socket.id);

		socket.on('joinRoom', (room) => {
			socket.join(room);
		});

		socket.on('newMessage', ({ newMessage, room }) => {
			io.in(room).emit('getLatestMessage', newMessage);
		});
	});

	res.send('Chat BE with Socket.io by Prince Raj');
	res.end();
});

const port = process.env.PORT || 9000;

server.listen(port, console.log(`App started at port ${port}`));
