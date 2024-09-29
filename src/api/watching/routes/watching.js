'use strict';

/**
 * watching router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::watching.watching', {
  config: {
    find: {
      policies: ['global::is-owner'], // Apply the is-owner policy for the find action
    },
    findOne: {
      policies: ['global::is-owner'], // Apply the is-owner policy for the findOne action
    },
  },
});
