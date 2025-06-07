export const environment = {
  PRODUCTION: process.env['NG_APP_PRODUCTION'] || false,
  ENV_NAME: process.env['NG_APP_ENV_NAME'] || '',
  WIX_CLIENT_ID: process.env['NG_APP_WIX_CLIENT_ID'] || '',
  EMAILJS_SERVICE_ID: process.env['NG_APP_EMAILJS_SERVICE_ID'] || '',
  EMAILJS_TEMPLATE_ID: process.env['NG_APP_EMAILJS_TEMPLATE_ID'] || '',
  EMAILJS_PUBLIC_KEY: process.env['NG_APP_EMAILJS_PUBLIC_KEY'] || '',
};
