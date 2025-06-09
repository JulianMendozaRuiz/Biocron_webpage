export const environment = {
  PRODUCTION: import.meta.env['NG_APP_PRODUCTION'] || false,
  ENV_NAME: import.meta.env['NG_APP_ENV_NAME'] || 'development',
  WIX_CLIENT_ID:
    import.meta.env['NG_APP_WIX_CLIENT_ID'] ||
    '9fc5a5eb-bd7b-4509-848b-214443c86468',
  EMAILJS_SERVICE_ID:
    import.meta.env['NG_APP_EMAILJS_SERVICE_ID'] || 'service_kmqo1ep',
  EMAILJS_TEMPLATE_ID:
    import.meta.env['NG_APP_EMAILJS_TEMPLATE_ID'] || 'template_hvz95ef',
  EMAILJS_PUBLIC_KEY:
    import.meta.env['NG_APP_EMAILJS_PUBLIC_KEY'] || 'jt8woe2wbmjg_Y_bQ',
};
