"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getHost(ctx) {
    var SHOPIFY_APP_HOST = process.env.SHOPIFY_APP_HOST;
    return SHOPIFY_APP_HOST || ctx.host;
}
exports.default = getHost;
