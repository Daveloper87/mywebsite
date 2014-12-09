'use strict';

//** CONTROLLERS
var GameCtrl = require('./controllers/GameCtrl.js');
var HomeCtrl = require('./controllers/HomeCtrl.js');
var BlogCtrl = require('./controllers/BlogCtrl.js');
var ProjectCtrl = require('./controllers/ProjectCtrl.js');
var AdminCtrl = require('./modules/admin/admin.controller.js');
var BlogDetailCtrl = require('./controllers/BlogDetailCtrl.js');

//** DIRECTIVES
var ProjectDir = require('./directives/project_type.directive.js');

//** SERVICES
var ProjectServ =  require('./services/ProjectsService.js');
var BlogServ =  require('./services/BlogService.js');
var AdminServ = require('./modules/admin/admin.service.js');

var appRouteConfig = require('./config.js');

angular.module('mainapp', ['ngRoute', 'ngResource'])
.config(['$routeProvider', '$locationProvider', appRouteConfig.config])
.factory('ProjectService', ProjectServ.ProjectsService)
.factory('BlogService', BlogServ.BlogService)
.factory('AdminService', ['$resource', AdminServ.AdminServiceService])

.directive('projectType', ProjectDir.ProjectType)

.controller('GameController', GameCtrl.GameController)
.controller('HomeController', HomeCtrl.HomeController)
.controller('BlogController', BlogCtrl.BlogController)
.controller('BlogDetailController', BlogDetailCtrl.BlogDetailController)
.controller('ProjectController', ProjectCtrl.ProjectController)
.controller('AdminController', ['$scope', 'AdminService', ProjectCtrl.ProjectController]);


// Inject dependancies after
BlogCtrl.BlogController.$inject = ['BlogService'];
BlogDetailCtrl.BlogDetailController.$inject = ['$routeParams', '$sce', 'BlogService'];
ProjectCtrl.ProjectController.$inject = ['ProjectService'];

BlogServ.BlogService.$inject = ['$resource'];
ProjectServ.ProjectsService.$inject = ['$resource'];
