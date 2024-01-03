const express = require('express'); 
const path = require("path");

const app = express(); 
const PORT = 3000; 
const loc = path.join(__dirname, './public');

app.use(express.static(loc));
console.log(loc);

app.get('/API', (req, res)=>{ 
    res.status(200); 
    res.send("Welcome to API URL of Server"); 
}); 

app.listen(PORT, (error) =>{ 
	if(!error) 
		console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
	else
		console.log("Error occurred, server can't start", error); 
	} 
); 
