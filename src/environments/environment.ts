export const environment = {
  PRODUCTION: import.meta.env['NG_APP_PRODUCTION'] || false,
  ENV_NAME: import.meta.env['NG_APP_ENV_NAME'] || '',
  WIX_CLIENT_ID: import.meta.env['NG_APP_WIX_CLIENT_ID'] || '',
  EMAILJS_SERVICE_ID: import.meta.env['NG_APP_EMAILJS_SERVICE_ID'] || '',
  EMAILJS_TEMPLATE_ID: import.meta.env['NG_APP_EMAILJS_TEMPLATE_ID'] || '',
  EMAILJS_PUBLIC_KEY: import.meta.env['NG_APP_EMAILJS_PUBLIC_KEY'] || '',
};
