'use strict';

/**
 * basic-setting service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::basic-setting.basic-setting');
