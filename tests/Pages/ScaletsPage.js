var Page = require('./Page');
var expect = require('chai').expect;

var ScaletsPage = Object.create(Page, {

	createServerButton : { get: function () { return browser.element('#state_base\\2e scalets\\2e list > div:nth-child(2) > div > div.layout-content.ng-scope > div > div > div.category-title > div.ng-scope > button'); } },
	serverBlock : { get: function () { return browser.element('#state_base\\2e scalets\\2e list > div:nth-child(2) > div > div.layout-content.ng-scope > div > div > div.scalets.common-blocks > div:nth-child(1)'); } },
	statusBlock : { get: function () {return browser.elements('#state_base\2e scalets\2e list > div:nth-child(2) > div > div.layout-content.ng-scope > div > div > div.scalets.common-blocks > div.ng-scope.scalet.status-deleting.progress > div > div.scalet-he > div.state'); } },

	waitVisible: { value: function() {
			browser.pause(1000);
			expect(this.createServerButton.waitForVisible()).to.be.equal(true);
			expect(this.createServerButton.waitForExist()).to.be.equal(true);
			expect(this.createServerButton.waitForEnabled()).to.be.equal(true);
	} },

	waitStatus: { value: function () {
		browser.pause(1000);
		expect(this.statusBlock.waitForVisible()).to.be.equal(true);
		expect(this.statusBlock.waitForExist()).to.be.equal(true);
		expect(this.statusBlock.waitForEnabled()).to.be.equal(true);
	}},
});

module.exports = ScaletsPage;