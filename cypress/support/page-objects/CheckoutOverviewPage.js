import CheckoutCompletePage from "./CheckoutCompletePage";

const TITLE = '.title';
const ITEM_NAME = '.inventory_item_name';
const FINISH_BUTTON = '[data-test="finish"]';

class CheckoutOverviewPage {
    verifyTitle = (expectedTitle) => {
        cy.get(TITLE).should('have.text', expectedTitle);
    }

    verifyItem = (expectedItem) => {
        cy.get(ITEM_NAME).should('have.text', expectedItem);
    }

    clickFinishButton = () => {
        cy.get(FINISH_BUTTON).click();
        return new CheckoutCompletePage();
    }
}

export default CheckoutOverviewPage;