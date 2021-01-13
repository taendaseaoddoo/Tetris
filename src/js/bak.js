var canvas = document.getElementById("canvas");
var context2D = canvas.getContext("2d");
//	context2D.font = "30px 迷你简硬笔行书";
//	context2D.fillText("HTML5 画布，随意画出你想要的！", 30, 30);

// 英国国旗
// 蓝底
context2D.fillStyle ="#01237d";
context2D.fillRect(620,420,600,400);
// 白斜向1
context2D.fillStyle ="#ffffff";
context2D.beginPath();
context2D.moveTo(620,420);
context2D.lineTo(670,420);
context2D.lineTo(1220,780);
context2D.lineTo(1220,820);
context2D.lineTo(1170,820);
context2D.lineTo(620,460);
context2D.closePath();
context2D.fill();
// 白斜向2
context2D.beginPath();
context2D.moveTo(620,820);
context2D.lineTo(620,780);
context2D.lineTo(1170,420);
context2D.lineTo(1220,420);
context2D.lineTo(1220,460);
context2D.lineTo(670,820);
context2D.closePath();
context2D.fill();
// 红斜向1
context2D.fillStyle ="#d0142d";
context2D.beginPath();
context2D.moveTo(620,420);
context2D.lineTo(920,615);
context2D.lineTo(920,640);
context2D.lineTo(620,445);
context2D.closePath();
context2D.fill();
// 红斜向2
context2D.beginPath();
context2D.moveTo(620,820);
context2D.lineTo(920,615);
context2D.lineTo(920,640);
context2D.lineTo(650,820);
context2D.closePath();
context2D.fill();
// 红斜向3
context2D.beginPath();
context2D.moveTo(1220,820);
context2D.lineTo(920,620);
context2D.lineTo(920,595);
context2D.lineTo(1220,795);
context2D.closePath();
context2D.fill();
// 红斜向4
context2D.beginPath();
context2D.moveTo(1220,420);
context2D.lineTo(920,620);
context2D.lineTo(920,595);
context2D.lineTo(1190,420);
context2D.closePath();
context2D.fill();
// 白十字
context2D.fillStyle ="#ffffff";
context2D.fillRect(620,560,600,120);
context2D.fillRect(860,420,120,400);
// 红十字
context2D.fillStyle ="#d0142d";
context2D.fillRect(620,580,600,80);
context2D.fillRect(880,420,80,400);

// 中国国旗
context2D.save();
context2D.translate(620,10);
context2D.fillStyle ="rgb(222,40,16)";
context2D.fillRect(0,0,600,400);
context2D.restore();

context2D.translate(620,10);
//coordinate(context2D,600,400);
drawStar(context2D,60,100,100,53.8,"#ffde00")
drawStar(context2D,20,200,40,0,"#ffde00")
drawStar(context2D,20,200,180,0,"#ffde00")
drawStar(context2D,20,240,80,35,"#ffde00")
drawStar(context2D,20,240,140,-19,"#ffde00")
context2D.restore();

//	var flag = new Image();
//	flag.src = "flag.jpg";
//	flag.onload = function(){
//		context2D.globalAlpha=0.7;
//		context2D.drawImage(flag,0,0,600,400);
//	}

// US国旗
var flagW = 600;
var flagH = 400;
context2D.save();
context2D.translate(-610,820);
context2D.fillStyle ="#ffffff";
context2D.fillRect(0,0,flagW,flagH);

context2D.fillStyle ="#da332a";
var lineH = flagH / 13;
for(var i=0; i<=12; i+=2) {
    context2D.fillRect(0,i*lineH,flagW,lineH);
}
context2D.fillStyle ="#11257b";
context2D.fillRect(0,0,7*lineH*1.3,7*lineH);

for(var i=0,j=0; i<30; i++) {
    if( i % 6 == 0 ) {
        j++;
    }
    drawStar(context2D,0.25*lineH, (i%6+0.7)*lineH+0.54*(i%6)*lineH, (1.48*j-0.92)*lineH, 54, "#ffffff");
}
for(var i=0,j=0; i<20; i++) {
    if( i % 5 == 0 ) {
        j++;
    }
    drawStar(context2D,0.25*lineH, (i%5+1.5)*lineH+0.54*(i%5)*lineH, (1.48*j-0.18)*lineH, 54, "#ffffff");
}
context2D.restore();


