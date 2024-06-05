const Chat = require('../models/chat.model.cjs');
const socketIOService = require('../services/socketio.service.cjs');

const chatController = {
    sendMessage: async (req, res) => {
        try {
            const { sender, receiver, message } = req.body;
            
            const newMessage = new Chat({ sender, receiver, message });
            await newMessage.save();

            const io = socketIOService.getIO();
            io.emit('newMessage', newMessage);

            res.status(201).json({ message: 'Message sent successfully', data: newMessage });
        } catch (error) {
            console.error('Error sending message:', error);
            res.status(500).json({ message: 'Error sending message' });
        }
    },

    editMessage: async (req, res) => {
        try {
            const { messageId } = req.params;
            const { message } = req.body;

            const updatedMessage = await Chat.findByIdAndUpdate(messageId, { message }, { new: true });
            if (!updatedMessage) {
                return res.status(404).json({ message: 'Message not found' });
            }

            res.status(200).json({ message: 'Message updated successfully', data: updatedMessage });
        } catch (error) {
            console.error('Error editing message:', error);
            res.status(500).json({ message: 'Error editing message' });
        }
    },

    getMessages: async (req, res) => {
        try {
            const { userId } = req.params;

            const messages = await Chat.find({ $or: [{ sender: userId }, { receiver: userId }] })
                                        .sort({ timestamp: -1 })
                                        .limit(10);

            res.status(200).json({ data: messages });
        } catch (error) {
            console.error('Error getting messages:', error);
            res.status(500).json({ message: 'Error getting messages' });
        }
    }
};

module.exports = chatController;
