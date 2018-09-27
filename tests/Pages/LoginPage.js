var Page = require('./Page');
var expect = require('chai').expect;

var LoginPage = Object.create(Page, {
	email: { get: function () { return browser.element('#login-user > div > form > div:nth-child(4) > div:nth-child(1) > input'); } },
	password: { get: function () { return browser.element('#login-user > div > form > div:nth-child(4) > div.mtx2.password.pr10.pl40 > div.psw_input_btn > input'); } },
	submitButton: { get: function () { return browser.element(' #login-user > div > form > div:nth-child(4) > div.text-center.mtx2 > button'); } },


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

});

module.exports = LoginPage;