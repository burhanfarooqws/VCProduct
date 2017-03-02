'use strict';

export default {

  browserPort: 3000,
  UIPort: 3001,
  testPort: 3002,

  sourceDir: './app/',
  buildDir: './www/',

  styles: {
    src: 'app/styles/**/*.scss',
    dest: 'www/css',
    prodSourcemap: false,
    sassIncludePaths: []
  },

  scripts: {
    src: 'app/js/**/*.js',
    dest: 'www/js',
    test: 'test/**/*.js',
    gulp: 'gulp/**/*.js'
  },

  images: {
    src: 'app/images/**/*',
    dest: 'www/images'
  },

  fonts: {
    src: ['app/fonts/**/*'],
    dest: 'www/fonts'
  },

  nbbLibAssets: {
      src: ['app/lib/**/*'],
      dest: 'www/js/lib'
  },

  nbbCSSAssets: {
      src: ['app/css/**/*'],
      dest: 'www/css'
  },

  assetExtensions: [
    'js',
    'css',
    'png',
    'jpe?g',
    'gif',
    'svg',
    'eot',
    'otf',
    'ttc',
    'ttf',
    'woff2?'
  ],

  views: {
    index: 'app/index.html',
    src: 'app/views/**/*.html',
    dest: 'app/js'
  },


  browserify: {
    bundleName: 'main.js',
    prodSourcemap: false
  },

  test: {
    karma: 'test/karma.conf.js',
    protractor: 'test/protractor.conf.js'
  },

  init: function() {
    this.views.watch = [
      this.views.index,
      this.views.src
    ];

    return this;
  }

}.init();
