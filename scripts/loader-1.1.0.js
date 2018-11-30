/*
Loader javascript library created by Marrtan studio
http://marrtan.hys.cz
*/

try {
	console.log("loader.js: v1.1.0");
}
catch(err){

}

var App = App || {};

App.Loader = (function(){
	var self = this;

	self.hideOrShow = function(name, type){
		document.getElementById(name).style.display = type;
	}

	self.cssVisibility = function(name, status){
		document.getElementById(name).style.visibility = status;
	}

	self.loaded = function(loadingStatus){
		if (loadingStatus){
			App.Loader.hideOrShow("loader", "none");
			App.Loader.cssVisibility("content", "visible");
		} else {
			App.Loader.hideOrShow("loader", "block");
			App.Loader.cssVisibility("content","hidden");
		}
	}

	return {
		hide: self.hide,
		show: self.show,
		cssVisibility: self.cssVisibility,
		loaded: self.loaded,
	};
})();