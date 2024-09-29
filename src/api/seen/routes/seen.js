'use strict';

/**
 * seen router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::seen.seen');
