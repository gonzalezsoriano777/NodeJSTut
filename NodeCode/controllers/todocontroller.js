var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Connect to the database
mongoose.connect('mongodb://soriano:hector3463@ds111993.mlab.com:11993/todo'); // connects to the database

// Create a schema - this is like a blueprint
var todoSchema = new mongoose.Schema({
 item: String
});


var Todo = mongoose.model('Todo', todoSchema); // create a model and basing it off a schema




 var urlencodedParser = bodyParser.urlencoded({extended: false});
 

module.exports = function(app){ // passing the varaible of app here
 
 
app.get('/todo', function(req, res){
      // get data from MongoDB and pass it to view
      Todo.find({}, function(err,data){
       if (err) throw err;
       res.render('todo', {todos: data}); // this is passed to the view folder
      });
      
 });
   
app.post('/todo', urlencodedParser, function(req, res){
      // get data from the view and add it to MongoDB
      var newTodo = Todo(req.body).save(function(err,data){
       if (err) throw err;
       res.json(data);
      })
      // data.push();// send this data back to the front end, and recieving back to json
      
 });  

    
app.delete('/todo/:item', function(req, res){
 // delete the requested item from MongoDB
 Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
  if (err) throw err;
  res.json(data);
 });

});

}