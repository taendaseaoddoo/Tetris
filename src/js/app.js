'use strict';

require.config({
    baseUrl: '../js',
    paths: {
        'jquery': '../../libs/jquery/dist/jquery.min',
        'underscore': '../../libs/underscore/underscore-min',
        'backbone': '../../libs/backbone/backbone-min'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    }
});
require([
    'jquery',
    'underscore',
    'backbone',
    './tetris',
    './music',
    './defaults'
], function ($, _, Backbone, Tetris, Music, defaults) {

    var app = app || {};

    app.Router = Backbone.Router.extend({
        routes: {
            '': 'index',
            '/music': 'getMusic',
            '/tetris': 'getTetris'
        },
        index: function () {

        },
        getMusic: function () {

        },
        getTetris: function () {

        }
    });
    app.Model = Backbone.Model.extend({
        initialize: function () {
            console.log('app model initialize');
        },
        default: {
            title: '',
            completed: false
        },
        toggle: function () {
            
        }
    });
    app.Collection = Backbone.Collection.extend({
        model: app.Model
    });

    app.View = Backbone.View.extend({
        el: '#app',
        template: _.template($('#app-template').html()),
        events: {
            'click #app': 'bodyClick'
        },
        initialize: function () {
            console.log('app view initialize');
        },
        render: function () {
            console.log('app view render');
        },
        bodyClick: function () {
        }
    });

    var appCollection = new app.Collection;
    var appRouter = new app.Router();
    var appView = new app.View();
    Backbone.history.start();
    // git test

    // $.fn.tetris = function (options1, options2) {
    //     var tetris_settings = $.extend({}, defaults.tetris, options1);
    //     var music_settings = $.extend({}, defaults.music, options2);
    //     return this.each(function (index, element) {
    //         var tetris = new Tetris(tetris_settings, $(element));
    //         tetris.init();
    //         var music = new Music(music_settings);
    //         music.init();
    //         music.play();
    //     });
    // };
    //
    // $('#tetris-demo').css({
    //     'width': $(window).width(),
    //     'height': $(window).height()
    // })
    // .tetris({
    //     speed: 20,
    //     autoplay: false,
    //     autoplayRestart: false
    // }, {
    //     holder: '#tetris-demo',
    //     random: true,
    //     paths: '../mp3/',
    //     playlist: [
    //         'm1.mp3',
    //         'm2.mp3',
    //         'm3.mp3',
    //         'm4.mp3'
    //     ]
    // });
});