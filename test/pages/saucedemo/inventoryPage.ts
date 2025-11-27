import { Page, expect, Locator } from '@playwright/test';
import { Shopping } from '../../helpers/components/saucedemo/shopping';

export class InventoryPage {

    readonly cartBadge: Locator;

    constructor(protected readonly page: Page) {
        this.page = page;
        this.cartBadge = this.page.locator('.shopping_cart_badge');
    }

    async addToCart(item: string) {
        const itemLocator = this.page.locator('.inventory_item').filter({ hasText: item });
        await itemLocator.getByRole('button', { name: 'Add to cart' }).click();
    }

    async getCartCount(): Promise<number> {
        const count = await this.cartBadge.count();

        if (count > 0) {
            const text = await this.cartBadge.textContent();
            return Number(text) || 0;
        }
        return 0;
    }

    async assertCartCount(expected: number): Promise<void> {
        const actual = await this.getCartCount();
        expect(actual).toBe(expected);
    }

    async checkoutCart(firstName: string, lastName: string, postalCode: string) {
        const shopping = new Shopping(this.page);
        await shopping.checkoutCart(firstName, lastName, postalCode);
    }
}