import CheckoutOverviewPage from "./CheckoutOverviewPage";

const FIRST_NAME_INPUT = '[data-test="firstName"]';
const LAST_NAME_INPUT = '[data-test="lastName"]';
const POSTCODE_INPUT = '[data-test="postalCode"]';
const CONTINUE_BUTTON = '[data-test="continue"]';

class CheckoutPage {
    addCheckoutInformation = (firstName, lastName, postCode) => {
        cy.get(FIRST_NAME_INPUT).type(firstName);
        cy.get(LAST_NAME_INPUT).type(lastName);
        cy.get(POSTCODE_INPUT).type(postCode);
    }

    clickContinueButton = () => {
        cy.get(CONTINUE_BUTTON).click();
        return new CheckoutOverviewPage();
    }
}

export default CheckoutPage;