
/*
 * GET home page.
 */

var fs = require('fs');

module.exports = {
    index: function(req, res){
        res.sendfile('index.html');
    },

    webapp: function(req, res){
        res.sendfile('js/webapp.js');
    },

    registration: function(req, res){
        res.sendfile('js/template/registration.html');
    },

    apiservice: function(req, res){
        res.sendfile('js/services/APIService.js');
    },

    registrationController: function(req, res){
        res.sendfile('js/controller/RegistrationController.js');
    }
};