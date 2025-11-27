import { expect, Locator, Page } from '@playwright/test';

export class Shopping {

    readonly cartButton: Locator;
    readonly checkoutButton: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly successMessage: Locator;

    constructor(protected readonly page: Page) {
        this.page = page;
        this.cartButton = page.locator('#shopping_cart_container');
        this.checkoutButton = page.locator('#checkout');
        this.firstNameInput = page.locator('#first-name');
        this.lastNameInput = page.locator('#last-name');
        this.postalCodeInput = page.locator('#postal-code');
        this.continueButton = page.getByRole('button', { name: 'Continue' });
        this.finishButton = page.getByRole('button', { name: 'Finish' });
        this.successMessage = page.getByText('Thank you for your order!', { exact: true });
    }

    async checkoutCart(firstName: string, lastName: string, postalCode: string) {
        await this.cartButton.click();
        await this.checkoutButton.click();
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
        await this.continueButton.click();
        await this.finishButton.click();
        await expect(this.successMessage).toBeVisible();
    }

}