// RB国旗
var flag_w = 600;
var flag_h = 400;
var radius = flag_h*0.12;
var rb_flag_x = flag_w/2;
var rb_flag_y = flag_h/2;
var count_x = 3;
var count_y = 2;
context2D.save();
context2D.translate(0,820);
//	context2D.fillStyle ="rgb(240,62,25)";
//	context2D.beginPath();
//	context2D.arc(rb_flag_x,rb_flag_y,120,0,2*Math.PI);
//	context2D.closePath();
//	context2D.fill();
//	context2D.restore();
setInterval(function(){

    if(rb_flag_x>(flag_w-radius)) {
        count_x=-count_x;
    }
    else if(rb_flag_x<radius){
        count_x=-count_x;
    }

    if(rb_flag_y>(flag_h-radius)) {
        count_y=-count_y;
    }
    else if(rb_flag_y<radius){
        count_y=-count_y;
    }
    rb_flag_x+=count_x;
    rb_flag_y+=count_y;

    context2D.restore();

    var gradient = context2D.createRadialGradient(rb_flag_x,rb_flag_y,radius,rb_flag_x+25,rb_flag_y-15,radius/20);
    gradient.addColorStop(0, '#a9270c');
    gradient.addColorStop(0.75, '#f03e19');
    gradient.addColorStop(1, '#f25433');
    //gradient.addColorStop(1, "rgb(240,62,25)");

    context2D.shadowOffsetX = 0;
    context2D.shadowOffsetY = 0;
    context2D.shadowBlur = 0;
    context2D.shadowColor = "#000000";

    context2D.clearRect(0,0,flag_w,flag_h);
    context2D.fillStyle = "rgb(255,255,255)";
    context2D.fillRect(0,0,flag_w,flag_h);

    context2D.shadowOffsetX = -2;
    context2D.shadowOffsetY = 2;
    context2D.shadowBlur = 3;
    context2D.shadowColor = "rgba(0, 0, 0, 0.45)";

    context2D.fillStyle = gradient;
    context2D.beginPath();
    context2D.arc(rb_flag_x,rb_flag_y,radius,0,2*Math.PI);
    context2D.closePath();
    context2D.fill();
    context2D.save();
},8);

// 德国国旗
context2D.save();
context2D.translate(-610,410);
context2D.fillStyle ="rgb(0,0,0)";
context2D.fillRect(0,0,600,400);
context2D.fillStyle ="#fe0000";
context2D.fillRect(0,134,600,134);
context2D.fillStyle ="#ffcc01";
context2D.fillRect(0,266,600,134);


function drawStar(ctx, r, x, y, deg, color) {
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(deg*Math.PI/180);
    ctx.lineWidth = 1;
    ctx.beginPath();
    var dit = Math.PI * 4 / 5;
    var sin = Math.sin(0) * r/* + y*/;
    var cos = Math.cos(0) * r/* + x*/;
    //console.log(0+":"+0);
    ctx.moveTo(cos, sin);
    for (var i = 0; i < 5; i++) {
        var tempDit = dit * i;
        sin = Math.sin(tempDit) * r/* + y*/;
        cos = Math.cos(tempDit) * r/* + x*/;
        ctx.lineTo(cos, sin);
        //console.log(cos+":"+sin+":"+tempDit);
    }
    ctx.closePath();
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
}
function coordinate(ctx,cw,ch) {
    var dx = 50;
    var dy = 50;
    var x = 0;
    var y = 0;
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle ="rgba(0,0,0,0.3)";
    while(y<ch) {
        y+=dy;
        ctx.moveTo(x,y);
        ctx.lineTo(cw,y);
        ctx.closePath();
        ctx.stroke();
    }
    y = 0;
    while(x<cw) {
        x+=dx;
        ctx.moveTo(x,y);
        ctx.lineTo(x,ch);
        ctx.closePath();
        ctx.stroke();
    }
}

(function($, window, document){
}(jQuery, window, document));


