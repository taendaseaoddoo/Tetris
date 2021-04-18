require.config({
    baseUrl: '../js',
    paths: {
        'jquery': '../../libs/jquery/dist/jquery.min',
        'backbone': '../../libs/backbone/backbone-min',
        'underscore': '../../libs/underscore/underscore-min'
    }
});
require(['jquery', 'backbone', './tetris', './music', './defaults'], function ($, Backbone, Tetris, Music, defaults) {
    "use strict";
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

    console.log(Backbone);

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