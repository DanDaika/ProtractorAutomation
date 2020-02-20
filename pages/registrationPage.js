function Registration() {    
    let loginButton = element(by.className('btn'));
    let alertWrongCredentials = element(by.className('alert-danger'));
    let logoutButton = element(by.css('.ng-scope [href="#/login"]'));
    let alert = element(by.className('alert-info'));
    let userInput = element(by.id('username'));
    let passwordInput = element(by.id('password'));
    let usernameInput = element(by.xpath('/html/body/div[3]/div/div/div/form/ng-form/div[1]/div/div/input'));
    let userHelpBlock = element(by.css('[ng-messages="form.username.$error"] .ng-scope'));
    let passwordHelpBlock = element(by.css('[ng-messages="form.password.$error"] .ng-scope'));
    let usernameDescription = element(by.xpath('//div/div/p'));
    let loggedInTitle = element(by.css('h1.ng-scope'));
    let loggedInMessage = element(by.xpath('//p[1]'));

    this.getCorrectUser = async () => {
        let credentials = await alert.getText();
        return credentials.slice((credentials.indexOf(' '))+1,(credentials.indexOf('Password: '))-1);
    };

    this.getCorrectPassword = async () => {
        let credentials = await alert.getText();
        return credentials.slice((credentials.lastIndexOf(' '))+1);
    };

    this.setUser = async (user) => {
        await userInput.click();
        await userInput.sendKeys(user);
    };

    this.getUser = async () => {
        return userInput.getAttribute('value');
    };

    this.clearUser = async () => {
        await userInput.clear();
    };

    this.setPassword = async (password) => {
        await passwordInput.click();
        await passwordInput.sendKeys(password);
    };

    this.getPassword = async () => {
        return await passwordInput.getAttribute('value');
    };

    this.clearPassword = async () => {
        await passwordInput.clear();
    };

    this.setUsername = async (username) => {
        await usernameInput.click();
        await usernameInput.sendKeys(username);
    };

    this.getUsername = async () => {
        return await usernameInput.getAttribute('value');
    };

    this.clearUsername = async () => {
        await usernameInput.clear();
    };

    this.getUserHelpBlockMessage = async () => {
        return await userHelpBlock.getText();
    };

    this.isUserHelpBlockMessageDisplayed = async () => {
        return await userHelpBlock.isPresent();
    };

    this.getPasswordHelpBlockMessage = async () => {
        return await passwordHelpBlock.getText();
    };

    this.isPasswordHelpBlockMessageDisplayed = async () => {
        return await passwordHelpBlock.isPresent();
    };

    this.getUsernameHelpBlockMessage = async () => {
        return await usernameDescription.getText();
    };

    this.isUsernameHelpBlockMessageDisplayed = async () => {
        return await usernameDescription.isDisplayed();
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
        return await loggedInTitle.getText();
    };

    this.getLoggedInPageMessage = async () => {
        return await loggedInMessage.getText();
    };

    this.clickLogout = async () => {
        await logoutButton.click();
    };    
};
module.exports = new Registration();