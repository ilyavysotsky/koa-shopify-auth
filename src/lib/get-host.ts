import { Context } from 'koa';

export default function getHost(ctx: Context) {
    console.log({koaShopifyAuthEnv: process.env});
    const {
        SHOPIFY_APP_HOST
    } = process.env;
    return SHOPIFY_APP_HOST || ctx.host;
}