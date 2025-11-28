import { expect, Page } from "@playwright/test";
import { ComplexPage } from "../../../pages/complex/complexPage";

export class LocatorHandling { 
  
  readonly iframeLocator;
  readonly dropdownLocator;
  readonly dropdownSelenium;
  readonly seleniumHeader;

  constructor(protected readonly page: Page) {
    const complexPage = new ComplexPage(page);
    this.iframeLocator = complexPage.getIframeLocatorImg();
    this.dropdownLocator = complexPage.getDropdownLocator();
    this.dropdownSelenium = complexPage.getDropdownSeleniumLocator();
    this.seleniumHeader = complexPage.getSeleniumHeaderLocator();
  }
  
  async openAdImage() {
    const [newPage] = await Promise.all([  // Waits all events inside
      this.page.context().waitForEvent('page'),
      this.iframeLocator.click(),
    ]);

    await newPage.waitForLoadState('domcontentloaded');
    await expect(newPage.getByText('Selenium Live Project for Practice')).toBeVisible();
    await newPage.close();
  }

  async openTestingDropdown() {
    await expect(this.dropdownLocator).toBeVisible();
    await this.dropdownLocator.hover();
  }

  async clickSeleniumUnderDropdown() {
    await this.openTestingDropdown();
    await expect(this.dropdownSelenium).toBeVisible();
    await this.dropdownSelenium.click();
  }

  async expectButtonWithTextAndStyle(text: string, style: string) {
    await this.seleniumHeader.click();
    const buttonWithTextAndStyle = `//button[.//text()="${text}"][contains(@style, "background: ${style}")]`;
    try {
      await expect(this.page.locator(buttonWithTextAndStyle)).toBeVisible();
    }
    catch (error) {
      throw new Error(`Button with text "${text}" and style "${style}" is not visible`);
    }
  }
}