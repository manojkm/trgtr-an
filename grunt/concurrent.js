module.exports = {

    watch: ['watch:html', 'watch:sass_css', 'watch:js', 'watch:images', 'watch:wp_theme_php_flies'],
    // watch_dev: ['watch:assemble_dev', 'watch:css', 'watch:js', 'watch:images'],

    task_css: [
        ['sass:dev', 'newer:autoprefixer','notify:css']

        /*TODO enalbe the below once the developement is completed*/
        // ['sass:dev', 'newer:copy:css', 'newer:autoprefixer', 'newer:cssmin', 'newer:csslint', /*'sync',*/ 'notify:css']
    ],

    task_js: [
        ['newer:copy:js', 'newer:concat', 'newer:jshint', 'newer:uglify',/* 'sync',*/ 'notify:js']
    ],

    task_html: [
        ['newer:assemble', 'newer:htmlhint', 'newer:prettify',/* 'sync',*/ 'notify:html']
    ],

    task_img: [
        ['newer:copy:images', 'newer:imagemin', 'newer:sprite',/* 'sync',*/ 'notify:img']
    ],

    task_wp_theme_php_flies: [
        ['sync']
    ],

    options: { logConcurrentOutput: true }
};
