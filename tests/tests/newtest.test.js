var assert = require('assert');
var expect = require('chai').expect;
var Page = require('../Pages/Page');
var DonePage = require('../Pages/DonePage');
var LoginPage = require('../Pages/LoginPage');
var NewScaletPage = require('../Pages/NewScaletPage');
var DefaultPage = require('../Pages/DefaultPage');
var ScaletsPage = require('../Pages/ScaletsPage');
var ServerPage = require('../Pages/ServerPage');
var RemovePage = require('../Pages/RemovePage');
var RemovedServerPage = require('../Pages/RemovedServerPage');
var fs=require("fs");


describe('server ', function () {

	it('create', function () {

		DefaultPage.open();
		DefaultPage.waitVisible();
		DefaultPage.loginButton.click();

		LoginPage.waitVisible();

		LoginPage.email.click();
		LoginPage.email.addValue(Page.userEmail);
		LoginPage.waitVisible();

		LoginPage.password.setValue(Page.userPass);
		LoginPage.waitVisible();
		LoginPage.submitButton.click();

		browser.pause(10000);

		ScaletsPage.waitVisible();
		ScaletsPage.createServerButton.click();

		NewScaletPage.waitVisible();
		NewScaletPage.createButton.click();

		browser.pause(5000);

		DonePage.waitVisible();
		DonePage.goServersButton.click();

		browser.pause(24000);

		ScaletsPage.waitVisible();
		ScaletsPage.serverBlock.click();

		ServerPage.waitVisible();
		expect(ServerPage.status.getText()).to.be.equal('Запущен');

		ServerPage.removeButton.click();

		RemovePage.waitVisible();
		var serverName = RemovePage.serverName.getText();
		RemovePage.agreeCheck.click();
		RemovePage.waitInput();
		RemovePage.nameInput.setValue(serverName);
		RemovePage.waitButton();
		RemovePage.removeButton.click();

		ScaletsPage.waitVisible();

		ScaletsPage.serverBlock.click();
		browser.pause(2000);

		var url = browser.getUrl();
		fs.writeFileSync("txt.txt", url,  "ascii");

	});

	it('remove', function () {

		DefaultPage.open();
		DefaultPage.waitVisible();
		DefaultPage.loginButton.click();

		LoginPage.waitVisible();

		LoginPage.email.click();
		LoginPage.email.addValue(Page.userEmail);
		LoginPage.waitVisible();

		LoginPage.password.setValue(Page.userPass);
		LoginPage.waitVisible();
		LoginPage.submitButton.click();

		browser.pause(10000);
		// browser.pause(24000);

		var url = fs.readFileSync("txt.txt", "ascii");
		browser.url(url);
		browser.pause(5000);

		RemovedServerPage.waitVisible();

		browser.screenshot();

		expect(RemovedServerPage.status.getText()).to.be.equal('Удалён');

	})
});
