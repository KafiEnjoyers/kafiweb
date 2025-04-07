import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: false,
      strict: false  // 改为 false，允许非预渲染路由
    }),
    paths: {
      base: dev ? '' : '/kafiweb'
    },
    trailingSlash: 'always'  // 改为 always，与 layout.js 一致
  }
};

export default config;