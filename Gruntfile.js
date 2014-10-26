module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'), //load configuration
		cssmin: { // concatenate and minify css
			combine: {
				files: {
					'css/style.concat.css': ['css/reset.css', 'css/grid.css', 'css/style.css']
				}
			},
			my_target: {
				files: [{
					expand: true,
					cwd: 'css/',
					src: ['style.concat.css'],
					dest: 'css/',
					ext: '.min.css'
				}]
			}
		},
		concat: { // concatination task settings
			dist: {
				src: ['js/minified-legacyie.js', 'js/main.js'],
				dest: 'js/main.concat.js',
			}
		},
		uglify: {
			build: {
				src: ['js/main.concat.js'],
				dest: 'js/main.min.js',
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-cssmin'); // which NPM packages to load
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['cssmin', 'concat', 'uglify']);
};