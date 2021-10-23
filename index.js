const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const cors = require('cors'); 

const app = express();

app.use(cors());
app.set('port', (process.env.PORT || 5050));
app.use(express.static(__dirname + '/public'));
app.use('/modules', express.static(__dirname + '/node_modules/'));
app.use('/dist', express.static(__dirname + '/dist/'));
app.set('views', __dirname + '/public');
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());

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

app.get('/paint', function(req, res){
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    
    const path = 'demo.html';
    res.render(path);
});

app.get('/integration', function(req, res){
    const path = 'integration.html';
    res.render(path);
});
