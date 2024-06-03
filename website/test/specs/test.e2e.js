/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const {expect} = require('@wdio/globals');

const Page = require('../pageobjects/page');

const CONSENT_COOKIE_NAME = 'CookieConsent';

describe('Tracking', () => {
  it('should display consent banner', async () => {
    const page = new Page();
    await page.open();

    expect(await page.cookieAck).toBeDisplayed();
  });
  it('should set consent cookie on banner ack, hide it, and send analytics ping', async () => {
    const page = new Page();
    await page.open();

    const mock = await browser.mock(/google-analytics\.com/g);

    await page.cookieAck.waitForExist();
    await page.cookieAck.click();
    await page.cookieAck.waitForExist({reverse: true});

    const cookie = await browser.getCookies(CONSENT_COOKIE_NAME);
    expect(cookie).toBeDefined();

    await expect(mock).toBeRequested();
  });
  it('should send analytics ping on page re-load once cookie banner is accepted and not show it again', async () => {
    const page = new Page();
    await page.open();

    await page.cookieAck.waitForExist({reverse: true});

    const mock = await browser.mock(/google-analytics\.com/g);
    await expect(mock).toBeRequested();
  });
});
