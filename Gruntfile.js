module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
	uglify: {
	  my_target: {
	    files: {
		  './js/output/main.js': './js/*.js'     	
		  }
	  }	
	},
	
	watch: {
	  scripts: {
		  files: ['./js/questions.js','./js/user.js','./js/quiz.js','./js/main.js'],
      tasks: ['uglify']  
	  }	
	}		
		
  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('ugly', ['uglify']);
  grunt.registerTask('default', ['watch']);
};