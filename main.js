const express = require('express');
const fs = require('fs');
const path = require('path');
const CONFIG = require('./config');

const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/api/getModels', (req, res) => {
    
});

app.listen(CONFIG.PORT, () => {
    console.log(`Server is running on http://localhost:${CONFIG.PORT}`);
});
