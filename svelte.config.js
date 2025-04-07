import adapter from '@sveltejs/adapter-static';

// 判断是否为开发环境
const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// 使用静态适配器生成静态网站
		adapter: adapter(),
		
		// 为 GitHub Pages 设置基础路径
		// 在生产环境中使用仓库名称作为基础路径，在开发环境中使用空字符串
		paths: {
			base: dev ? '' : '/kafiweb'
		}
	}
};

export default config;
