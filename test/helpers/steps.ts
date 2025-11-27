import { Page, expect } from '@playwright/test';
import { Context } from 'node:vm';


export async function expect_button(page: Page) {
    await expect(page.locator('button[type="submit"]')).toBeVisible();
}