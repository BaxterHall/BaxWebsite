const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;




app.use(express.static(__dirname + '/build'));


app.listen(PORT,() => {
	console.log("Listening on Port:%s",PORT)
	console.log("Stop with Ctrl+C");
});

app.get('*', (req, res) => {
    res.sendFile('index.html',{root: __dirname + '/build'});
});