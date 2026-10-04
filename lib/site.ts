// ============================================================
// JOLLYHAUL SITE CONFIG — ANTHONY: EDIT THIS FILE
// ============================================================
// 1. Put YOUR email below (waitlist signups go here, free via FormSubmit).
//    First signup triggers a FormSubmit activation email — click it.
// 2. Create one Stripe Payment Link per product in your Stripe dashboard,
//    then paste each URL below. While a link still says REPLACE_ME the
//    site shows "Notify me" instead of "Buy now" — nothing sells until
//    you say so (paste links only AFTER samples pass the quality gate).
// 3. Enable "promotion codes" on each Stripe Payment Link so JOLLY15 works.

export const CONTACT_EMAIL = 'jollyhaulshop@gmail.com';

export const TIKTOK_URL = 'https://www.tiktok.com/@jollyhaul';

export const PAYMENT_LINKS: Record<string, string> = {
  'Six-Scene Star Projector': 'https://buy.stripe.com/REPLACE_ME_projector',
  '3D Hologram Holiday Fan': 'https://buy.stripe.com/REPLACE_ME_hologram',
  'LED Snow Globe Lantern': 'https://buy.stripe.com/REPLACE_ME_snowglobe',
  'Curtain Fairy Lights': 'https://buy.stripe.com/REPLACE_ME_lights',
  'Cozy Christmas Bundle': 'https://buy.stripe.com/REPLACE_ME_bundle',
};

export const isLive = (url: string) => !url.includes('REPLACE_ME');
