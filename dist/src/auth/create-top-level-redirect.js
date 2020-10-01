"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var querystring_1 = tslib_1.__importDefault(require("querystring"));
var redirection_page_1 = tslib_1.__importDefault(require("./redirection-page"));
var get_host_1 = tslib_1.__importDefault(require("./../lib/get-host"));
function createTopLevelRedirect(apiKey, path) {
    return function topLevelRedirect(ctx) {
        var host = get_host_1.default(ctx);
        var query = ctx.query;
        var shop = query.shop;
        var params = { shop: shop };
        var queryString = querystring_1.default.stringify(params);
        ctx.body = redirection_page_1.default({
            origin: shop,
            redirectTo: "https://" + host + path + "?" + queryString,
            apiKey: apiKey,
        });
    };
}
exports.default = createTopLevelRedirect;
