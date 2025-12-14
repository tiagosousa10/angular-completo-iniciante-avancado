import { AuthConfig } from 'angular-oauth2-oidc';

export const auth: AuthConfig = {
  issuer: 'https://accounts.google.com',
  redirectUri: window.location.origin,
  clientId:
    '709827945702-geaf9t7iu44q28jmq7mloclmcuf25a5g.apps.googleusercontent.com',
  scope: 'openid profile email',
  strictDiscoveryDocumentValidation: false,
};
