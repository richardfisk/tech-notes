var favicons = require('favicons');

var config =  {
    files: {
        src: 'https://pbs.twimg.com/profile_images/578856422110162944/QZevelRr_400x400.jpeg',                // Path(s) for file to produce the favicons. `string` or `object`
        dest: 'dist/images/',               // Path for writing the favicons to. `string`
        html: 'dist/index.html',               // Path(s) for HTML file to write or append metadata. `string` or `array`
        iconsPath: null,          // Path for overriding default icons path. `string`
        androidManifest: null,    // Path for an existing android_chrome_manifest.json. `string`
        browserConfig: null,      // Path for an existing browserconfig.xml. `string`
        firefoxManifest: null,    // Path for an existing manifest.webapp. `string`
        yandexManifest: null      // Path for an existing yandex-browser-manifest.json. `string`
    },
    icons: {
        android: true,            // Create Android homescreen icon. `boolean`
        appleIcon: true,          // Create Apple touch icons. `boolean`
        appleStartup: true,       // Create Apple startup images. `boolean`
        coast: true,              // Create Opera Coast icon. `boolean`
        favicons: true,           // Create regular favicons. `boolean`
        firefox: true,            // Create Firefox OS icons. `boolean`
        opengraph: true,          // Create Facebook OpenGraph. `boolean`
        windows: true,            // Create Windows 8 tiles. `boolean`
        yandex: true              // Create Yandex browser icon. `boolean`
    },
    settings: {
        appName: null,            // Your application's name. `string`
        appDescription: null,     // Your application's description. `string`
        developer: null,          // Your (or your developer's) name. `string`
        developerURL: null,       // Your (or your developer's) URL. `string`
        version: 1.0,             // Your application's version number. `number`
        background: null,         // Background colour for flattened icons. `string`
        index: null,              // Path for the initial page on the site. `string`
        url: null,                // URL for your website. `string`
        silhouette: false,        // Turn the logo into a white silhouette for Windows 8. `boolean`
        logging: false            // Print logs to console? `boolean`
    },
    favicon_generation: null,     // Complete JSON overwrite for the favicon_generation object. `object`
};

favicons(config);
  