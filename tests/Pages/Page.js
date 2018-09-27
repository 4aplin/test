var expect = require('chai').expect;
var fs = require('fs');
var readline = require('readline');
// var google = require('googleapis');
// var googleAuth = require('google-auth-library');
// var googleKey = 'dmKjjzQFF3IWmKoZUql20ufA';

function Page () {
}



Page.prototype.userEmail = "45646";


Page.prototype.userPass = "2dupsc4yUo";


Page.prototype.urlApi = "https://staging.songline.fm/api/";
Page.prototype.urlBucket = "https://staging-files.songline.fm/";
Page.prototype.urlApiAuth = "https://login-staging.songline.fm/oauth/token";

Page.prototype.open = function (path) {
	browser.deleteCookie();
	browser.url(path);
	browser.pause(7000);
};

Page.prototype.menuButton =  function () {
	expect(browser.element('[data-id-test="menu"]').waitForExist()).to.be.equal(true);
	expect(browser.element('[data-id-test="menu"]').waitForEnabled()).to.be.equal(true);
	return browser.element('[data-id-test="menu"]');
};

Page.prototype.songlineButton =  function () {
	expect(browser.element('[data-id-test="songline"]').waitForExist()).to.be.equal(true);
	expect(browser.element('[data-id-test="songline"]').waitForEnabled()).to.be.equal(true);
	return browser.element('[data-id-test="songline"]');
};

Page.prototype.sick6Button =  function () {
	expect(browser.element('[data-id-test="sick6"]').waitForExist()).to.be.equal(true);
	expect(browser.element('[data-id-test="sick6"]').waitForEnabled()).to.be.equal(true);
	return browser.element('[data-id-test="sick6"]');
};

Page.prototype.artistsButton =  function () {
	expect(browser.element('[data-id-test="artists"]').waitForExist()).to.be.equal(true);
	expect(browser.element('[data-id-test="artists"]').waitForEnabled()).to.be.equal(true);
	return browser.element('[data-id-test="artists"]');
};

Page.prototype.discoverButton =  function () {
	expect(browser.element('[data-id-test="discover"]').waitForExist()).to.be.equal(true);
	expect(browser.element('[data-id-test="discover"]').waitForEnabled()).to.be.equal(true);
	return browser.element('[data-id-test="discover"]');
};

Page.prototype.emailGeneration = function () {
	var today  = new Date().toISOString();
	today = today.replace(':', '').replace('-', '').replace('.', '').replace(':', '').replace('-', '').replace('T', '').slice(0, 15);
	return "test" + today + "@gmail.com";
};

Page.prototype.nameGeneration = function () {
	var userName  = new Date().toISOString();
	userName = userName.replace(':', '').replace('-', '').replace('.', '').replace(':', '').replace('-', '').replace('T', '').slice(0, 15);
	return userName;
};

module.exports = new Page();