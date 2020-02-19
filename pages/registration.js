function Registration() {
    let alert = element(by.className('alert-info'));
    let inputFields = element.all(by.className('form-group'));
    let loginButton = element(by.className('btn'));
    let alertWrongCredentials = element(by.className('alert-danger'));
    let loggedIn = element.all(by.css('.ng-scope .ng-scope'));

    let inputField = 'form-control';
    let messageField = 'ng-scope';
    let logoutButton = 'a';

    this.getCorrectUser = async () => {
        return (await alert.getText()).slice(((await alert.getText()).indexOf(' '))+1,((await alert.getText()).indexOf('Password: '))-1);
    };

    this.getCorrectPassword = async () => {
        return (await alert.getText()).slice(((await alert.getText()).lastIndexOf(' '))+1);
    };

    this.setUser = async (user) => {
        await inputFields.get(0).element(by.className(inputField)).click();
        await inputFields.get(0).element(by.className(inputField)).sendKeys(user);
    };

    this.getUser = async () => {
        return await inputFields.get(0).element(by.className(inputField)).getAttribute('value');
    };

    this.clearUser = async () => {
        await inputFields.get(0).element(by.className(inputField)).clear();
    };

    this.setPassword = async (password) => {
        await inputFields.get(1).element(by.className(inputField)).click();
        await inputFields.get(1).element(by.className(inputField)).sendKeys(password);
    };

    this.getPassword = async () => {
        return await inputFields.get(1).element(by.className(inputField)).getAttribute('value');
    };

    this.clearPassword = async () => {
        await inputFields.get(1).element(by.className(inputField)).clear();
    };

    this.setUsername = async (username) => {
        await inputFields.get(2).element(by.className(inputField)).click();
        await inputFields.get(2).element(by.className(inputField)).sendKeys(username);
    };

    this.getUsername = async () => {
        return await inputFields.get(2).element(by.className(inputField)).getAttribute('value');
    };

    this.clearUsername = async () => {
        await inputFields.get(2).element(by.className(inputField)).clear();
    };

    this.getUserHelpBlockMessage = async () => {
        return await inputFields.get(0).element(by.className(messageField)).getText();
    };

    this.isUserHelpBlockMessageDisplayed = async () => {
        return await inputFields.get(0).element(by.className(messageField)).isPresent();
    };

    this.getPasswordHelpBlockMessage = async () => {
        return await inputFields.get(1).element(by.className(messageField)).getText();
    };

    this.isPasswordHelpBlockMessageDisplayed = async () => {
        return await inputFields.get(1).element(by.className(messageField)).isPresent();
    };

    this.getUsernameHelpBlockMessage = async () => {
        return await inputFields.get(2).element(by.className(messageField)).getText();
    };

    this.isUsernameHelpBlockMessageDisplayed = async () => {
        return await inputFields.get(2).element(by.className(messageField)).isDisplayed();
    };

    this.clickLogin = async () => {
        await loginButton.click();
    };

    this.loginButtonStatus = async () => {
        return await loginButton.isEnabled();
    };

    this.isMessageForWrongCredentialsDisplayed = async () => {
        return await alertWrongCredentials.isPresent();
    };

    this.getMessageForWrongCredentials = async () => {
        return await alertWrongCredentials.getText();
    };

    this.getLoggedInPageTitle = async () => {
        return await loggedIn.get(0).getText();
    };

    this.getLoggedInPageMessage = async () => {
        return await loggedIn.get(1).getText();
    };

    this.clickLogout = async () => {
        await loggedIn.get(2).element(by.css(logoutButton)).click();
    };    
};
module.exports = new Registration();