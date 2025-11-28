import { test, expect, request } from '@playwright/test';
import * as steps from '../../helpers/steps'
import { ComplexPage } from '../../pages/complex/complexPage';
import { LocatorHandling } from '../../helpers/components/complex/locatorHandling';



test.describe('Complex UI tests', () => {
  let complexPage: ComplexPage;
  let locatorHandling: LocatorHandling;

  test.beforeEach(async ({ page }) => {
      complexPage = new ComplexPage(page);
      locatorHandling = new LocatorHandling(page);
      await complexPage.openPage();
  });

  test('task 4 - handle iframe, tab and button' , async ({ page, context }) => {
    await locatorHandling.openAdImage();
    await locatorHandling.clickSeleniumUnderDropdown();
    await locatorHandling.expectButtonWithTextAndStyle();
  });
});