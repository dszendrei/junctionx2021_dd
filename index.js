const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();

app.set('port', (process.env.PORT || 5050));
app.use(express.static(__dirname + '/public'));
app.use('/modules', express.static(__dirname + '/node_modules/'));
app.use('/dist', express.static(__dirname + '/dist/'));
app.set('views', __dirname + '/public');
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.listen(app.get('port'), function() {
});

app.get('/', function(req, res){
    const path = 'index.html';
    res.render(path);
});

app.get('/3d', function(req, res){
    const path = '3d.html';
    res.render(path);
});

let id = "";
let image = "";

app.get('/paint', function(req, res){
    const queryId = req.query?.id
    if(!!queryId) {
        id = queryId;
    }
    
    const path = 'demo.html';
    res.render(path);
});

app.post('/savepaint', function(req, res){
    const queryImage = req.body[0].image;
    if(!!queryImage) {
        image = queryImage;
    }
});

app.get('/getpaint', function(req, res){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.send(image);
});

app.get('/integration', function(req, res){
    const path = 'integration.html';
    res.render(path);
});
