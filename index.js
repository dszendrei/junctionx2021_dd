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
    const path = 'demo.html';
    res.render(path);
});
