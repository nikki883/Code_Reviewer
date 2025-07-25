import express from 'express';
import cors from 'cors';

import aiRoutes from '../src/routes/ai.routes.js'

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use('/ai',aiRoutes);

// Basic route
app.get('/', (req, res) => {
    console.log("heyyyyy"); 
    res.send("Hello from server!");
});



export default app;
