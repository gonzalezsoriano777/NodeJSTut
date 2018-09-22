var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Connect to the database
mongoose.connect('mongodb://soriano:hector3463@ds111993.mlab.com:11993/todo'); // connects to the database

// Create a schema - this is like a blueprint
var todoSchema = new mongoose.Schema({
 item: String
});


var Todo = mongoose.model('Todo', todoSchema); // create a model and basing it off a schema
var itemOne = Todo({item: 'buy flowers'}).save(function(err){
  if (err) throw err; // make a function with a call back
  console.log('item saved');
});


var data = [{item: 'get milk'}, 
 {item: 'walk dog'},
 {item: 'kick some coding ass'}];
 var urlencodedParser = bodyParser.urlencoded({extended: false});
 

module.exports = function(app){ // passing the varaible of app here
 
 
app.get('/todo', function(req, res){
      res.render('todo', {todos: data}); // this is passed to the view folder
 });
   
app.post('/todo', urlencodedParser, function(req, res){
      data.push(req.body);// send this data back to the front end, and recieving back to json
      res.json(data);
 });  

    
app.delete('/todo/:item', function(req, res){
 data = data.filter(function(todo){
  return todo.item.replace(/ /g, '-') !== req.params.item;
 })
 res.json(data);
});   
    
    
};
