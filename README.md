# Andrea Sánchez Blanco Portfolio

A modern, responsive portfolio website built with Astro, React, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Astro** - Static site generator with component islands
- **React** - Interactive UI components with TypeScript
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Inter Font** - Modern typography

## 🎨 Features

- **Responsive Design** - Works perfectly on all devices
- **Modern Animations** - Smooth scroll animations and hover effects
- **Component Architecture** - Modular React components with TypeScript
- **Performance Optimized** - Fast loading with Astro's static generation
- **SEO Friendly** - Proper meta tags and semantic HTML
- **Accessibility** - WCAG compliant design

## 📁 Project Structure

```text
/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Work.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── layouts/          # Astro layouts
│   │   └── Layout.astro
│   ├── pages/            # Astro pages
│   │   └── index.astro
│   └── styles/           # Global styles
│       └── global.css
├── astro.config.mjs      # Astro configuration
├── tailwind.config.mjs   # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`     |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:4321`

## 🎯 Customization

### Content
- Update personal information in the React components
- Modify project data in `src/components/Work.tsx`
- Change contact information in `src/components/Contact.tsx`

### Styling
- Customize colors and spacing in `tailwind.config.mjs`
- Add global styles in `src/styles/global.css`
- Modify component styles using Tailwind classes

### Components
- All components are in `src/components/` with TypeScript
- Each component includes animations and responsive design
- Components use Astro's `client:load` directive for interactivity

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🌟 Performance Features

- **Static Generation** - Pre-rendered HTML for fast loading
- **Component Islands** - JavaScript only loads when needed
- **Optimized Images** - Automatic image optimization
- **Minimal Bundle** - Only necessary JavaScript is shipped

## 📄 License

This project is open source and available under the [MIT License](LICENSE).