(function($, window, document){
    'use strict';

    var Tetris = {

        options: {
            theme: null, // The theme name or a theme object
            blockWidth: 1
        },

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

        // Theme
        _theme: {
        },
        theme: function(newTheme){

            if( typeof newTheme === 'undefined' ) {
                return this.options.theme || this._theme;
            }

            // Setup the theme properly
            if( typeof newTheme === 'string' ) {
                this.options.theme = newTheme;
                this._theme = $.extend(true, {}, tetrisThemes[newTheme]);
            }
            else {
                this.options.theme = null;
                this._theme = newTheme;
            }

            if( typeof this._theme === 'undefined' || this._theme === null ) {
                this._theme = $.extend(true, {}, tetrisThemes['retro']);
                this.options.theme = 'retro';
            }

            if( isNaN(parseInt(this._theme.strokeWidth)) || typeof parseInt(this._theme.strokeWidth) !== 'number' ) {
                this._theme.strokeWidth = 2;
            }

            //Load the image assets
            //this._preloadThemeAssets();

            // if( this._board !== null ) {
            //    if( typeof this._theme.background === 'string' ) {
            //        this._$canvas.css('background-color', this._theme.background);
            //    }
            //    this._board.render();
            // }
        },
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
            console.log(game.theme(game.options.theme));
            game._create();
            //game._setup();
        },
        updateSiezs: function() {
            this._PIXEL_WIDTH = this._canvas.width();
            this._PIXEL_HEIGHT = this._canvas.height();

            this._BLOCK_WIDTH = this.options.blockWidth;
            this._BLOCK_HEIGHT = Math.floor(this._canvas.height() / this._canvas.width() * this._BLOCK_WIDTH);

            this._block_size = Math.floor(this._PIXEL_WIDTH / this._BLOCK_WIDTH);
            this._border_width = 2;

            // Recalculate the pixel width and height so the canvas always has the best possible size
            this._PIXEL_WIDTH = this._block_size * this._BLOCK_WIDTH;
            this._PIXEL_HEIGHT = this._block_size * this._BLOCK_HEIGHT;

            this._$canvas.attr('width', this._PIXEL_WIDTH)
                .attr('height', this._PIXEL_HEIGHT);
        },
        _create: function() {
            var game = this;
            game._createHolder();
            game._createUI();
            game._createControls();
        },
        _setup: function() {
            var game = this;
            game._setupShapeFactory();
            game._setupFilled();
            game._setupInfo();
            game._setupBoard();
            game.drawBlock();
        },
        _createHolder: function() {
            var game = this;
            this._$gameholder = $('<div class="tetris-game-holder"></div>');
            this._$gameholder.css({
                position:   'relative',
                width:      '100%',
                height:     '100%'
            });
            $(document.body).prepend(this._$gameholder);
            game._$score = $('<div class="tetris-score-holder"></div>');
            game._$gameholder.append(game._$score);
            game._$start = $('<div class="tetris-start-holder"></div>');
            game._$gameholder.append(game._$start);
        },
        _createUI: function() {
            var game = this;
            game._$canvas = $('<canvas class="tetris-canvas"></canvas>');
            game._$canvas.css('background-color', this._theme.background);
            game._$gameholder.prepend(this._$canvas);
            game._canvas = this._$canvas.get(0);
            game._ctx = this._canvas.getContext('2d');
        },
        _createControls: function() {
            console.log('_createControls');
        },
        _setupShapeFactory: function() {
            var game = this;
            if(game._shapeFactory !== null) return;

            function Shape(game, orientations, symmetrical, blockType) {
                this.x = 0;
                this.y = 0;
                this.symmetrical = symmetrical;
                this.blockType = blockType;
                this.blockVariation = null;
                this.blocksLen = orientations[0].length;
                this.orientations = orientations;
                this.orientation = 0;
                this.init();
            }
            Shape.prototype.init = function() {
                this.orientation = 0;
                this.x = Math.floor(game._BLOCK_WIDTH / 2) - 1;
                this.y = -1;
            };
            Shape.prototype.rotate = function() {
                var orientation = (this.orientation + (direction === 'left' ? 1 : -1) + 4) % 4;

                //TODO - when past limit - auto shift and remember that too!
                if (!game._checkCollisions(this.x, this.y, this.getBlocks(orientation))) {
                    this.orientation = orientation;
                    game._board.renderChanged = true;
                }
            };
            Shape.prototype.moveRight = function() {
                if (!game._checkCollisions(this.x + 1, this.y, this.getBlocks())) {
                    this.x++;
                    game._board.renderChanged = true;
                }
            };
            Shape.prototype.moveLeft = function() {
                if (!game._checkCollisions(this.x - 1, this.y, this.getBlocks())) {
                    this.x--;
                    game._board.renderChanged = true;
                }
            };
            Shape.prototype.drop = function() {
                if (!game._checkCollisions(this.x, this.y + 1, this.getBlocks())) {
                    this.y++;
                    // Reset the drop count, as we dropped the block sooner
                    game._board.dropCount = -1;
                    game._board.animate();
                    game._board.renderChanged = true;
                }
            };
            Shape.prototype.getBlocks = function() {
                return this.orientations[orientation !== undefined ? orientation : this.orientation];
            };
            Shape.prototype.getBounds = function() {
                var blocks = $.isArray(_blocks) ? _blocks : this.getBlocks(_blocks),
                    i=0, len=blocks.length, minx=999, maxx=-999, miny=999, maxy=-999;
                for (; i<len; i+=2) {
                    if (blocks[i] < minx) { minx = blocks[i]; }
                    if (blocks[i] > maxx) { maxx = blocks[i]; }
                    if (blocks[i+1] < miny) { miny = blocks[i+1]; }
                    if (blocks[i+1] > maxy) { maxy = blocks[i+1]; }
                }
                return {
                    left: minx,
                    right: maxx,
                    top: miny,
                    bottom: maxy,
                    width: maxx - minx,
                    height: maxy - miny
                };
            };
            Shape.prototype.draw = function() {
                var blocks = this.getBlocks(_orientation),
                    x = _x === undefined ? this.x : _x,
                    y = _y === undefined ? this.y : _y,
                    i = 0,
                    index = 0;

                for (; i<this.blocksLen; i += 2) {
                    game._board.drawBlock(x + blocks[i], y + blocks[i+1], this.blockType, this.blockVariation, index, this.orientation, true);
                    index++;
                }
            };

            this._shapeFactory = {
                line:       new Shape(game, game._shapes.line, false, 'line'),
                square:     new Shape(game, game._shapes.square, false, 'square'),
                arrow:      new Shape(game, game._shapes.arrow, false, 'arrow'),
                leftHook:   new Shape(game, game._shapes.leftHook, false, 'leftHook'),
                rightHook:  new Shape(game, game._shapes.rightHook, false, 'rightHook'),
                leftZag:    new Shape(game, game._shapes.leftZag, false, 'leftZag'),
                rightZag:   new Shape(game, game._shapes.rightZag, false, 'rightZag')
            }
        },
        _setupFilled: function() {
            console.log('_setupFilled');
        },
        _setupInfo: function() {
            console.log('_setupInfo');
        },
        _setupBoard: function() {
            console.log('_setupBoard');
        },
        _drawBackground: function() {
            var borderWidth = this._theme.strokeWidth;
            var borderDistance = Math.round(.23);
            var squareDistance = Math.round(.3);
            this._ctx.globalAlpha = 1.0;
            this._ctx.fillStyle = this._theme.backgroundGrid;
            for( var x=0; x<this._BLOCK_WIDTH; x++ ) {
                for( var y=0; y<this._BLOCK_HEIGHT; y++ ) {
                    var cx = x * this._block_size;
                    var cy = y * this._block_size;

                    this._ctx.fillRect(cx+borderWidth, cy+borderWidth, this._block_size-borderWidth*2, this._block_size-borderWidth*2);
                }
            }
            this._ctx.globalAlpha = 1.0;
        },
        drawBlock: function(x, y, blockType, blockVariation, blockIndex, blockRotation, falling) {
            var game = this;
            x = x * game._block_size;
            y = y * game._block_size;

            falling = typeof falling === 'boolean' ? falling : false;
            var borderWidth = game._theme.strokeWidth;
            var borderDistance = Math.round(game._block_size*0.23);
            var squareDistance = Math.round(game._block_size*0.30);

            var color = new Image('../images/block.png');

            var coords = {
                x:0,
                y:0,
                w:100,
                h:100
            };
            game._ctx.globalAlpha = 1.0;
            game._ctx.save();
            game._ctx.translate(x, y);
            game._ctx.translate(game._block_size/2, game._block_size/2);
            game._ctx.rotate(-Math.PI/2 * blockRotation);
            game._ctx.drawImage(color, coords.x, coords.y, coords.w, coords.h, -game._block_size/2, -game._block_size/2, game._block_size, game._block_size);
            game._ctx.restore();
        },
        start: function() {
            this._doStart();
        },
        restart: function() {
            this._doStart();
        },
        _doStart: function() {
        }

        //
        //canvas: document.getElementById('J-game-panel'),
        //context: null,
        //getContext: function() {
        //    this.context = this.canvas.getContext('2d');
        //    return this;
        //},
        //setSize: function() {
        //    this.canvas.width = window.innerWidth;
        //    this.canvas.height = window.innerHeight;
        //    return this;
        //},
        //
        //init: function() {
        //    this.getContext().setSize();
        //    return this;
        //},
        //drawStar: function(r, x, y, deg, color) {
        //    var ctx = this.context;
        //    ctx.save();
        //    ctx.translate(x,y);
        //    ctx.rotate(deg*Math.PI/180);
        //    ctx.lineWidth = 1;
        //    ctx.beginPath();
        //    var dit = Math.PI * 4 / 5;
        //    var sin = Math.sin(0) * r/* + y*/;
        //    var cos = Math.cos(0) * r/* + x*/;
        //    //console.log(0+":"+0);
        //    ctx.moveTo(cos, sin);
        //    for (var i = 0; i < 5; i++) {
        //        var tempDit = dit * i;
        //        sin = Math.sin(tempDit) * r/* + y*/;
        //        cos = Math.cos(tempDit) * r/* + x*/;
        //        ctx.lineTo(cos, sin);
        //        //console.log(cos+":"+sin+":"+tempDit);
        //    }
        //    ctx.closePath();
        //    ctx.strokeStyle = color;
        //    ctx.fillStyle = color;
        //    ctx.fill();
        //    ctx.restore();
        //},
        //drawFlag: function(code) {
        //    var ctx = this.context;
        //    var w = this.canvas.width;
        //    var h = this.canvas.height;
        //
        //    switch (code){
        //        case 'FR':
        //            // 法国国旗
        //            ctx.beginPath();
        //            ctx.fillStyle ="#002496";
        //            ctx.fillRect(0,0,w/3,h);
        //            ctx.fillStyle ="#ffffff";
        //            ctx.fillRect(w/3,0,w/3,h);
        //            ctx.fillStyle ="#ed2839";
        //            ctx.fillRect(w*2/3,0,w/3,h);
        //            ctx.closePath();
        //            break;
        //        case 'CZ':
        //            // 捷克国旗
        //            ctx.beginPath();
        //            ctx.fillStyle ="#ffffff";
        //            ctx.fillRect(0,0,w,w/2);
        //            ctx.fillStyle ="#be0026";
        //            ctx.fillRect(0,h/2,w,w/2);
        //            ctx.beginPath();
        //            ctx.moveTo(0,0);
        //            ctx.lineTo(0,h);
        //            ctx.lineTo(w/2,h/2);
        //            ctx.closePath();
        //            ctx.fillStyle ="#003a84";
        //            ctx.fill();
        //            break;
        //        case 'CN':
        //            // 中国国旗
        //            ctx.save();
        //            ctx.translate(0,0);
        //            ctx.fillStyle ="rgb(222,40,16)";
        //            ctx.fillRect(0,0,w,h);
        //            ctx.restore();
        //            ctx.translate(0,0);
        //            this.drawStar(w/10,w/6,w/6,53.8,"#ffde00");
        //            this.drawStar(w/30,w/3,w/15,0,"#ffde00");
        //            this.drawStar(w/30,w/3,w *.3,0,"#ffde00");
        //            this.drawStar(w/30,w*.4,w*2/15,35,"#ffde00");
        //            this.drawStar(w/30,w*.4,w*7/30,-19,"#ffde00");
        //            ctx.restore();
        //            break;
        //    }
        //}
    };

    $(function(){
        var tetris = Object.create(Tetris);
        tetris.init();
    })

}(jQuery, window, document));