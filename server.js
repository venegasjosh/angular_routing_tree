const express = require("express");
const app = express();
const port = 5000
app.use(express.static(__dirname + "/public/dist/public"));
app.get("*", function(req, res) {
    res.sendFile(__dirname + "/public/dist/public/index.html");
});
app.listen(port, () => {
    console.log("Server Running On port:", port);
});