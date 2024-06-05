const socketio = require('socket.io');

let io;

const socketIOService = {
    initialize: (server) => {
        io = socketio(server);
        io.on('connection', (socket) => {
            console.log('Socket connected:', socket.id);

            socket.on('disconnect', () => {
                console.log('Socket disconnected:', socket.id);
            });
        });
    },

    getIO: () => {
        if (!io) {
            throw new Error('Socket.io not initialized.');
        }
        return io;
    }
};

module.exports = socketIOService;
