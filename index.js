var express = require('express')
var bodyParser = require('body-parser')
var multer = require('multer')

var app = express()
var upload = multer({ dest: 'uploads/'})

app.set('port', process.env.PORT || 5000)

app.use(express.static(__dirname + '/public'))
app.use(bodyParser({extended: true}))

app.get('/', function(req, res){
  res.render('index')
})

app.post('/api/fileanalyse', upload.single('myfile'), function(req, res){

  res.send(req.file);

});

app.listen(app.get('port'), function(err){
  console.log('App is listening on '+ app.get('port'));
});
