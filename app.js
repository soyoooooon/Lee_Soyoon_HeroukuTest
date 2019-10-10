const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('public'));

app.get('/',(req,res) => {
console.log ("still don't understand correctly;(")
res.sendFile(path.join(__dirname + '/views/index.html'));
})

app.listen(port, () => {
    console.log(`app is running on ${port}`);
})