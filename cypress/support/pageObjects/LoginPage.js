import ProductPage from "./ProductPage";

const USERNAME_INPUT = '[data-test="username"]';
const PASSWORD_INPUT = '[data-test="password"]';
const LOGIN_BUTTON = '[data-test="login-button"]';

class LoginPage {
    login = (username, password) => {
        cy.get(USERNAME_INPUT).type(username);
        cy.get(PASSWORD_INPUT).type(password);
        cy.get(LOGIN_BUTTON).click();
        return new ProductPage();
    }
}

export default LoginPage;