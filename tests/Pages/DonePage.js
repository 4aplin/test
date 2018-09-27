var Page = require('./Page');
var expect = require('chai').expect;

var DonePage = Object.create(Page, {

	login : { get: function () { return browser.element('#scalet_created_modal > div.dialog__content > div.new-scalet-passwords.mt20 > div > div.text-data > div.new-scalet-password-values > div.value-dts > div:nth-child(1)'); } },
	pass : { get: function () { return browser.element('#scalet_created_modal > div.dialog__content > div.new-scalet-passwords.mt20 > div > div.text-data > div.new-scalet-password-values > div.value-dts > div.value-data.ng-binding'); } },
	goServersButton : { get: function () { return browser.element('#scalet_created_modal > div.dialog__actions > button.btn.btn-lblue.btn--m.btn--raised.ng-binding'); } },
	createNewButton : { get: function () { return browser.element('#scalet_created_modal > div.dialog__actions > button.btn.btn--m.btn--white-border.btn--raised.ml\\2b.ng-binding'); } },
	closeBtn : { get: function () { return browser.element('#scalet_created_modal > div.dialog__header > div.close > button'); } },
	// errorMassagePanel: { get: function () { return browser.element('div.server-response:nth-child(3) > span'); } },

	waitVisible: { value: function() {
			browser.pause(1000);
			expect(this.login.waitForVisible()).to.be.equal(true);
			expect(this.pass.waitForVisible()).to.be.equal(true);
			expect(this.goServersButton.waitForVisible()).to.be.equal(true);
			expect(this.createNewButton.waitForVisible()).to.be.equal(true);
			expect(this.closeBtn.waitForVisible()).to.be.equal(true);

			expect(this.login.waitForExist()).to.be.equal(true);
			expect(this.pass.waitForExist()).to.be.equal(true);
			expect(this.goServersButton.waitForExist()).to.be.equal(true);
			expect(this.createNewButton.waitForExist()).to.be.equal(true);
			expect(this.closeBtn.waitForExist()).to.be.equal(true);

			expect(this.login.waitForEnabled()).to.be.equal(true);
			expect(this.pass.waitForEnabled()).to.be.equal(true);
			expect(this.goServersButton.waitForEnabled()).to.be.equal(true);
			expect(this.createNewButton.waitForEnabled()).to.be.equal(true);
			expect(this.closeBtn.waitForEnabled()).to.be.equal(true);

		} },
});

module.exports = DonePage;