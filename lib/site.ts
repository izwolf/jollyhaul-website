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
  'Magical Christmas Tree Projector': 'https://buy.stripe.com/REPLACE_ME_projector',
  'Astronaut Star Projector': 'https://buy.stripe.com/REPLACE_ME_astronaut',
  'Portable Espresso Maker': 'https://buy.stripe.com/REPLACE_ME_espresso',
  'Waterfall Tree Lights': 'https://buy.stripe.com/REPLACE_ME_waterfall',
  'Mushroom Humidifier': 'https://buy.stripe.com/REPLACE_ME_mushroom',
  'Electric Milk Frother': 'https://buy.stripe.com/REPLACE_ME_frother',
  'Cozy Christmas Bundle': 'https://buy.stripe.com/REPLACE_ME_bundle',
  'Coffee Bar Bundle': 'https://buy.stripe.com/REPLACE_ME_coffeebundle',
};

export const isLive = (url: string) => !url.includes('REPLACE_ME');
