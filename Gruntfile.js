'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            lib: {
                src: ['lib/**/*.js']
            },
        },
        watch: {
            all: {
                files: ['lib/**/*.js'],
                tasks: ['jshint', 'jsdoc']
            }
        },
        jsdoc : {
            dist : {
                src: ['lib/**/*.js'],
                options: {
                    destination: 'doc'
                }
            }
        },
    });


// These plugins provide necessary tasks.
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-jsdoc');

// Default task.

grunt.registerTask('check', ['watch']);

};
