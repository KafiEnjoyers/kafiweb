import adapter from '@sveltejs/adapter-static';

// 判断是否为开发环境
const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// 使用静态适配器生成静态网站
		adapter: adapter({
			// 明确指定输出目录
			fallback: 'index.html',
			pages: 'build',
			assets: 'build',
			precompress: false
		}),
		
		// 为 GitHub Pages 设置基础路径
		paths: {
			base: dev ? '' : '/kafiweb'
		}
	}
};

export default config;
