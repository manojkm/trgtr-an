module.exports = {

    options: {
        map: true, //Autoprefixer will not remove sourcemap info from scss file.
        browsers: ['last 2 versions']
    },

    dev: {
        expand: true,
        flatten: true,
        src: '<%= cssCombPath %>', // path is configured in Gruntfile.js
        dest: '<%= site.dev_assets %>/css/',
        nonull: true, //to warn if a given file is missing or invalid
    }
};
