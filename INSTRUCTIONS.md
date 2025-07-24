# Running the Pro Plumbers Website

## Quick Start

1. Open a terminal in the project directory
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open your browser to http://localhost:3000

## Testing CSS

First, visit http://localhost:3000/test to verify Tailwind CSS is working. You should see:
- A blue background
- A white card with shadow
- Red heading text
- A green button

If you see plain HTML without styling, try:
1. Stop the server (Ctrl+C)
2. Clear the cache: `rm -rf .next`
3. Restart: `npm run dev`

## Pages to Check

1. **Homepage** - http://localhost:3000
   - Should show hero section with gradient background
   - Red primary buttons
   - Service grid with hover effects
   - Mobile-responsive design

2. **Emergency Pages** - Examples:
   - http://localhost:3000/emergency-plumber-sevenoaks
   - http://localhost:3000/emergency-plumber-kent
   - http://localhost:3000/emergency-plumber-bromley

3. **Contact Page** - http://localhost:3000/contact
   - Contact form on the right
   - Company info on the left

## Troubleshooting

If CSS is not loading:

1. **Check the browser console** for errors
2. **Hard refresh** the page (Ctrl+Shift+R)
3. **Check if Tailwind is building** - You should see output in the terminal when you save files
4. **Verify PostCSS config** is correct (already fixed)

## Production Build

For a production-optimized build:
```bash
npm run build
npm start
```

The site should now be fully styled with:
- Red primary color (#fc0b0a) for CTAs
- Responsive design
- Hover effects
- Proper spacing and typography