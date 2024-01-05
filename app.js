const express = require('express'); 
const path = require("path");

const app = express(); 
const PORT = 3000; 

app.use(express.static("public"));

app.get('/API', (req, res)=>{ 
    res.status(200); 
    res.send("Welcome to API URL of Server"); 
}); 

// Define a catch-all route to serve the main HTML file
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, (error) =>{ 
	if(!error) 
		console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
	else
		console.log("Error occurred, server can't start", error); 
	} 
); 
