import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const dev = process.env.NODE_ENV === 'development';

export default defineConfig({
	plugins: [sveltekit()],
	base: dev ? '' : '/kafiweb',  // 移除末尾的斜杠，确保与 svelte.config.js 一致
	build: {
		outDir: 'build',
		assetsDir: '_app'
	}
});
