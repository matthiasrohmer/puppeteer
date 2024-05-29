/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
// @ts-check
const {test, expect} = require('@playwright/test');

const CONSENT_COOKIE_NAME = 'CookieConsent';

test.beforeEach(async ({page}) => {
  await page.goto('/');
});

test.describe('Tracking', () => {
  test('should display consent banner', async ({page}) => {
    const cookieConsent = page.locator('.CookieConsent');

    await expect(cookieConsent).toBeVisible();
    await expect(cookieConsent).toBeInViewport();
  });

  test('should set consent cookie on banner ack and send analytics ping', async ({
    page,
  }) => {
    const consentAck = page.getByLabel('Accept cookies');
    const analyticsPing = page.waitForRequest(request => {
      return request.url().includes('google-analytics.com/g/collect');
    });

    await consentAck.click();

    const consentCookie = await page
      .context()
      .cookies(page.url())
      .then(cookies => {
        return cookies.find(cookie => {
          return cookie.name === CONSENT_COOKIE_NAME;
        });
      });
    expect(consentCookie).not.toBe(null);

    expect(await analyticsPing).not.toBe(null);
  });

  test('should send analytics ping on page re-load once cookie banner is accepted', async ({
    page,
  }) => {
    await page.getByLabel('Accept cookies').click();
    await page.reload();

    const analyticsPing = page.waitForRequest(request => {
      return request.url().includes('google-analytics.com/g/collect');
    });

    expect(await analyticsPing).not.toBe(null);
  });
});
