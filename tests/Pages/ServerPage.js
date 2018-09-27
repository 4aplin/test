var Page = require('./Page');
var expect = require('chai').expect;

var ServerPage = Object.create(Page, {

	body : { get: function () { return browser.element('#state_base\\2e scalets\\2e id > div:nth-child(2) > div > div > div > div.category-content-box.scalet-card.flex-stretch.min-height-fullwindow > div'); } },
	status : { get: function () { return browser.element('#state_base\\2e scalets\\2e id > div:nth-child(2) > div > div > div > div.category-content-box.scalet-card.flex-stretch.min-height-fullwindow > div > div.ng-scope > div > div > div.scalet-header > div.scalet-name > div.ng-binding.scalet-status.status-started'); } },
	actions : { get: function () { return browser.element('#state_base\\2e scalets\\2e id > div:nth-child(2) > div > div > div > div.home-aside.ng-scope > div'); } },
	removeButton : { get: function () { return browser.element('#state_base\\2e scalets\\2e id > div:nth-child(2) > div > div > div > div.home-aside.ng-scope > div > ul > li.list-row.scalet-deletion > div.list-row__content > a'); } },


	waitVisible: { value: function() {
			browser.pause(1000);
			expect(this.body.waitForVisible()).to.be.equal(true);
			expect(this.status.waitForVisible()).to.be.equal(true);
			expect(this.actions.waitForVisible()).to.be.equal(true);
			expect(this.removeButton.waitForVisible()).to.be.equal(true);
			// expect(this.closeBtn.waitForVisible()).to.be.equal(true);

			expect(this.body.waitForExist()).to.be.equal(true);
			expect(this.status.waitForExist()).to.be.equal(true);
			expect(this.actions.waitForExist()).to.be.equal(true);
			expect(this.removeButton.waitForExist()).to.be.equal(true);
			// expect(this.closeBtn.waitForExist()).to.be.equal(true);

			expect(this.body.waitForEnabled()).to.be.equal(true);
			expect(this.status.waitForEnabled()).to.be.equal(true);
			expect(this.actions.waitForEnabled()).to.be.equal(true);
			expect(this.removeButton.waitForEnabled()).to.be.equal(true);
			// expect(this.closeBtn.waitForEnabled()).to.be.equal(true);

		} },
});

module.exports = ServerPage;