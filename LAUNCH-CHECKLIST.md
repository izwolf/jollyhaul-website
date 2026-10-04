# JollyHaul — Launch Tonight Checklist

## Step 1: Set your email (2 min)
Open `lib/site.ts` and replace `REPLACE_WITH_YOUR_EMAIL` with your real email.
Waitlist signups land in your inbox free via FormSubmit.

## Step 2: GitHub repo (5 min)
1. Unzip this folder on your Mac
2. GitHub.com → New repository → `jollyhaul-website` (public or private)
3. In terminal, inside the folder:
   ```
   git init
   git add .
   git commit -m "JollyHaul launch"
   git branch -M main
   git remote add origin git@github.com:YOURUSER/jollyhaul-website.git
   git push -u origin main
   ```

## Step 3: Cloudflare Pages (5 min)
1. Cloudflare Dashboard → Workers & Pages → Create → Pages → Import `jollyhaul-website`
2. Build settings:
   - Framework preset: Next.js (Static HTML Export)
   - Build command: `npx next build`
   - Build output directory: `out`
   - Environment variable: `NODE_VERSION` = `20`
3. Save and Deploy → live at `jollyhaul-website.pages.dev`

## Step 4: Activate the waitlist (2 min)
Submit your own email on the site once → FormSubmit sends an activation email → click it.
Until you click, signups are held, not delivered.

## Step 5: TikTok bio
`tiktok.com/@jollyhaul` → Edit profile → bio link → your new site URL.

## Step 6: Post video #1
From your media library: `projector-v2.mp4`, hook "the $32 projector all over your FYP".

## LATER — going live with checkout (after samples pass)
1. Stripe dashboard → Payment Links → create one per product (5 total)
2. Enable "promotion codes" on each link so JOLLY15 works
3. Paste the 5 URLs into `lib/site.ts`
4. `git add . && git commit -m "checkout live" && git push` → Cloudflare redeploys
5. Buttons flip from "Notify me" to "Buy now" automatically. No other change needed.
