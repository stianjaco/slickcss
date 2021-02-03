module.exports = function( grunt ) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		
		sass: {
			dist: {
				files: {
					'dist/css/slick-grid.css' : 'src/slick-grid.scss',
					'dist/css/slick.css' : 'src/slick.scss'
				},
				options: {
					loadPath: [
			          'src/'
			        ],
					trace: true,
					style: 'expanded',
					//cacheLocation: '.sass-cache' // Not working? 
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
				files: ['src/**/*.scss'],
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