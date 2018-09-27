var Page = require('./Page');
var expect = require('chai').expect;

var NewScaletPage = Object.create(Page, {

	form1 : { get: function () { return browser.element('#new-scalet-form > div.new-scalet-form-images.new-scalet-form-section > div.images-tabs > div > div'); } },
	form2 : { get: function () { return browser.element('#new-scalet-form > div:nth-child(4) > div.new-scalet-from-prices.new-scalet-form-section > div.section-elements'); } },
	form3 : { get: function () { return browser.element('#new-scalet-form > div:nth-child(4) > div.new-scalet-form-locations.new-scalet-form-section > div.section-elements'); } },
	form4 : { get: function () { return browser.element('#new-scalet-form > div:nth-child(4) > div.new-scalet-form-name.new-scalet-form-section'); } },
	form5 : { get: function () { return browser.element('#new-scalet-form > div:nth-child(4) > div.new-scalet-form-ssh.new-scalet-form-section'); } },
	createButton : { get: function () { return browser.element('#new-scalet-form > div:nth-child(4) > div.mt20.ml20.submit-buttons > button.btn.btn-lblue.btn--m.btn--raised.ng-binding'); } },

	waitVisible: { value: function() {
			browser.pause(1000);
			expect(this.form1.waitForVisible()).to.be.equal(true);
			expect(this.form2.waitForVisible()).to.be.equal(true);
			expect(this.form3.waitForVisible()).to.be.equal(true);
			expect(this.form4.waitForVisible()).to.be.equal(true);
			expect(this.form5.waitForVisible()).to.be.equal(true);
			expect(this.createButton.waitForVisible()).to.be.equal(true);

			expect(this.form1.waitForExist()).to.be.equal(true);
			expect(this.form2.waitForExist()).to.be.equal(true);
			expect(this.form3.waitForExist()).to.be.equal(true);
			expect(this.form4.waitForExist()).to.be.equal(true);
			expect(this.form5.waitForExist()).to.be.equal(true);
			expect(this.createButton.waitForExist()).to.be.equal(true);


			expect(this.form1.waitForEnabled()).to.be.equal(true);
			expect(this.form2.waitForEnabled()).to.be.equal(true);
			expect(this.form3.waitForEnabled()).to.be.equal(true);
			expect(this.form4.waitForEnabled()).to.be.equal(true);
			expect(this.form5.waitForEnabled()).to.be.equal(true);
			expect(this.createButton.waitForEnabled()).to.be.equal(true);
		} },
});

module.exports = NewScaletPage;