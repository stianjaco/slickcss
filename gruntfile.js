module.exports = function( grunt ) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		
		sass: {
			dist: {
				files: {
					'dist/css/slick-grid.css' : 'src/scss/slick-grid.scss',
					'dist/css/slick.css' : 'src/scss/slick.scss'
				},
				options: {
					loadPath: [
			          'src/scss/'
			        ],
					trace: true,
					style: 'expanded',
					cacheLocation: 'src/.sass-cache'
				} 
			}
		},

		cssmin: {
			target: {
				files:[{
					expand: true,
					cwd: 'dist/css',
					src: ['*.css', '!*.min.css'],
					dest: 'dist/css',
					ext: '.min.css'
				}]
			}
		},

		browserify: {
			dist: {
				options:{
					transform: [['babelify', { presets: "es2015" }]],
	                browserifyOptions: {
	                    debug: true
	                }
				},
				files: {
					"dist/js/dropdownmenu.js": "src/js/dropdownmenu.js",
					"dist/js/slickmasonry.js": "src/js/slickmasonry.js",
				},
			}
		},
		// Minify and compress
		uglify: {
			options: {
				manage: false
			},
			targets: {
				files: [
					{
						'dist/js/dropdownmenu.min.js' : ['dist/js/dropdownmenu.js'],
						'dist/js/slickmasonry.min.js' : ['dist/js/slickmasonry.js'],
					}
				]
			}
		},
		// Clean out the directory
		clean: {
			es6Build: ["src/tmp/"],
		},

		watch: {
			sass: {
				files: ['src/scss/**/*.scss'],
				tasks: ['sass','cssmin']
			},
			js: {
				files: ['src/js/**/*.js'],
				tasks: [/*'jshint',*/'browserify','uglify'],
			}
		},
	}); 

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-uglify'); 
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build', ['sass','cssmin',/*'jshint',*/'browserify','uglify']);

};