import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const dev = process.env.NODE_ENV === 'development';

export default defineConfig({
	plugins: [sveltekit()],
	base: dev ? '' : '/kafiweb/',
	build: {
		outDir: 'build',
		assetsDir: '_app'
	}
});
