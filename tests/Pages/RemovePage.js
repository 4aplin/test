var Page = require('./Page');
var expect = require('chai').expect;

var RemovePage = Object.create(Page, {

	serverName : { get: function () { return browser.element('body > div.modal.ng-scope.ng-isolate-scope.in > div > div > div > div > div.toolbar > div > div.dialog-scalet-name.ng-binding'); } },
	agreeCheck : { get: function () { return browser.element('body > div.modal.ng-scope.ng-isolate-scope.in > div > div > div > form > div.dialog__content > div.mt40.mb20.text-center > div > label'); } },
	nameInput : { get: function () { return browser.element('body > div.modal.ng-scope.ng-isolate-scope.in > div > div > div > form > div.dialog__content > captcha > div > div.mt > input'); } },
	removeButton : { get: function () { return browser.element('body > div.modal.ng-scope.ng-isolate-scope.in > div > div > div > form > div.dialog__actions > button.btn.btn-lblue.btn--m.btn--raised.ng-binding'); } },

	waitVisible: { value: function() {
		browser.pause(1000);
		expect(this.serverName.waitForVisible()).to.be.equal(true);
		expect(this.agreeCheck.waitForVisible()).to.be.equal(true);

		expect(this.serverName.waitForExist()).to.be.equal(true);
		expect(this.agreeCheck.waitForExist()).to.be.equal(true);

		expect(this.serverName.waitForEnabled()).to.be.equal(true);
		expect(this.agreeCheck.waitForEnabled()).to.be.equal(true);
	}
	},

	waitInput : { value: function() {
		browser.pause(1000);
		expect(this.nameInput.waitForVisible()).to.be.equal(true);
		expect(this.nameInput.waitForExist()).to.be.equal(true);
		expect(this.nameInput.waitForEnabled()).to.be.equal(true);
	}
	},

	waitButton :  { value: function () {
		browser.pause(1000);
		expect(this.removeButton.waitForVisible()).to.be.equal(true);
		expect(this.removeButton.waitForExist()).to.be.equal(true);
		expect(this.removeButton.waitForEnabled()).to.be.equal(true);
	}
	},
});

module.exports = RemovePage;