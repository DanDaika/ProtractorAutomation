const registration = require('../../pages/registrationPage.js');
const helper = require('../../utils/helper.js');

describe('Registration form test cases', () => {
    beforeAll(async () => {
        await helper.getUrl(await helper.getRegistrationData('registrationUrl'));
        await helper.maximizeWindow();
        expect(helper.getCurrentUrl()).toBe(helper.getRegistrationData('registrationUrl'),'[BeforeAll-01]: The page was not loaded');
        expect(registration.loginButtonStatus()).toBe(false,'[BeforeAll-02]: The login button is available');
        expect(registration.getUserHelpBlockMessage()).toBe(helper.getRegistrationData('emptyUserOrPasswordMessage'),'[BeforeAll-03]: The user help block message is wrong');
        expect(registration.getPasswordHelpBlockMessage()).toBe(helper.getRegistrationData('emptyUserOrPasswordMessage'),'[BeforeAll-04]: The password help block message is wrong');
        expect(registration.getUsernameHelpBlockMessage()).toBe(helper.getRegistrationData('usernameDescription'),'[BeforeAll-05]: The username description is wrong');
        expect(registration.isMessageForWrongCredentialsDisplayed()).toBe(false,'[BeforeAll-06]: Wrong user or/and password message is displayed');
    });
    beforeEach(async () => {
        await registration.clearUser();
        expect(registration.getUser()).toBe(helper.getRegistrationData('empty'),'[BeforeEach-01]: The user field was not cleared properly');
        await registration.clearPassword();
        expect(registration.getPassword()).toBe(helper.getRegistrationData('empty'),'[BeforeEach-02]: The password field was not cleared properly');
        await registration.clearUsername();
        expect(registration.getUsername()).toBe(helper.getRegistrationData('empty'),'[BeforeEach-03]: The username field was not cleared properly');
    });

    it('TC01 - Login with correct credentials', async () => {
        await registration.setUser(registration.getCorrectUser());
        expect(registration.getUser()).toBe(registration.getCorrectUser(),'TC01_01 - The introduced user is not correct');
        expect(registration.isUserHelpBlockMessageDisplayed()).toBe(false,'TC01_02 - The help message for the user is still displayed');
        await registration.setPassword(registration.getCorrectPassword());
        expect(registration.getPassword()).toBe(registration.getCorrectPassword(),'TC01_03 - The introduced password is not correct');
        expect(registration.isPasswordHelpBlockMessageDisplayed()).toBe(false,'TC01_04 - The help message for the password is still displayed');
        await registration.setUsername(helper.getRegistrationData('validUsername'));
        expect(registration.getUsername()).toBe(helper.getRegistrationData('validUsername'),'TC01_05 - The introduced username is not correct');
        expect(registration.isUsernameHelpBlockMessageDisplayed()).toBe(true,'TC01_06 - The help message for the username is not displayed')
        await registration.clickLogin();
        await helper.waitForAngular();
        expect(helper.getCurrentUrl()).toBe(helper.getRegistrationData('homeUrl'),'TC01_07 - The home page was not loaded');
        expect(registration.getLoggedInPageTitle()).toBe(helper.getRegistrationData('loggedInPageTitle'),'TC01_08 - The home page title is wrong');
        expect(registration.getLoggedInPageMessage()).toBe(helper.getRegistrationData('loggedInPageMessage'),'TC01_09 - The home page message is wrong');
        await registration.clickLogout();
        await helper.waitForAngular();
        expect(helper.getCurrentUrl()).toBe(helper.getRegistrationData('registrationUrl'),'TC01_10 - The loggin page message was not loaded');
    });

    it('TC02 - Check Login button availability', async () => {
        await registration.setUser(helper.getRegistrationData('validUser'));
        expect(registration.loginButtonStatus()).toBe(false,'TC02_01 - The login button is available');
        await registration.setPassword(helper.getRegistrationData('validPassword'));
        expect(registration.loginButtonStatus()).toBe(false,'TC02_02 - The login button is available');
        await registration.setUsername(helper.getRegistrationData('validUsername'));
        expect(registration.loginButtonStatus()).toBe(true,'TC02_03 - The login button is not available');
    });

    it('TC03 - Check user help block messages and length', async () => {
        await registration.setUser(helper.getRegistrationData('1Character'));
        expect(registration.getUserHelpBlockMessage()).toBe(helper.getRegistrationData('tooShortUserMessage'),'TC03_01 - The user help block message is wrong');
        await registration.setUser(helper.getRegistrationData('1Character'));
        expect(registration.getUserHelpBlockMessage()).toBe(helper.getRegistrationData('tooShortUserMessage'),'TC03_02 - The user help block message is wrong');
        await registration.setUser(helper.getRegistrationData('1Character'));
        expect(registration.isUserHelpBlockMessageDisplayed()).toBe(false,'TC03_03 - The user help block message is displayed');
        await registration.clearUser();
        await registration.setUser(helper.getRegistrationData('51Characters'));
        expect(registration.isUserHelpBlockMessageDisplayed()).toBe(false,'TC03_04 - The user help block message is displayed');
        expect(registration.getUser()).toBe(helper.getRegistrationData('50Characters'),'TC03_05 - The length of the user is more than 50');
    });

    it('TC04 - Check password help block messages and length', async () => {
        await registration.setPassword(helper.getRegistrationData('1Character'));
        expect(registration.getPasswordHelpBlockMessage()).toBe(helper.getRegistrationData('tooShortPasswordMessage'),'TC04_01 - The password help block message is wrong');
        await registration.setPassword(helper.getRegistrationData('1Character'));
        expect(registration.getPasswordHelpBlockMessage()).toBe(helper.getRegistrationData('tooShortPasswordMessage'),'TC04_02 - The password help block message is wrong');
        await registration.setPassword(helper.getRegistrationData('1Character'));
        expect(registration.isPasswordHelpBlockMessageDisplayed()).toBe(false,'TC04_03 - The password help block message is displayed');
        await registration.clearPassword();
        await registration.setPassword(helper.getRegistrationData('101Characters'));
        expect(registration.isPasswordHelpBlockMessageDisplayed()).toBe(false,'TC04_04 - The password help block message is displayed');
        expect(registration.getPassword()).toBe(helper.getRegistrationData('100Characters'),'TC04_05 - The length of the password is more than 100');
    });

    it('TC05 - Check username help block messages and length', async () => {
        await registration.setUsername(helper.getRegistrationData('1Character'));
        expect(registration.getUsernameHelpBlockMessage()).toBe(helper.getRegistrationData('usernameDescription'),'TC05_01 - The username description is wrong');
        await registration.setUsername(helper.getRegistrationData('1Character'));
        expect(registration.getUsernameHelpBlockMessage()).toBe(helper.getRegistrationData('usernameDescription'),'TC05_02 - The username description is wrong');
        await registration.setUsername(helper.getRegistrationData('1Character'));
        expect(registration.getUsernameHelpBlockMessage()).toBe(helper.getRegistrationData('usernameDescription'),'TC05_03 - The username description is wrong');
        await registration.clearUsername();
        await registration.setUsername(helper.getRegistrationData('51Characters'));
        expect(registration.getUsernameHelpBlockMessage()).toBe(helper.getRegistrationData('usernameDescription'),'TC05_04 - The username description is wrong');
        expect(registration.getUsername()).toBe(helper.getRegistrationData('51Characters'),'TC04_05 - The username is wrong');
        await registration.clearUsername();
        await registration.setUsername(helper.getRegistrationData('101Characters'));
        expect(registration.getUsernameHelpBlockMessage()).toBe(helper.getRegistrationData('usernameDescription'),'TC05_06 - The username description is wrong');
        expect(registration.getUsername()).toBe(helper.getRegistrationData('101Characters'),'TC04_07 - The username is wrong');
    });

    it('TC06 - Wrong user or/and password message', async () => {
        await registration.setUser(registration.getCorrectUser());
        await registration.setUsername(helper.getRegistrationData('validUsername'));
        await registration.setPassword(helper.getRegistrationData('validPassword'));
        await registration.clickLogin();
        expect(registration.getMessageForWrongCredentials()).toBe(helper.getRegistrationData('wrongUserOrAndPasswordMessage'),'TC05_01 - Wrong user or/and password message is wrong');
        await helper.refreshThePage();
        await helper.waitForAngular();
        await registration.setUser(helper.getRegistrationData('validUser'));
        await registration.setUsername(helper.getRegistrationData('validUsername'));
        await registration.setPassword(registration.getCorrectPassword());
        await registration.clickLogin();
        expect(registration.getMessageForWrongCredentials()).toBe(helper.getRegistrationData('wrongUserOrAndPasswordMessage'),'TC05_02 - Wrong user or/and password message is wrong');
        await helper.refreshThePage();
        await helper.waitForAngular();
        await registration.setUser(helper.getRegistrationData('validUser'));
        await registration.setUsername(helper.getRegistrationData('validUsername'));
        await registration.setPassword(helper.getRegistrationData('validPassword'));
        await registration.clickLogin();
        expect(registration.getMessageForWrongCredentials()).toBe(helper.getRegistrationData('wrongUserOrAndPasswordMessage'),'TC05_03 - Wrong user or/and password message is wrong');
    });
});