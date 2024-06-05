/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * This example uses the page-objects defined at:
 * page-objects/google/search.js
 * page-objects/google/searchResults.js
 *
 * For more information on working with page objects, see:
 * https://nightwatchjs.org/guide/concepts/page-object-model.html
 */

describe('tracking', function () {
  const homePage = browser.page.homePage();

  before(async () => {
    return homePage.navigate();
  });

  after(async browser => {
    return browser.quit();
  });

  it('should display consent banner', async () => {
    await homePage.expect.element('[aria-label="Accept cookies"]').to.be
      .visible;
  });
  it('should set consent cookie on banner ack, hide it, and send analytics ping', async () => {
    const requests = [];
    browser.network.captureRequests(requestParams => {
      const url = requestParams.request.url;
      if (url.includes('google-analytics.com')) {
        requests.push(url);
      }
    });

    await homePage.click('[aria-label="Accept cookies"]');
    await homePage.expect.element('[aria-label="Accept cookies"]').to.not.be
      .present;
    await homePage.expect.cookie('CookieConsent').to.equal('true');

    expect(requests.length).to.be.greaterThan(0);
  });
  it('should send analytics ping on page re-load once cookie banner is accepted and not show it again', async () => {
    const requests = [];
    browser.network.captureRequests(requestParams => {
      const url = requestParams.request.url;
      if (url.includes('google-analytics.com')) {
        requests.push(url);
      }
    });

    await homePage.navigate();
    expect(requests.length).to.be.greaterThan(0);
  });
});
