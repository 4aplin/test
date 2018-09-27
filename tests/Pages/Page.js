var expect = require('chai').expect;
var fs = require('fs');
var readline = require('readline');

function Page () {
}

Page.prototype.userEmail = "45646";
Page.prototype.userPass = "2dupsc4yUo";

Page.prototype.open = function (path) {
	browser.deleteCookie();
	browser.url(path);
	browser.pause(7000);
};


module.exports = new Page();