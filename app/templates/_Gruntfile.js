module.exports = function(grunt) {

    grunt.initConfig({
        'connect': {
            demo: {
                options: {
                    open: {
                        target: 'http://localhost:8000/demo'
                    },
                    keepalive: true
                }
            }
        },
        'jscs': {
            src: [
                'Gruntfile.js',
                'test/*.js',
                'src/**/*.js'
            ],
            options: {
                config: '.jscsrc',
                esnext: true,
                verbose: true,
                fix: true
            }
        },
        'wct-test': {
            local: {
                options: {remote: false},
            },
            remote: {
                options: {remote: true},
            },
            chrome: {
                options: {browsers: ['chrome']},
            },
        },
        'gh-pages': {
            options: {
                clone: 'bower_components/<%= githubRepo %>'
            },
            src: [
                'bower_components/**/*',
                '!bower_components/<%= githubRepo %>/**/*',
                'demo/*', 'src/*', 'index.html'
            ]
        }<% if (boilerplate != 'VanillaJS') { %>,
        'replace': {
            example: {
                src: ['src/*'],
                dest: 'dist/',
                replacements: [{
                    from: 'bower_components',
                    to: '..'
                }]
            }
        }<% } %>
    });

    grunt.loadNpmTasks("grunt-jscs");
    grunt.loadNpmTasks('web-component-tester');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-gh-pages');<% if (boilerplate != 'VanillaJS') { %>
    grunt.loadNpmTasks('grunt-text-replace');<% } %>
<% if (boilerplate != 'VanillaJS') { %>
    grunt.registerTask('build',  ['replace']);<% } %>
    grunt.registerTask('deploy', ['gh-pages']);
    grunt.registerTask('server', ['jscs', 'wct-test:local', 'connect']);
    grunt.registerTask('test', ['wct-test:local']);

};
