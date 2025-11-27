import { Page } from '@playwright/test';

export class LoginPage {
    readonly url = 'https://www.saucedemo.com/inventory.html';
    readonly username_field = '#user-name';
    readonly password_field = '#password';
    readonly submit_button = '#login-button';

    constructor(readonly page: Page) {
        this.page = page;
    }

    async openPage() {
        await this.page.goto(this.url);
    }

    async login(username: string, password: string) {
        await this.page.fill(this.username_field, username);
        await this.page.fill(this.password_field, password);
        await this.page.click(this.submit_button);
    }


}