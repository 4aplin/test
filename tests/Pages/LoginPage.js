var Page = require('./Page');
var expect = require('chai').expect;

var LoginPage = Object.create(Page, {
	email: { get: function () { return browser.element('#login-user > div > form > div:nth-child(4) > div:nth-child(1) > input'); } },

	// userName: { get: function () { return browser.element('//input[@formcontrolname="nickname"]'); } },
	password: { get: function () { return browser.element('#login-user > div > form > div:nth-child(4) > div.mtx2.password.pr10.pl40 > div.psw_input_btn > input'); } },
	submitButton: { get: function () { return browser.element(' #login-user > div > form > div:nth-child(4) > div.text-center.mtx2 > button'); } },
	// facebookAccountButton: { get: function () { return browser.element('.facebook-button'); } },
	// googleAccountButton: { get: function () { return browser.element('.google-button'); } },

	// singUpButton: { get: function () { return browser.element(' div.auth-tabs > ul > li:nth-child(2)'); } },
	// loginInButton: { get: function () { return browser.element(' div.auth-tabs > ul > li:nth-child(1)'); } },
	//
	// errorMassagePanel: { get: function () { return browser.element('div.server-response:nth-child(3) > span'); } },
	// errorMassagePanel2: { get: function () { return browser.element('div.validation-message') } },

	waitVisible: { value: function() {
			browser.pause(1000);
			expect(this.email.waitForVisible()).to.be.equal(true);
			// expect(this.password.waitForVisible()).to.be.equal(true);
			// expect(this.password.waitForVisible()).to.be.equal(true);

			expect(this.email.waitForExist()).to.be.equal(true);
			// expect(this.password.waitForExist()).to.be.equal(true);
			// expect(this.password.waitForExist()).to.be.equal(true);

			expect(this.email.waitForEnabled()).to.be.equal(true);
			// expect(this.password.waitForEnabled()).to.be.equal(true);
			// expect(this.password.waitForEnabled()).to.be.equal(true);
		} },

	/*    waitCloseLoginPage: { value: function() {
			browser.pause(1000);
			var i = 0;
			while(browser.getTabIds().length === 2)
			{
				i = i + 1;
				browser.pause(1000);
				if (i === 30)
				{
					throw  new EventException('Wait close login page fail');
				}
			}
			browser.pause(7000);
		} }*/
});

module.exports = LoginPage;