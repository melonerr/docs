# Express.js

##### Basic

```javascript
const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write('hello');
    return res.end();
});
app.get('home', async(req, res) => {
    res.render('index')
});
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
```

##### Request

    req.param()

```javascript
// ?name=sasha
req.param('name')// => "sasha"

// POST name=sasha
req.param('name')// => "sasha"

// /user/sasha for /user/:name
req.param('name')// => "sasha"
```

    req.is(type)

```javascript
// With Content-Type: text/html; charset=utf-8
req.is('html');
req.is('text/html');
req.is('text/*');
// => true
```

    req.get(field)

```javascript
req.get('Content-Type');// => "text/plain"
req.get('content-type');// => "text/plain"
req.get('Something');// => undefined
```

##### Response

    Render method

1. Install ejs `npm install ejs`
2. Create directory `./view`
3. Create file in `./view`
   ex ` ./view/home.ejs`
4. View engine setup `app.set();`

```javascript
app.set('view engine', 'ejs');

// send the rendered view to the client  
app.get('/home', function(req, res){
    res.render('home')
});

// pass a local variable to the view  
app.get('/home', function(req, res,){
   res.render('home', { name: 'aryan' });  
});

app.render('home', function (err, html) {
    if (err) console.log(err);
    console.log(html);
});
```

    Cookie method

```javascript
res.cookie('name', 'Aryan', { domain: '.xyz.com', path: '/admin', secure: true });

res.cookie('Section', { Names: [Aryan,Sushil,Priyanka] });

res.cookie('Cart', { items: [1,2,3] }, { maxAge: 900000 });
```

```javascript
// Clear Cookie
res.cookie('name', 'Aryan', { path: '/admin' });

res.clearCookie('name', { path: '/admin' })
```

    Download method

```javascript
res.download('/report-12345.pdf');
```

    End method

```javascript
res.end();
res.status(404).end();
```

    Format method

```javascript
res.format(
    {  
        'text/plain': function(){  
        res.send('hey');  
    },  
    'text/html': function(){  
        res.send('hey');  
    },  
    'application/json': function(){  
        res.send({ message: 'hey' });  
    },  
    'default': function() {  
        res.status(406).send('Not Acceptable');  
    }  
});  

```

    JSON method

```javascript
res.json(null)  
res.json({ name: 'ajeet' })  
```

    JSONP method

```javascript
res.jsonp(null)  
res.jsonp({ name: 'ajeet' })  
```

    Links method

```javascript
res.links({
    next: 'http://api.rnd.com/users?page=5',
    last: 'http://api.rnd.com/users?page=10'
});
```

    Location method

```javascript
res.location('http://xyz.com');
```

    Redirect method

```javascript
res.redirect('http://example.com');  
res.redirect(200,'http://example.com');  

```

    Send method

```javascript
res.send(new Buffer('whoop'));  
res.send({ some: 'json' });
```

    sendFile method

```javascript
res.sendFile(fileName, options, function (err) {  
  // ...  
});  
```

    Set method

```javascript
res.set('Content-Type', 'text/plain');  
  
res.set({  
  'Content-Type': 'text/plain',  
  'Content-Length': '123',  
})  
```

    Status method

```javascript
res.status(403).end();  
res.status(400).send('Bad Request');  
```

    Type method

```javascript
res.type('.html');              // => 'text/html'  
res.type('html');               // => 'text/html'  
res.type('json');               // => 'application/json'  
res.type('application/json');   // => 'application/json'  
res.type('png');                // => image/png:  
```

##### Get Method

**HTML**

```HTML
<form action="login" method="GET">  
    First Name: <input type="text" name="first_name">
    <br>  
    Last Name: <input type="password" name="password">  
    <input type="submit" value="Submit">  
</form>  
```

**Node JS**

```javascript
var express = require('express');  
var app = express();  
app.use(express.static('public'));  
 
app.get('/process_get', function (req, res) {  
   response = {  
       first_name:req.query.first_name,  
       last_name:req.query.last_name  
   };  
   console.log(response);  
   res.end(JSON.stringify(response));  
})   
```

##### Post Method

**HTML**

```HTML
<form action="login" method="POST">  
    First Name: <input type="text" name="first_name">
    <br>  
    Last Name: <input type="password" name="password">  
    <input type="submit" value="Submit">  
</form>  
```

**Node JS**

```javascript
var express = require('express');  
var app = express();  
app.use(express.static('public'));  
 
app.POST('/process_get', function (req, res) {  
   response = {  
       first_name:req.body.first_name,  
       last_name:req.body.last_name  
   };  
   console.log(response);  
   res.end(JSON.stringify(response));  
})   
```

##### Cookies

```javascript
var express = require('express');  
var cookieParser = require('cookie-parser');  
var app = express();  
app.use(cookieParser());   



app.get('/cookie/set',function(req, res){  
     res.cookie('cookie_name' , 'cookie_value').send('Cookie is set');  
}); 
 
app.get('/cookie/clear',function(req, res){  
     res.clearCookie('cookie_name', { path: '/cookie/set' })  
});  
```

##### FileUpload

**Form**

```javascript
app.get('/formupload', (req, res) => {

  // HTML form
  var UploadForm = `
    <form action="fileupload" method="post" enctype="multipart/form-data">
        <input type="file" name="filetoupload"><br>
        <input type="submit">
    </form> `


    res.writeHead(200, { 'Content-Type': ContentTypeHTML });
    res.write(UploadForm);
    return res.end();
});
```

**Upload**

```javascript
var formidable = require('formidable');
var mv = require('mv');

app.post('/fileupload', (req, res) => {

    var form = new formidable.IncomingForm();
    var todayDate = new Date().toISOString().slice(0, 10);

    form.parse(req, function(err, fields, files) {
	//File Data
        var oldpath = files.filetoupload.filepath;

	//Get file extension
        var fileType = "." + files.filetoupload.originalFilename.split('.').pop()

	//File location and Rename file
        var newpath = './assets/file/' + "file-" + todayDate + "-" + Name + fileType;

	//Move file
        mv(oldpath, newpath, function(err) {
            if (err) throw consold.log(Error: Can't uploadfile!);
        });
    });

    consold.log(File uploaded and moved!);
    res.end();
});
```

##### Middleware

```javascript
var express = require('express');  
var app = express(); 
 
app.use(function(req, res, next) {  
  console.log('%s %s', req.method, req.url);  
  next();  
});  

app.get('/', function(req, res, next) {  
  res.send('Welcome to JavaTpoint!');  
});  

app.get('/help', function(req, res, next) {  
  res.send('How can I help you?');  
});  

var server = app.listen(8000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
})  
```

##### Template Engine

* Pug (formerly known as jade)
* mustache
* dust
* atpl
* eco
* ect
* ejs
* haml
* haml-coffee
* handlebars
* hogan
* jazz
* jqtpl
* JUST
* liquor
* QEJS
* swig
* templayed
* toffee
* underscore
* walrus
* whiskers
