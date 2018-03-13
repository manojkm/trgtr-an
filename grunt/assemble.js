// The "assemble" task
module.exports = {
    // Task-level options
    options: {

        collections: [
            {
                name: 'legal',
                sortby: 'posted',
                sortorder: 'descending'
            },
            {
                name: 'membership',
                sortby: 'posted',
                sortorder: 'descending'
            },
            {
                name: 'company',
                sortby: 'posted',
                sortorder: 'descending'
            },
            {
                name: 'support',
                sortby: 'posted',
                sortorder: 'descending'
            }],

        flatten: true,
        layoutext: '.hbs',
        assets: '<%= site.dev_assets %>',

        // Metadata
        site: '<%= site %>',
        data: '<%= site.src_data %>',

        // Templates
        partials: '<%= site.src_partials %>',
        layoutdir: '<%= site.src_layoutdir %>',
        layout: '<%= site.src_layout %>',

        // Extensions
        helpers: '<%= site.src_helpers %>'
    },

    main: {
        options: {
            dist: false
        },
        files: [{
            expand: true,
            cwd: '<%= site.src_pages %>',
            src: ['**/*.hbs'],
            dest: '<%= site.dev %>'
        }]
    },


    // rtl: {
    //     options: {
    //         layout: 'default',
    //         rtl: true
    //     },
    //     files: [{
    //         expand: true,
    //         cwd: '<%= site.src_pages %>',
    //         src: ['**/*.hbs'],
    //         dest: '<%= site.dev %>/rtl'
    //     }]
    // }
};
