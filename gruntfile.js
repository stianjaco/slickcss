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

		watch: {
			sass: {
				files: ['src/scss/**/*.scss'],
				tasks: ['sass','cssmin']
			}
		},
	}); 

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build', ['sass','cssmin']);

};