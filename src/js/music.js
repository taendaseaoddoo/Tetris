define(['jquery2'], function ($) {
    function Music(config) {
        this.config = config;
        this.audioEl = null;
        this.audioObj = null;
        this.currentId = -1;
        this.holder = 'body';
        this.paths = '';
        this.playList = null;
        this.isRandom = false;
    }
    Music.prototype = {
        init: function () {
            this.holder = this.config.holder || this.holder;
            this.isRandom = this.config.random || this.isRandom;
            this.paths = this.config.paths || this.paths;
            this.initPlayList(this.config.playlist);
            this.initAudio();
        },
        initPlayList: function (playlist) {
            var playlistType = typeof playlist;
            if (playlistType === 'undefined') {
                console.error('music list error!');
            }
            else {
                this.playList = [];
                this.currentId = 0;
                playlistType === 'string' ? this.playList.push(playlist) : this.playList = playlist;
            }
        },
        initAudio: function () {
            this.audioEl = $('<audio>');
            this.audioEl.attr('id', 'gameBgm').addClass('bgm-holder');
            this.audioObj = this.audioEl[0];
            this.audioEl.appendTo(this.holder).hide();
            this.bindEvent();
        },
        bindEvent: function () {
            var thisMusic = this;
            thisMusic.audioEl.on('ended', function () {
                thisMusic.playNext();
            });
        },
        randomId: function () {
            var listNumb = this.playList.length;
            this.currentId = Math.floor(Math.random() * listNumb);
            // console.clear();
            // console.log('playlist length: %d', this.playList.length);
            // console.log('current music ID: %d', this.currentId);
        },
        stop: function () {
            if(!this.audioObj.paused) {
                this.audioObj.pause();
            }
        },
        play: function () {
            if(this.isRandom) this.randomId();
            this.stop();
            this.audioObj.src = this.paths + this.playList[this.currentId];
            this.audioObj.play();
        },
        playNext: function() {
            if (this.isRandom) {
                this.randomId();
            }
            else {
                var listMaxNumb = this.playList.length - 1;
                this.currentId = (this.currentId >= listMaxNumb) ? 0 : this.currentId + 1;
            }
            this.play();
        }
    };
    return Music;
});