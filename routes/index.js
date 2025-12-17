var express = require('express');
var router = express.Router();

const app = express();
const port = 3000;
var once=true; 
var a,b;
// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/chat', function(req, res, next) {
  if(once==true){
  const decodedName = req.query.name;
  const decodedPassword = req.query.password;
  if(decodedName==undefined&&decodedPassword==undefined){
     res.render('chat', { name: a, password: b });
  }
  else{
  a=decodedName;
  b=decodedPassword;
  console.log(a);
  console.log(b);
  res.render('chat', { name: decodedName, password: decodedPassword });
 }
 
 console.log(once);
}
else{
  console.log("Last");
  console.log(a);
  console.log(b);
  once=true;
  res.render('chat', { name: a, password: b });
}
});


router.get('/register',function(req,res,next){
  res.render('register');
});

router.get('/quote',function(req,res,next){
  res.render('quote');
});

router.get('/allblogs',function(req,res,next){
  res.render('allblogs');
});

router.get('/about',function(req,res,next){
  res.render('about');
});

router.get('/jokes',function(req,res,next){
  res.render('jokes');
});

// router.get('/login', function(req, res, next) {
//   res.render('login');
// });

module.exports = router;
