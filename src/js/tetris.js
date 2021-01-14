(function($, window, document){
    'use strict';
    $.fn.tetris = function (options) {
        var defaults = {
            theme: null, // The theme name or a theme object
            blockWidth: 1
        };
        var settings = $.extend({}, defaults, options);

        return this.each(function () {

            var Tetris = {
                // Canvas
                _canvas: null,
                _ctx: null,
                // UI Elements
                _$game: null,
                _$canvas: null,
                _$gameholder: null,
                _$start: null,
                _$score: null,
                _$scoreText: null,
                _shapes: {
                    line: [
                        [ 0, -1,   0, -2,   0, -3,   0, -4],
                        [ 2, -2,   1, -2,   0, -2,  -1, -2],
                        [ 0, -4,   0, -3,   0, -2,   0, -1],
                        [-1, -2,   0, -2,   1, -2,   2, -2]
                    ],
                    square: [
                        [0,  0,   1,  0,   0, -1,   1, -1],
                        [1,  0,   1, -1,   0,  0,   0, -1],
                        [1, -1,   0, -1,   1,  0,   0,  0],
                        [0, -1,   0,  0,   1, -1,   1,  0]
                    ],
                    arrow: [
                        [0, -1,   1, -1,   2, -1,   1, -2],
                        [1,  0,   1, -1,   1, -2,   0, -1],
                        [2, -1,   1, -1,   0, -1,   1,  0],
                        [1, -2,   1, -1,   1,  0,   2, -1]
                    ],
                    rightHook: [
                        [2,  0,   1,  0,   1, -1,   1, -2],
                        [2, -2,   2, -1,   1, -1,   0, -1],
                        [0, -2,   1, -2,   1, -1,   1,  0],
                        [0,  0,   0, -1,   1, -1,   2, -1]
                    ],
                    leftHook: [
                        [0,  0,   1,  0,   1, -1,   1, -2],
                        [2,  0,   2, -1,   1, -1,   0, -1],
                        [2, -2,   1, -2,   1, -1,   1,  0],
                        [0, -2,   0, -1,   1, -1,   2, -1]
                    ],
                    rightZag: [
                        [1,  0,   1, -1,   0, -1,   0, -2],
                        [2, -1,   1, -1,   1,  0,   0,  0],
                        [0, -2,   0, -1,   1, -1,   1,  0],
                        [0,  0,   1,  0,   1, -1,   2, -1]
                    ],
                    leftZag: [
                        [0,  0,   0, -1,   1, -1,   1, -2],
                        [2, -1,   1, -1,   1, -2,   0, -2],
                        [1, -2,   1, -1,   0, -1,   0,  0],
                        [0, -2,   1, -2,   1, -1,   2, -1]
                    ]
                },
                _shapeFactory: null,

                init: function() {
                    var game = this;
                    game._create();
                    game._setup();
                },
                _create: function() {
                    var game = this;
                    game._createHolder();
                    game._createUI();
                    game._createControls();
                },
                _createHolder: function() {
                    var game = this;
                    this._$gameholder = $('<div class="tetris game-holder"></div>');
                    this._$gameholder.css({
                        position:   'relative',
                        width:      '100%',
                        height:     '100%'
                    });
                    $(document.body).prepend(this._$gameholder);
                    game._$score = $('<div class="score-holder"></div>');
                    game._$gameholder.append(game._$score);
                    game._$start = $('<div class="start-holder"></div>');
                    game._$gameholder.append(game._$start);
                },
                _createUI: function() {
                    var game = this;
                    game._$canvas = $('<canvas class="canvas"></canvas>');
                    game._$canvas.attr({
                        width: $(window).width(),
                        height: $(window).height()
                    });
                    //game._$canvas.css('background-color', this._theme.background);
                    game._$gameholder.prepend(this._$canvas);
                    game._canvas = this._$canvas.get(0);
                    game._ctx = this._canvas.getContext('2d');
                },
                _createControls: function() {
                    //console.log('_createControls');
                },
                _setup: function () {

                }
            };

            var tetris = Object.create(Tetris);
            tetris.init();

        });
    };
}(jQuery, window, document));

$(function(){
    var $demo = $('#tetris-demo').tetris({
        speed: 100,
        theme: 'individual',
        autoplay: true
    });

});