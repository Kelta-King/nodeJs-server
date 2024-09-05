const express = require('express');
const fs = require('fs');
const path = require('path');
const CONFIG = require('./config');

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

function loadModelsObject() {

    const modelsDirectory = path.join(__dirname, 'public', 'Models');
    
    const folders = fs.readdirSync(modelsDirectory).filter(file => {
        const fullPath = path.join(modelsDirectory, file);
        return fs.statSync(fullPath).isDirectory();
    });
    
    var models = [];
    
    folders.forEach(folder => {
        const modelsDir = path.join(modelsDirectory, folder, 'info.json');
        const data = JSON.parse(fs.readFileSync(modelsDir));
        const commonURL = "http://" + CONFIG.ADDRESS + ":" + CONFIG.PORT + "/Models/" + folder + "/";
        models.push({
            name: data.name,
            description: data.description,
            src: {
                model: commonURL + data.model,
                preview: commonURL + data.preview,
            }
        });
    });
    
    console.log('Loaded models:', models);
    return models;
}

const globalModels = loadModelsObject();

app.get('/api/getModels', (req, res) => {
    res.json(globalModels);
});

app.listen(CONFIG.PORT, () => {
    console.log(`Server is running on http://localhost:${CONFIG.PORT}`);
});
