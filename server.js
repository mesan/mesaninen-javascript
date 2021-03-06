
/**
 * Module dependencies.
 */

var express = require('express');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.set("view options", { layout: false });
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
require("./routes/index")(app);
require("./routes/domExercises")(app);
require("./routes/jasmine")(app);
require("./routes/promise")(app);

console.log("Express server listening on port %d in %s mode", process.env.port || 3000, app.settings.env);

app.listen(process.env.port || 3000);


