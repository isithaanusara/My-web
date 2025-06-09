
//_____ _    _ _      _    __  __ ____  
 // / ____| |  | | |    / \  |  \/  |  _ \ 
 //| (___ | |  | | |   / _ \ | |\/| | | | |
 // \___ \| |  | | |  / ___ \| |  | | |_| |
 // ____) | |__| | |_/ /   \ \_|  |_|____/ 
 //|_____/ \____/|_____/     \_\          
 
//             S U L A - M D

import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import path from 'path';

// Importing the 'pair' module
import code from './pair.js';

const app = express();

// Resolve the current directory path in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 8000;

import('events').then(events => {
    events.EventEmitter.defaultMaxListeners = 500;
});

app.use('/code', code);
app.use('/pair', async (req, res) => {
    res.sendFile(path.join(__dirname, 'pair.html'));
});
app.use('/', async (req, res) => {
    res.sendFile(path.join(__dirname, 'main.html'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`𝐏𝙾𝚆𝙴𝚁𝙳 𝐁𝚈 𝐒𝚄𝙻𝙰 𝐌𝙳\n\nServer running on http://localhost:${PORT}`);
});

export default app;
