import { Page } from '@playwright/test';

const formatSelectors = {
    bold: 'button[data-cke-tooltip-text*="Bold"]',
    underline: 'button[data-cke-tooltip-text*="Underline"]',
    none: '',
} as const;

export type FormatKey = keyof typeof formatSelectors;

export class Formatting {
    readonly selectors = formatSelectors;

    constructor(protected readonly page: Page) {}


    async clickFormatter(style: FormatKey) {
        const selector = this.selectors[style];
        const button = this.page.locator(selector);
        await button.waitFor({ state: 'visible', timeout: 2000 });
        await button.click();
    }

    async formatText(text: string, style: FormatKey) {
        const selector = this.selectors[style];
        const editor = this.page.locator('[contenteditable]');

        if (style !== 'none') {
            await this.clickFormatter(style);
        }

        await editor.click();
        await editor.type(text, { delay: 20 });

        if (style !== 'none') {
            await this.clickFormatter(style);
        }
        await editor.press(' ');
    }
}