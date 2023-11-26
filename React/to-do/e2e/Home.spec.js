import { test, expect } from '@playwright/test';

test('Header', async ({ page }) => {
  await page.goto('http://localhost:8000');
  const nav = page.locator('nav');

  // Verify that the header is present
  await expect(nav).toBeVisible();

  // Verify the navbar brand
  const navbarBrand = nav.locator('a.navbar-brand');
  await expect(navbarBrand).toHaveText('To Do Application');

  // Verify the home link
  const homeLink = nav.locator('a[href="/"]');
  await expect(homeLink).toHaveText('Home');

  // Verify the about link
  const aboutLink = nav.locator('a[href="/About"]');
  await expect(aboutLink).toHaveText('About');
});