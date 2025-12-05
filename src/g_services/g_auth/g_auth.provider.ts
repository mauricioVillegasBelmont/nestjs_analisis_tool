import { google } from 'googleapis';

import {
  getServiceAccountCredentials,
  getServicesAuthScopes,
} from 'g_services/g_auth/utils/get-service-account-credentials';

export const GOOGLE_AUTH = 'GOOGLE_AUTH';

export const GoogleAuthProvider = {
  provide: GOOGLE_AUTH,
  useFactory: () => {
    const serviceAccountCredentials = getServiceAccountCredentials();
    const scopes = getServicesAuthScopes();
    return new google.auth.GoogleAuth({
      credentials: {
        client_email: serviceAccountCredentials.client_email,
        private_key: serviceAccountCredentials.private_key,
      },
      scopes: scopes,
    });
  },
};
