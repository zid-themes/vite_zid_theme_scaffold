import vituum from 'vituum';
import twig from '@vituum/vite-plugin-twig';

export default {
	plugins: [
		vituum({
			imports: {
				filenamePattern: {
					'+.ts': ['src/assets/scripts'],
					'+.css': 'src/assets/styles',
				},
			},
		}),
		twig({
			root: './src',
			globals: {foo: 'bar'},
            functions: {
                    join: (...args) => args.join(''),
            }
		}),
	],

	base: '/',
	build: {
		emptyOutDir: true,
	},
};
