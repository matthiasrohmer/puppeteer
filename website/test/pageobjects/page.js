/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const {browser} = require('@wdio/globals');

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
module.exports = class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path = '') {
    return browser.url(`/${path}`);
  }

  get cookieAck() {
    return $('aria/Accept cookies');
  }
};
