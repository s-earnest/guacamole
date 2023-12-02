const resource = [
    /* --- CSS --- */
    '/guacamole/assets/css/style.css',

    /* --- PWA --- */
    '/guacamole/app.js',
    '/guacamole/sw.js',

    /* --- HTML --- */
    '/guacamole/index.html',
    '/guacamole/404.html',

    
        '/guacamole/categories/',
    
        '/guacamole/tags/',
    
        '/guacamole/archives/',
    
        '/guacamole/about/',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/guacamole/assets/img/favicons/android-chrome-192x192.png',
        '/guacamole/assets/img/favicons/android-chrome-512x512.png',
        '/guacamole/assets/img/favicons/apple-touch-icon.png',
        '/guacamole/assets/img/favicons/favicon-16x16.png',
        '/guacamole/assets/img/favicons/favicon-32x32.png',
        '/guacamole/assets/img/favicons/favicon.ico',
        '/guacamole/assets/img/favicons/site.webmanifest',
        '/guacamole/assets/js/dist/categories.min.js',
        '/guacamole/assets/js/dist/commons.min.js',
        '/guacamole/assets/js/dist/home.min.js',
        '/guacamole/assets/js/dist/misc.min.js',
        '/guacamole/assets/js/dist/page.min.js',
        '/guacamole/assets/js/dist/post.min.js',
        '/guacamole/assets/js/dist/pvreport.min.js',
        '/guacamole/assets/img/favicons/.DS_Store'
];

/* The request url with below domain will be cached */
const allowedDomains = [
    

    'localhost:4000',

    

    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net',
    'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
    
];

