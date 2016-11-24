(function (global) {
    System.config({

        paths: {
            // paths serve as alias
            'npm:': 'lib/'
        },

        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            // other libraries
            'rxjs': 'npm:rxjs',
            'react': 'npm:react/dist/react.js',
            'react-dom': 'npm:react-dom/dist/react-dom.js',
            'react-with-addons': 'npm:react/dist/react-with-addons.js',

            'TweenMax': 'npm:gsap/src/minified/TweenMax.min.js',
            'TimelineMax': 'npm:gsap/src/minified/TimelineMax.min.js',

            'underscore': 'npm:underscore/underscore-min.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './bootstrap.js',
                defaultExtension: 'js'
            }
        }
    });


    System.import('app')
        .then(null, console.error.bind(console));

})(this);