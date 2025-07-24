# Pro Plumbers Ltd - Professional Plumbing Website

A high-performance, SEO-optimized website for Pro Plumbers Ltd, built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Next.js 15** with App Router for optimal performance
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** for responsive, utility-first styling
- **SEO Optimized** with structured data, meta tags, and dynamic sitemaps
- **Mobile First** design with sticky call-to-action bar
- **24/7 Emergency Service** messaging throughout
- **Local SEO** with location-specific pages
- **Fast Performance** optimized for Core Web Vitals

## 🛠️ Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- React 19
- Lucide Icons

## 📁 Project Structure

```
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.tsx         # Root layout with nav/footer
│   │   ├── page.tsx           # Homepage
│   │   ├── contact/           # Contact page
│   │   └── emergency-plumber-[location]/  # Dynamic location pages
│   ├── components/            # Reusable React components
│   │   ├── ui/               # Base UI components
│   │   ├── home/             # Homepage sections
│   │   ├── emergency/        # Emergency page components
│   │   └── contact/          # Contact page components
│   ├── config/               # Configuration files
│   │   └── site.ts          # Site-wide configuration
│   └── lib/                  # Utility functions
│       ├── utils.ts         # Helper functions
│       └── structured-data.ts # SEO schema generators
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [your-repo-url]
cd proplumbers

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm start      # Start production server
npm run lint   # Run ESLint
```

## 📱 Key Pages

- **Homepage** - Full service overview with CTAs
- **Emergency Pages** - Location-specific emergency plumber pages
- **Contact** - Contact form and company information
- **Test Page** (`/test`) - CSS verification page

## 🎨 Design Features

- Professional red (#fc0b0a) primary color
- Mobile-responsive navigation
- Sticky mobile call bar
- Trust signals throughout (Gas Safe, 15+ years, etc.)
- Clear emergency messaging
- Transparent pricing display

## 🔍 SEO Features

- Dynamic meta tags for all pages
- JSON-LD structured data for:
  - Local Business (Plumber)
  - Services
  - Breadcrumbs
  - FAQs
- Location-specific content
- Optimized for keywords like:
  - "emergency plumber sevenoaks"
  - "plumber kent"
  - "24 hour plumber"
  - "boiler repair sevenoaks"

## 📞 Contact Integration

All phone numbers are click-to-call enabled:
```
tel:01732444555
```

## 🚢 Deployment

The site is optimized for deployment on Vercel:

```bash
npm run build
vercel
```

## 📈 Performance

- Optimized images with Next.js Image component
- Code splitting for faster page loads
- Minimized JavaScript bundles
- Tailwind CSS purging for smaller CSS files

## 🔧 Configuration

Main configuration is in `/src/config/site.ts` including:
- Company details
- Service areas
- Services offered
- Pricing structure

## 📝 License

This project is proprietary and confidential.

---

Built with ❤️ for Pro Plumbers Ltd