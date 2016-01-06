var PORT = process.env.PORT || 8080,
    multer  = require('multer'),
    upload = multer({ dest: 'uploads/' }),
    express = require('express'),
    app = express();

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: __dirname });
});

app.post('/api/fileanalyse', upload.single('file-input'), function (req, res, next) {
    if (req.file) {
        res.send({size: req.file.size});
    } else {
        res.send({error: "No file received"});
    }
})

app.listen(PORT, function() {
    console.log('Start listening on port ' + PORT);
});