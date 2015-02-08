!function e(r,o,t){function l(c,n){if(!o[c]){if(!r[c]){var s="function"==typeof require&&require;if(!n&&s)return s(c,!0);if(i)return i(c,!0);throw new Error("Cannot find module '"+c+"'")}var a=o[c]={exports:{}};r[c][0].call(a.exports,function(e){var o=r[c][1][e];return l(o?o:e)},a,a.exports,e,r,o,t)}return o[c].exports}for(var i="function"==typeof require&&require,c=0;c<t.length;c++)l(t[c]);return l}({1:[function(e,r,o){"use strict";var t=function(e){var r=this;r.blogPosts=e.query()};t.prototype={},o.BlogController=t},{}],2:[function(e,r,o){"use strict";var t=function(e){var r=this;return r.resource_=e,r.resource_("/api/blogs/:id",{id:"@id"})};o.BlogService=t},{}],3:[function(e,r,o){"use strict";var t=function(e,r,o){var t=this;t.routeParams_=e,t.sce_=r,t.blogService_=o,t.blogPost=t.blogService_.get({id:t.routeParams_.id})};t.prototype={renderHtml:function(e){return this.sce_.trustAsHtml(e)}},o.BlogDetailController=t},{}],4:[function(e,r,o){"use strict";o.config=function(e,r){e.when("/",{controller:"HomeController as homeCtrl",templateUrl:"/views/partial/home"}).when("/bored",{controller:"GameController as gameCtrl",templateUrl:"/views/partial/404"}).when("/projects",{controller:"ProjectController as projectCtrl",templateUrl:"views/partial/projects"}).when("/blog",{controller:"BlogController as blogCtrl",templateUrl:"views/partial/blog"}).when("/blog/:id",{controller:"BlogDetailController as blogDetCtrl",templateUrl:"views/partial/blogdetail"}).otherwise({templateUrl:"views/partial/404"}),r.html5Mode(!0)}},{}],5:[function(e){"use strict";var r=e("./game/game.controller.js"),o=e("./home/home.controller.js"),t=e("./blog/blog.controller.js"),l=e("./project/project.controller.js"),i=e("./blog/blogdetail.controller.js"),c=e("./project/projectTile.directive.js"),n=e("./project/project.service.js"),s=e("./blog/blog.service.js"),a=e("./filters/filters.js"),u=e("./config.js");angular.module("mainapp",["ngRoute","ngResource"]).config(["$routeProvider","$locationProvider",u.config]).factory("ProjectService",n.ProjectsService).factory("BlogService",s.BlogService).directive("projectType",c.ProjectType).controller("GameController",r.GameController).controller("HomeController",o.HomeController).controller("BlogController",t.BlogController).controller("BlogDetailController",i.BlogDetailController).controller("ProjectController",l.ProjectController).filter("reverse",a.reverse),t.BlogController.$inject=["BlogService"],i.BlogDetailController.$inject=["$routeParams","$sce","BlogService"],l.ProjectController.$inject=["ProjectService"],s.BlogService.$inject=["$resource"],n.ProjectsService.$inject=["$resource"]},{"./blog/blog.controller.js":1,"./blog/blog.service.js":2,"./blog/blogdetail.controller.js":3,"./config.js":4,"./filters/filters.js":6,"./game/game.controller.js":7,"./home/home.controller.js":8,"./project/project.controller.js":9,"./project/project.service.js":10,"./project/projectTile.directive.js":11}],6:[function(e,r,o){"use strict";o.reverse=function(){return function(e){return e.slice().reverse()}}},{}],7:[function(e,r,o){"use strict";var t=function(){};t.prototype={word:"Looks like you will have to be bored for a bit longer. This feature is not ready yet.."},o.GameController=t},{}],8:[function(e,r,o){"use strict";var t=function(){};t.prototype={aboutMe:{name:"Dai",description:"MEAN Stack and Android Developer",contact:"me@daio.io",github:"https://github.com/daveloper87"}},o.HomeController=t},{}],9:[function(e,r,o){"use strict";var t=function(e){var r=this;r.projectService_=e,r.projects=r.projectService_.query()};t.prototype={},o.ProjectController=t},{}],10:[function(e,r,o){"use strict";var t=function(e){var r=this;return r.resource_=e,r.resource_("/api/project/:id",{id:"@id"})};o.ProjectsService=t},{}],11:[function(e,r,o){"use strict";var t=function(){return{restrict:"E",templateUrl:"views/partial/project_tile",replace:!1,scope:{project:"=projectObject"},link:function(e,r,o){e.proj=e.$eval(o.projectObject);var t=e.proj.platform.toUpperCase();"ANDROID"===t?(e.icon="android_icon.png",e.css="tile-android"):"WEB"===t?(e.icon="web_icon.png",e.css="tile-web"):(e.icon="web_icon.png",e.css="tile-build")}}};o.ProjectType=t},{}]},{},[5]);