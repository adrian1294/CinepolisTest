import{ cinepolisHome } from '/Users/Ocañas/Documents/Curso Enroute/features/step/PageObject.js'

module.exports = function() {
        this.Given(/^we're in Cinepolis$/, function () {
        browser.url(this.URL);
        });
        this.When(/^we click "([^"]*)"$/, function (arg1) {
            browser.click(arg1)
            });
        this.Then(/^we set the city "([^"]*)"$/,function(city){
            browser.selectByVisibleText(this.inputCity, city);
        });
        this.Then(/^we set the place "([^"]*)"$/,function(place){
            browser.selectByVisibleText(this.inputPlace, place);
        });
}