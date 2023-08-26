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
			pages: {
				dir: 'src/templates',
				extensions: ['twig'],
			},

		}),
		
		twig({
			root: './src',
			globals: {foo: 'bar'},
            functions: {
                    join: (...args) => args.join(''),
					json_encode: (data) => JSON.stringify(data),
            },
			
		

		}),

		cp({
			targets: [
			  {src: './src/{footer,header,layout}.twig', dest: './output_theme'},
			  {src: './src/common', dest: './output_theme/common'},
			  {src: './src/templates', dest: './output_theme/templates'},
			  {src: './src/locals', dest: './output_theme/locals'},
			  {src: './src/modules', dest: './output_theme/modules'},
			  {src: './src/assets',dest: './output_theme/assets'},
			]
		  })
	],

	base: '/',
	build: {
		emptyOutDir: true,
		
	},
	
};
