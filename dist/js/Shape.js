define(['jquery'], function ($) {
    function Shape(game, orientations, symmetrical, blockType) {
        this.x = 0;
        this.y = 0;
        this.game = game;
        this.symmetrical = symmetrical;
        this.blockType = blockType;
        this.blockVariation = null;
        this.blocksLen = orientations[0].length;
        this.orientations = orientations;
        this.orientation = 0;
        this.init();
    }
    Shape.prototype = {
        init: function() {
            this.orientation = 0;
            this.x = Math.floor(this.game._BLOCK_WIDTH / 2) - 1;
            this.y = -1;
        },
        rotate: function(direction) {
            var orientation = (this.orientation + (direction === 'left' ? 1 : -1) + 4) % 4;

            //TODO - when past limit - auto shift and remember that too!
            if (!this.game._checkCollisions(this.x, this.y, this.getBlocks(orientation))) {
                this.orientation = orientation;
                this.game._board.renderChanged = true;
            }
        },
        moveRight: function() {
            if (!this.game._checkCollisions(this.x + 1, this.y, this.getBlocks())) {
                this.x++;
                this.game._board.renderChanged = true;
            }
        },
        moveLeft: function() {
            if (!this.game._checkCollisions(this.x - 1, this.y, this.getBlocks())) {
                this.x--;
                this.game._board.renderChanged = true;
            }
        },
        drop: function() {
            if (!this.game._checkCollisions(this.x, this.y + 1, this.getBlocks())) {
                this.y++;
                // Reset the drop count, as we dropped the block sooner
                this.game._board.dropCount = -1;
                this.game._board.animate();
                this.game._board.renderChanged = true;
            }
        },
        getBlocks: function(orientation) { // optional param
            return this.orientations[orientation !== undefined ? orientation : this.orientation];
        },
        draw: function(_x, _y, _orientation) {
            var blocks = this.getBlocks(_orientation),
                x = _x === undefined ? this.x : _x,
                y = _y === undefined ? this.y : _y,
                i = 0,
                index = 0;

            for (; i<this.blocksLen; i += 2) {
                this.game._board.drawBlock(x + blocks[i], y + blocks[i+1], this.blockType, this.blockVariation, index, this.orientation, true);
                index++;
            }
        },
        getBounds: function(_blocks) { // _blocks can be an array of blocks, an orientation index, or undefined
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
        }
    };
    return Shape;
});

