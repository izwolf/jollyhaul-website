export interface Product {
  slug: string;
  name: string;
  price: number;
  oldPrice: number;
  tag: string;
  image: string;
  description: string;
  features: string[];
  specs: string[];
}

export const allProducts: Product[] = [
  {
    slug: 'tree-projector',
    name: 'Magical Christmas Tree Projector',
    price: 32.99, oldPrice: 44, tag: 'Best seller', image: '/jollyhaul-projector.png',
    description: 'Turn any room into a Christmas movie in 30 seconds. 6,000+ happy homes and counting.',
    features: ['6 Christmas scenes', 'USB powered', 'Remote control included', 'Auto shut-off timer'],
    specs: ['Power: USB 5V', 'Coverage: up to 25ft', 'Indoor use'],
  },
  {
    slug: 'astronaut-projector',
    name: 'Astronaut Star Projector',
    price: 39.99, oldPrice: 52, tag: 'TikTok viral', image: '/jollyhaul-gifts.png',
    description: 'A tiny astronaut paints galaxies across your ceiling. The gift kids lose their minds over.',
    features: ['360° rotating nebula', 'Remote control', 'Timer function', 'Adjustable brightness'],
    specs: ['Power: USB', 'Projection: up to 15ft', 'Indoor use'],
  },
  {
    slug: 'espresso-maker',
    name: 'Portable Espresso Maker',
    price: 69.99, oldPrice: 89, tag: 'Coffee lover gift', image: '/jollyhaul-gifts.png',
    description: 'Real espresso anywhere. Works with Nespresso and Dolce Gusto. No outlet needed.',
    features: ['Nespresso + Dolce Gusto compatible', 'Manual pressure pump', 'No electricity needed', 'Travel case included'],
    specs: ['Capacity: 80ml', 'Pressure: 20 bar', 'Weight: 350g'],
  },
  {
    slug: 'waterfall-lights',
    name: 'Waterfall Tree Lights',
    price: 24.99, oldPrice: 32, tag: 'Tree magic', image: '/jollyhaul-gifts.png',
    description: '200 LEDs cascading like a glowing waterfall. The tree topper upgrade nobody expects.',
    features: ['200 LED lights', '8 lighting modes', 'USB powered with remote', 'Waterproof for outdoor use'],
    specs: ['Length: 1.5m', 'LED count: 200', 'Power: USB 5V'],
  },
  {
    slug: 'mushroom-humidifier',
    name: 'Mushroom Humidifier',
    price: 21.99, oldPrice: 29, tag: 'Room decor', image: '/jollyhaul-gifts.png',
    description: 'A glowing mushroom that mists. The coziest desk upgrade on TikTok right now.',
    features: ['Cool mist humidifier', 'Warm night light glow', 'Whisper quiet', 'Auto shut-off'],
    specs: ['Capacity: 300ml', 'Power: USB', 'Runtime: 8 hours'],
  },
  {
    slug: 'milk-frother',
    name: 'Electric Milk Frother',
    price: 19.99, oldPrice: 26, tag: 'Stocking stuffer', image: '/jollyhaul-gifts.png',
    description: 'Cafe foam at home in 15 seconds. Pairs perfectly with the espresso maker.',
    features: ['USB rechargeable', 'One-button operation', 'Stainless steel whisk', '15-second froth'],
    specs: ['Power: USB rechargeable', 'Material: stainless steel', 'Weight: 120g'],
  },
  {
    slug: 'aurora-ball',
    name: 'Crystal Aurora Ball',
    price: 24.99, oldPrice: 34, tag: 'Cozy favorite', image: '/jollyhaul-gifts.png',
    description: 'Northern lights swirling in crystal. Remote included, zero setup stress.',
    features: ['Aurora projection', 'Remote control', 'Multiple color modes', 'Crystal ball design'],
    specs: ['Power: USB', 'Diameter: 12cm', 'Indoor use'],
  },
  {
    slug: 'fairy-lights',
    name: 'Curtain Fairy Lights',
    price: 19.99, oldPrice: 26, tag: 'Gift-ready', image: '/jollyhaul-gifts.png',
    description: '3 meters of warm twinkle. Bedrooms, patios, trees — instant magic everywhere.',
    features: ['3m x 3m curtain', '8 lighting modes', 'USB with remote', 'Indoor/outdoor'],
    specs: ['Size: 3m x 3m', 'LED count: 300', 'Power: USB 5V'],
  },
  {
    slug: 'sleep-mask',
    name: 'Bluetooth Sleep Mask',
    price: 29.99, oldPrice: 39, tag: 'Wellness gift', image: '/jollyhaul-gifts.png',
    description: 'Fall asleep to music with total blackout. Side sleepers love the flat speakers.',
    features: ['Bluetooth 5.4', 'Flat speakers for side sleepers', 'Total blackout', 'Washable'],
    specs: ['Battery: 10hr playtime', 'Charging: USB-C', 'Material: breathable cotton'],
  },
  {
    slug: 'pet-bottle',
    name: 'Foldable Pet Water Bottle',
    price: 16.99, oldPrice: 22, tag: 'Pet lover', image: '/jollyhaul-gifts.png',
    description: 'Folds flat, holds a full day of water. The dog-park essential nobody knew they needed.',
    features: ['Folds flat for storage', 'Large capacity', 'Leak-proof', 'Food + water compartments'],
    specs: ['Capacity: 500ml', 'Material: food-grade silicone', 'Weight: 150g'],
  },
  {
    slug: 'neck-fan',
    name: 'Semiconductor Neck Fan',
    price: 34.99, oldPrice: 45, tag: 'Cooling tech', image: '/jollyhaul-gifts.png',
    description: 'A cold metal plate on your neck, like AC you wear. 3 speeds, whisper quiet.',
    features: ['Semiconductor cooling plate', '3 speed settings', 'Whisper quiet', 'USB rechargeable'],
    specs: ['Battery: 8hr runtime', 'Charging: USB-C', 'Weight: 250g'],
  },
  {
    slug: 'sunrise-clock',
    name: 'Sunrise Alarm Clock',
    price: 39.99, oldPrice: 52, tag: 'Wellness gift', image: '/jollyhaul-gifts.png',
    description: 'Wake up to a sunrise, not a siren. Your mornings will thank you.',
    features: ['Sunrise simulation', 'Natural sounds', 'Snooze function', 'Dimmable display'],
    specs: ['Light: 20 brightness levels', 'Sounds: 7 natural', 'Power: USB'],
  },
  {
    slug: 'desktop-vacuum',
    name: 'Mini Desktop Vacuum',
    price: 29.99, oldPrice: 39, tag: 'Oddly satisfying', image: '/jollyhaul-gifts.png',
    description: 'Tiny vacuum, huge satisfaction. Crumbs, dust, keyboard gunk — gone in seconds.',
    features: ['Powerful suction', 'USB rechargeable', 'Multiple nozzles', 'Easy to empty'],
    specs: ['Battery: 90min runtime', 'Charging: USB', 'Weight: 300g'],
  },
  {
    slug: 'heated-gloves',
    name: 'USB Heated Gloves',
    price: 24.99, oldPrice: 32, tag: 'Winter essential', image: '/jollyhaul-gifts.png',
    description: 'Warm hands in 30 seconds. Touchscreen fingertips so you never take them off.',
    features: ['USB powered heating', 'Touchscreen compatible', '3 heat levels', 'Windproof'],
    specs: ['Heat: up to 50°C', 'Power: USB / power bank', 'Sizes: M/L/XL'],
  },
  {
    slug: 'door-lock',
    name: 'Portable Door Lock',
    price: 16.99, oldPrice: 22, tag: 'Travel safety', image: '/jollyhaul-gifts.png',
    description: 'Hotel and Airbnb peace of mind in your pocket. 15 seconds to install, no tools.',
    features: ['Fits most doors', 'No tools needed', 'Pocket size', 'Metal construction'],
    specs: ['Material: stainless steel', 'Weight: 80g', 'Fits: standard doors'],
  },
  {
    slug: 'scalp-massager',
    name: 'Electric Scalp Massager',
    price: 34.99, oldPrice: 45, tag: 'Self-care', image: '/jollyhaul-gifts.png',
    description: 'A head spa at home. 4 massage nodes melt stress away. The gift they did not know they needed.',
    features: ['4 massage nodes', 'Waterproof', 'USB rechargeable', 'Multiple modes'],
    specs: ['Battery: 2hr runtime', 'Waterproof: IPX7', 'Charging: USB'],
  },
  {
    slug: 'cleaning-brush',
    name: 'Electric Cleaning Brush',
    price: 24.99, oldPrice: 32, tag: 'CleanTok', image: '/jollyhaul-gifts.png',
    description: 'Rotating brush heads obliterate grime. Watch dirt disappear in 3 seconds flat.',
    features: ['Multiple brush heads', 'USB rechargeable', 'Waterproof', 'Cordless'],
    specs: ['Battery: 90min runtime', 'Heads: 5 included', 'Waterproof: IPX7'],
  },
  {
    slug: 'cloud-lamp',
    name: 'LED Cloud Lamp',
    price: 16.99, oldPrice: 22, tag: 'Night light', image: '/jollyhaul-gifts.png',
    description: 'A glowing cloud for your nightstand. Soft light, zero setup, pure cozy.',
    features: ['Soft warm glow', 'Touch control', 'USB powered', 'Lightweight'],
    specs: ['Power: USB 5V', 'Material: soft silicone', 'Weight: 200g'],
  },
  {
    slug: 'charging-station',
    name: '3-in-1 Charging Station',
    price: 59.99, oldPrice: 79, tag: 'Tech gift', image: '/jollyhaul-gifts.png',
    description: 'Phone, watch, earbuds — one magnetic snap charges all three. The desk upgrade.',
    features: ['Magnetic wireless charging', 'Phone + watch + earbuds', 'Night light mode', 'Fast charge'],
    specs: ['Output: 15W max', 'Compatibility: MagSafe/Qi', 'Power: USB-C PD'],
  },
  {
    slug: 'jewelry-box',
    name: 'Luxury Travel Jewelry Box',
    price: 24.99, oldPrice: 34, tag: 'Travel gift', image: '/jollyhaul-gifts.png',
    description: 'Every ring, necklace, and earring in its place. Zips shut, travels anywhere.',
    features: ['Organized compartments', 'Zip closure', 'Compact travel size', 'Premium materials'],
    specs: ['Size: 15x10x5cm', 'Material: PU leather', 'Weight: 250g'],
  },
];

export const getProduct = (slug: string) => allProducts.find(p => p.slug === slug);
