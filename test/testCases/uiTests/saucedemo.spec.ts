import { test, expect } from '@playwright/test';
import * as data from '../../resources/credential.json';
import { InventoryPage, LoginPage } from '../../pages/saucedemo';
import { GenericFunctions } from '../../helpers/components/saucedemo';


test.describe('SauceDemo - login and shopping', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let genericFunctions: GenericFunctions;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    genericFunctions = new GenericFunctions(page);
    await loginPage.openPage();
  });

  test.afterEach(async () => {
    await genericFunctions.logout();
  });

  test('task 1 - add items and checkout', async ({ page }) => {
    await loginPage.login(data.username, data.password);

    const items_list = ['Sauce Labs Backpack', 'Sauce Labs Fleece Jacket'];
    for (const [index, item] of items_list.entries()) {
      await inventoryPage.addToCart(item);
      await inventoryPage.assertCartCount(index + 1);
    }

    await inventoryPage.checkoutCart('a', 'b', '1');
  });


  test('task 2 - validation and footer', async () => {
    await loginPage.login('', '');
    await expect(loginPage.page.getByText('Username is required')).toBeVisible();

    await loginPage.login('standard_user', data.password);
    try {
      await genericFunctions.verifyFooterText(/2023.*Terms of Service/);
    }
    catch (error) {
      console.error('Footer text verification failed:', error);
      throw error;
    }
  });
});