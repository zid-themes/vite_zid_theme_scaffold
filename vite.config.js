import vituum from 'vituum';
import twig from '@vituum/vite-plugin-twig';
import cp from 'vite-plugin-cp';


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
					json_encode: (data) => JSON.stringify(data),
            }
		}),
		cp({
			targets: [
			  {src: './src/{footer,header,layout}.twig', dest: './dist'},
			  {src: './src/common', dest: './dist/common'},
			  {src: './src/templateS', dest: './dist/templateS'},
			  {src: './src/locals', dest: './dist/locals'},
			  {src: './src/modules', dest: './dist/modules'},
			  {src: './src/assets',dest: './dist/assets'},

			]
		  })
	],

	base: '/',
	build: {
		emptyOutDir: true,
	},
};
