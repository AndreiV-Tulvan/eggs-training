import CheckoutPage from "./CheckoutPage";

const TITLE = '.title';
const ITEM_IN_CART = '.inventory_item_name';
const CHECKOUT_BUTTON = '[data-test="checkout"]';

class ShoppingCartPage {
    verifyTitle = (expectedTitle) => {
        cy.get(TITLE).should('have.text', expectedTitle);
    }

    verifyProductInCart = (expectedItemName) => {
        cy.get(ITEM_IN_CART).should('have.text', expectedItemName)
    }

    clickCheckoutButton = () => {
        cy.get(CHECKOUT_BUTTON).click();
        return new CheckoutPage();
    }

}

export default ShoppingCartPage;