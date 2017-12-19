import config from './config.js';
const FluxSdk = window.FluxSdk;
const FluxHelpers = window.FluxHelpers;

// instantiate the Flux SDK with your app's client id
var sdk = new FluxSdk(config.flux_client_id, { redirectUri: config.url, fluxUrl: config.flux_url });
var helpers = new FluxHelpers(sdk);

export default helpers;
