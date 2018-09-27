var Page = require('./Page');
var expect = require('chai').expect;

var DefaultPage = Object.create(Page, {
	loginButton: {get: function () {return browser.element(' #global-header-white > div > div > div.user > div:nth-child(1) > a'); } },


	open: { value: function() {
			Page.open.call(this, '');
		} },

	waitVisible: { value: function() {
			browser.pause(2000);
			expect(this.loginButton.waitForVisible()).to.be.equal(true);

		} },


	/*	menuDiscoverClick: {value: function () {
				this.waitVisible();
				var i = 0;
				while (true)
				{
					try {
						this.menuButton.click();
						break;
					}
					catch (error){i = i +1;  }
					this.open();
					browser.pause(1000);
					console.log(i);
					if (i === 30)
						break;
				}
			}}*/
});

// module.exports = DiscoverPage;
module.exports = DefaultPage;