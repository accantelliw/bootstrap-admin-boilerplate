module.exports = function(grunt) {

  grunt.initConfig({

	  less: {
      build: {
        files: {
          'css/style.css': 'less/*.less'
        }
      }
    },    

    cssmin: {
      clean: {
        files: {
          'css/style.min.css': 'css/style.css'
        }
      }
    },

    clean: {
      build: ['css/style.css']
    },

    watch: {
      less: {
        files: ['less/*.less'],
        tasks: ['build']
      }
    },

    connect: {
      server: {
        options: {
          livereload: true,
          port: 9000
        }
      }
    }    

  });

  // load nodemon
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('build', ['less', 'cssmin', 'clean']);
  grunt.registerTask('serve', ['connect', 'watch']);

};