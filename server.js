import { createServer } from 'http';
import next from 'next';
import socketIo from 'socket.io';
import handle from 'next/dist/next-server/server/next-server';
import express from 'express';

// Set up the Next.js app
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const server = express();

// Initialize the WebSocket server
let io;
app.prepare().then(() => {
    // Create HTTP server to handle both Next.js and WebSocket
    const httpServer = createServer(server);

    // Initialize Socket.io with the HTTP server
    io = socketIo(httpServer);

    // Set up WebSocket connection
    io.on('connection', (socket) => {
        console.log('A user connected via WebSocket');
        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });

    // API route for Paystack Webhook
    server.post('/api/paystack-webhook', (req, res) => {
        // Handling the webhook
        res.send('Webhook received');
    });

    // Handling other requests
    server.all('*', (req, res) => {
        return handle(req, res);
    });

    // Start the server
    httpServer.listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
});

// Make io accessible globally so that webhook can emit events
global.io = io;
