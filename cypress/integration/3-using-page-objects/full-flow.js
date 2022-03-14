import LoginPage from '../../support/pageObjects/LoginPage';

describe('Login - add item to cart - order', () => {
    before(() => {
        cy.visit('https://www.saucedemo.com/');
    })

    it('should display Products page after a successful login', () => {
        const loginPage = new LoginPage();

        const productPage = loginPage.login('standard_user', 'secret_sauce');
        productPage.verifyTitle('Products');
        productPage.addFleeceJacketToCart();
        productPage.verifyShoppingCartNrOfProducts(1);
        
        const shoppingBasketPage = productPage.clickShoppingCartLink();
        shoppingBasketPage.verifyTitle('Your Cart');
        shoppingBasketPage.verifyProductInCart('Sauce Labs Fleece Jacket');

        const checkoutPage = shoppingBasketPage.clickCheckoutButton();
        checkoutPage.addCheckoutInformation('Andrei', 'Tulvan', '12345');

        const checkoutOverviewPage = checkoutPage.clickContinueButton();
        checkoutOverviewPage.verifyTitle('Checkout: Overview');
        checkoutOverviewPage.verifyItem('Sauce Labs Fleece Jacket');

        const checkoutCompletePage = checkoutOverviewPage.clickFinishButton();
        checkoutCompletePage.verifyTitle('Checkout: Complete!');
        checkoutCompletePage.verifyCompletePurchaseText('THANK YOU FOR YOUR ORDER');
    });
})