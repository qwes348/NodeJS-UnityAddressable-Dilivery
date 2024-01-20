// https://medium.com/@imajeet5/how-to-serve-files-using-node-js-d99de4653a3

var express = require("express");
const path = require('path');

const app = express();
app.use(express.json());

app.post("/req_file", (req, res) => {
    console.log(req.body);
    res.sendFile(path.join(__dirname, "./files/" + req.body.filename));
});


app.get('/platform/:platform/filename/:filename/', (req, res) => {
    console.log("Get: " + req.params.platform.toString() + req.params.filename.toString());
    // ÇÃ·§Æûº°·Î ´Ù¸¥ Æú´õÀÇ ÆÄÀÏÀ» º¸³»ÁÜ
    switch (req.params.platform) {
        case "Android":
            res.sendFile(path.join(__dirname, "./files/Android/" + req.params.filename));
            break;
        case "Windows":
            res.sendFile(path.join(__dirname, "./files/StandaloneWindows64/" + req.params.filename));
            break;
    }
});

app.listen(38545, () => {
    console.log('app listening on port 38545!');
})