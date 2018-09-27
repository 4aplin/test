var Page = require('./Page');
var expect = require('chai').expect;

var RemovedServerPage = Object.create(Page, {

	status: { get: function () { return browser.element('#scalet-tabs > div > div:nth-child(3) > div > table > tbody > tr:nth-child(1) > td:nth-child(1)'); } },

	waitVisible: { value: function() {
			browser.pause(1000);
			expect(this.status.waitForVisible()).to.be.equal(true);

			expect(this.status.waitForExist()).to.be.equal(true);

			expect(this.status.waitForEnabled()).to.be.equal(true);
	} },
});

module.exports = RemovedServerPage;