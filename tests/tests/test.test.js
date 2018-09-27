


describe('click checking', function () {
	it('login ', function () {

		browser.url('https://vscale.io/panel/login/');
		browser.pause(5000);
// browser.click('//input[@name=".email_or_login"]');
		browser.setValue('#login-user > div > form > div:nth-child(4) > div:nth-child(1) > input ', 'test123');
// browser.debug();
		fs.writeFileSync("txt.txt", url,  "ascii");
	});
});