'use strict';

/**
 * seen service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::seen.seen');
