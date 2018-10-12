import * as page from './PageObject.js';

module.exports = function() {
        this.Given(/^we're in Cinepolis$/, function () {
            browser.url(page.default.getUrl());
        });
        this.When(/^we click (\S*)$/, function (arg1) {
            var selector = page.default.getElement(arg1);
            browser.click(selector);
        });
        this.Then(/^we set the city "(\S)"$/,function(city){
            browser.selectByVisibleText(this.inputCity, city);
        });
        this.Then(/^we set the place "([^"]*)"$/,function(place){
            browser.selectByVisibleText(this.inputPlace, place);
        });
}