module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['js/*.js'],
        dest: 'build/production.js',
      }
    },
    uglify: {
      build: {
        src: 'build/production.js',
        dest: 'build/production.min.js'
      }
    },
    cssmin: {
        target: {
          files: {
            'build/mainStyle.css': ['css/*.css']
          }
        }
    }
  });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['concat','uglify','cssmin']);

};
