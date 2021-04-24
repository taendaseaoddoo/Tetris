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
    var template = '';
    var tetris_model = Backbone.Model.extend({
        default: {

        }
    });
    var tetris_collection = Backbone.Collection.extend({
        model: tetris_model
    });
    var tetirs_router = Backbone.Router.extend({
        routes: {

        }
    });
    var tetirs_view = Backbone.View.extend({
        el: '#tetris-demo',
        template: _.template(template),
        events: {
            
        },
        initialize: function () {
        },
        render: function () {
        }
    });
    Backbone.history.start();

    $.fn.tetris = function (options1, options2) {
        var tetris_settings = $.extend({}, defaults.tetris, options1);
        var music_settings = $.extend({}, defaults.music, options2);
        return this.each(function (index, element) {
            var tetris = new Tetris(tetris_settings, $(element));
            tetris.init();
            var music = new Music(music_settings);
            music.init();
            music.play();
        });
    };

    $('#tetris-demo').css({
        'width': $(window).width(),
        'height': $(window).height()
    })
    .tetris({
        speed: 20,
        autoplay: false,
        autoplayRestart: false
    }, {
        holder: '#tetris-demo',
        random: true,
        paths: '../mp3/',
        playlist: [
            'm1.mp3',
            'm2.mp3',
            'm3.mp3',
            'm4.mp3'
        ]
    });
});