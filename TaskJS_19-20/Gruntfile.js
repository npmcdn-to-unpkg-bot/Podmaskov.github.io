module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'css',
        src: ['*.scss'],
        dest: 'css',
        ext: '.css'
      }]
    }
  },
  watch: {
    sass: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['css/*.scss'],
      tasks: ['sass'],
    },
  }
  });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass']);

};
