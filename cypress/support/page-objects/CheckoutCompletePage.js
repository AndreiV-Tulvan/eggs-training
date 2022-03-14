const TITLE = '.title';
const COMPLETE_HEADER = '.complete-header';

class CheckoutCompletePage {
    verifyTitle = (expectedTitle) => {
        cy.get(TITLE).should('have.text', expectedTitle);
    }

    verifyCompletePurchaseText = (expectedText) => {
        cy.get(COMPLETE_HEADER).should('have.text', expectedText);
    }
}

export default CheckoutCompletePage;