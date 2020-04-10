module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin:{
      options:{
        removeComments: true,
        collapseWhitespace:true
      },
      files:{
        src:'./index.html',
        dest:'dest/index.html'
      }
    },
    cssmin:{
      'dest/work/layout.css':'work/layout.css',
      'dest/menu/layout.css':'menu/layout.css',
      'dest/enter/layout.css':'enter/layout.css',
      'dest/write/layout.css':'write/layout.css'
    },
    uglify:{
      'dest/main.js':'main.js',
      'dest/work/main.js':'work/main.js',
      'dest/menu/main.js':'menu/main.js',
      'dest/menu/data.js':'menu/data.js',
      'dest/enter/main.js':'enter/main.js',
      'dest/write/main.js':'write/main.js'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin'); 
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('lint', ['cssmin','htmlmin','uglify']);
};
