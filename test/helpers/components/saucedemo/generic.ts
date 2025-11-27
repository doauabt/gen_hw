import { expect, Page } from '@playwright/test';

export class GenericFunctions {
    readonly logoutButton = '#logout_sidebar_link';

    constructor(protected readonly page: Page) {}

    async openMenu() {
        await this.page.getByRole('button', { name: 'Open Menu' }).click();
    }

    async logout() {
        this.openMenu();
        await this.page.click(this.logoutButton)
    }

    async verifyFooterText(footerRegex: RegExp) {
        const footer = this.page.locator('footer');
        await footer.scrollIntoViewIfNeeded();
        await expect(this.page.getByText(footerRegex, { exact: false })).toBeVisible();
    }

}