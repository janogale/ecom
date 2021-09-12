'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

const { v4: uuidv4 } = require("uuid");

module.exports= {
lifecycles: {
async beforeCreate(data) {
data.cid = uuidv4();
},
},
};
