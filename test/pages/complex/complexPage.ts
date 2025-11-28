import { expect, Page, Locator } from '@playwright/test';

export class ComplexPage {

  readonly url = 'http://demo.guru99.com/test/guru99home';

  readonly iframe = '#a077aa5e';
  // readonly dropdownMenuCss = '.menu-block ul li a:has-text("Testing")';
  readonly dropdownMenuXpath = '//*[@class="menu-block"]/ul/li[a[contains(text(), "Testing")]]'
  
  // readonly dropdownSeleniumCss = '.menu-block ul li a:has-text("Selenium")';
  readonly dropdownSeleniumXpath = this.dropdownMenuXpath + '//li[a[contains(text(), "Selenium")]]'

  readonly redButtonLocator = '//button[.//text()="Submit"][contains(@style, "background: rgb(244, 53, 0)")]';

  constructor(readonly page: Page) {}

  async openPage() {
    await this.page.goto(this.url, { waitUntil:'domcontentloaded' });
  }

  getIframeLocatorImg(): Locator {
    return this.page.frameLocator(this.iframe).getByRole('img');
  }

  getDropdownLocator(): Locator {
    return this.page.locator(this.dropdownMenuXpath);

  }

  getDropdownSeleniumLocator(): Locator {
    return this.page.locator(this.dropdownSeleniumXpath).first();
  }

  getSeleniumHeaderLocator(): Locator {
    return this.page.locator('h1', { hasText: 'Selenium Tutorial' });
  }

  getRedButtonLocator(): Locator {
    return this.page.locator(this.redButtonLocator);
  }
}