var registration = require ('../data/registration.json');

function Helper() {

    this.maximizeWindow = async () => {
        await browser.manage().window().maximize();
    };

    this.getUrl = async (link) => {
        await browser.get(link);
    };

    this.getCurrentUrl = async () => {
        return await browser.getCurrentUrl();
    };

    this.waitForAngular = async () => {
        await browser.waitForAngular();
    };

    this.refreshThePage = async () => {
        await browser.refresh();
    };

    this.getRegistrationData = async (data) => {
        return await registration[data];
    };

};
module.exports = new Helper();
