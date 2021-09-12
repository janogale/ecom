'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

const { v4: uuidv4 } = require("uuid");

module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      data.pid = uuidv4();
    },
  },
};
