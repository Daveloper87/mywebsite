'use strict';

//** CONTROLLERS
var GameCtrl = require('./controllers/GameCtrl.js');
var HomeCtrl = require('./controllers/HomeCtrl.js');
var BlogCtrl = require('./blog/blog.controller.js');
var ProjectCtrl = require('./project/project.controller.js');
var AdminCtrl = require('./modules/admin/admin.controller.js');
var BlogDetailCtrl = require('./blog/blogdetail.controller.js');

//** DIRECTIVES
var ProjectDir = require('./directives/project_type.directive.js');

//** SERVICES
var ProjectServ =  require('./project/project.service.js');
var BlogServ =  require('./blog/blog.service.js');
var AdminServ = require('./modules/admin/admin.service.js');

var appRouteConfig = require('./config.js');

angular.module('mainapp', ['ngRoute', 'ngResource'])
.config(['$routeProvider', '$locationProvider', appRouteConfig.config])
.factory('ProjectService', ProjectServ.ProjectsService)
.factory('BlogService', BlogServ.BlogService)
.factory('AdminService', ['$resource', AdminServ.AdminService])

.directive('projectType', ProjectDir.ProjectType)

.controller('GameController', GameCtrl.GameController)
.controller('HomeController', HomeCtrl.HomeController)
.controller('BlogController', BlogCtrl.BlogController)
.controller('BlogDetailController', BlogDetailCtrl.BlogDetailController)
.controller('ProjectController', ProjectCtrl.ProjectController)
.controller('AdminController', ['$scope', 'AdminService', ProjectCtrl.ProjectController]);


// Inject dependencies after
BlogCtrl.BlogController.$inject = ['BlogService'];
BlogDetailCtrl.BlogDetailController.$inject = ['$routeParams', '$sce', 'BlogService'];
ProjectCtrl.ProjectController.$inject = ['ProjectService'];

BlogServ.BlogService.$inject = ['$resource'];
ProjectServ.ProjectsService.$inject = ['$resource'];
