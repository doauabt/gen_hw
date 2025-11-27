import { expect, Page } from '@playwright/test';
import { FormatKey, Formatting } from '../../helpers/components/editor/formatting';

export class EditorPage {
  readonly url = 'https://onlinehtmleditor.dev';

  constructor(protected readonly page: Page) {
    this.page = page;
  }

  async openPage() {
    await this.page.goto(this.url);
  }

  async formatText(text: string, style: FormatKey) {
    const formatter = new Formatting(this.page);
    await formatter.formatText(text, style);
  }

  async verifyTextFormatting(text: string, style: string) {
    await expect(this.page.locator(style).filter({ hasText: text })).toBeVisible();
  }
}