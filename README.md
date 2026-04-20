# Modern Landing Page

![App Preview](https://imgix.cosmicjs.com/534d3860-3d00-11f1-b186-117430a97b22-autopilot-photo-1519389950473-47ba0277781c-1776720703196.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A stunning, modern landing page built with Next.js 16 and powered by Cosmic CMS.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 🚀 Built with Next.js 16 and React 19
- 📦 Powered by Cosmic CMS for content management
- ⚡ Server-side rendering for optimal performance
- 📱 Mobile-first responsive design
- 🎯 Dynamic hero, features, and testimonials sections
- 🔍 SEO optimized with meta tags

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69e69b047945ab7cc4f12ce8&clone_repository=69e69bbb7945ab7cc4f12d09)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: Fetch this design file, read its readme, and implement the relevant aspects of the design. https://api.anthropic.com/v1/design/h/zmsgXMcN-zrpDSIR3BJkFQ?open_file=Landing+Page.html Implement: Landing Page.html"

### Code Generation Prompt

> "Fetch this design file, read its readme, and implement the relevant aspects of the design. https://api.anthropic.com/v1/design/h/zmsgXMcN-zrpDSIR3BJkFQ?open_file=Landing+Page.html Implement: Landing Page.html"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Cosmic SDK

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with bucket configured

### Installation

```bash
bun install
bun run dev
```

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch landing page
const { object } = await cosmic.objects.findOne({
  type: 'landing-page',
  slug: 'home'
}).depth(1)

// Fetch features
const { objects: features } = await cosmic.objects
  .find({ type: 'features' })
  .depth(1)
```

## Cosmic CMS Integration

This app uses three content types: `landing-page`, `features`, and `testimonials`.

## Deployment Options

Deploy to Vercel or Netlify with environment variables set.

<!-- README_END -->