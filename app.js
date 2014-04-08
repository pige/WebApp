
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/register', routes.index);
app.get('/register/setup', routes.index);
app.get('/register/account', routes.index);
app.get('/js/webapp.js', routes.webapp);
app.get('/js/template/registration.html', routes.registration);
app.get('/js/template/registration-setup.html', routes.registrationSetup);
app.get('/js/template/registration-account.html', routes.registrationAccount);
app.get('/js/services/APIService.js', routes.apiservice);
app.get('/js/controller/RegistrationController.js', routes.registrationController);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
