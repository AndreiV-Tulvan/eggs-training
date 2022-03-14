import ShoppingCartPage from './ShoppingCartPage';

const TITLE = '.title';
const ADD_FLEECE_JACKET_TO_CART_BUTTON = '[data-test="add-to-cart-sauce-labs-fleece-jacket"]';
const SHOPPING_CART_BADGE = '.shopping_cart_badge';
const SHOPPING_CART_LINK = '.shopping_cart_link';

class ProductPage {
    verifyTitle = (expectedValue) => {
        cy.get(TITLE).should('have.text', expectedValue)
    }

    addFleeceJacketToCart = () => {
        cy.get(ADD_FLEECE_JACKET_TO_CART_BUTTON).click();
    }

    verifyShoppingCartNrOfProducts = (nrOfProducts) => {
        cy.get(SHOPPING_CART_BADGE).should('have.text', nrOfProducts);
    }

    clickShoppingCartLink = () => {
        cy.get(SHOPPING_CART_LINK).click();
        return new ShoppingCartPage();
    }
}

export default ProductPage;