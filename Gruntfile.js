var mozjpeg = require('imagemin-mozjpeg');
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'), //load configuration
		// CSS concat and minification
		cssmin: {
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
		// js concat and minify
		concat: {
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
		},
		// image optimization
		imagemin: {
			dynamic: {
				options: { // Target options
					optimizationLevel: 3,
					svgoPlugins: [{
						removeViewBox: false
					}],
					use: [mozjpeg()]
				},
				files: [{
					expand: true, // Enable dynamic expansion
					cwd: 'images/original/', // Src matches are relative to this path
					src: ['**/*.{png,jpg,gif}'], // Actual patterns to match
					dest: 'images/' // Destination path prefix
				}]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-cssmin'); // which NPM packages to load
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-newer'); // only apply when newer/changed files
	grunt.registerTask('default', ['cssmin', 'concat', 'uglify', 'newer:imagemin']);
};