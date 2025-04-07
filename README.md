# Kafi Studio Website

The official website for Kafi Studio - Software built different.

## Technologies Used

- [SvelteKit 2](https://kit.svelte.dev/): Modern web framework for building fast, efficient applications
- [Vite 6](https://vitejs.dev/): Next-generation frontend tooling
- [GSAP](https://greensock.com/gsap/): Professional-grade animation library

## Features

- Responsive design that works well on all device sizes
- Clean, modern UI with the JetBrains Mono font
- Custom typewriter animation effect
- SEO optimization with proper meta tags

## Getting Started

### Prerequisites

- Node.js (version 18 or later recommended)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/kafiweb.git
cd kafiweb
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
# or
yarn build
```

The build output will be in the `build` directory.

## Project Structure

- `src/`: Main source code
  - `routes/`: SvelteKit routes
  - `lib/`: Utility functions and components
  - `app.html`: HTML template
  - `app.css`: Global styles
- `static/`: Static assets like images
- `package.json`: Project dependencies and scripts
- `svelte.config.js`: SvelteKit configuration
- `vite.config.js`: Vite configuration

## Code Standards

- ESLint for code linting
- Prettier for code formatting

Run the linter:
```bash
npm run lint
```

Format code:
```bash
npm run format
```

## License

This project is proprietary and owned by Kafi Studio.

## Contact

Kafi Studio - [info@kafistudio.com](mailto:info@kafistudio.com)
