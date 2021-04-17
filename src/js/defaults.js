define({
    music: {
        holder: '',
        random: false,
        paths: '',
        playlist: []
    },
    tetris: {
        autoplay: false, // Let a bot play the game
        autoplayRestart: true, // Restart the game automatically once a bot loses
        showFieldOnStart: true, // Show a bunch of random blocks on the start screen (it looks nice)
        theme: {
            background: '#000000',
            primary: '#eee',
            secondary: '#eee',
            stroke: '#eee',
            strokeWidth: 2
        }, // The theme name or a theme object
        blockWidth: 10, // How many blocks wide the field is (The standard is 10 blocks)
        autoBlockWidth: false, // The blockWidth is dinamically calculated based on the autoBlockSize. Disabled blockWidth. Useful for responsive backgrounds
        autoBlockSize: 24, // The max size of a block for autowidth mode
        difficulty: 'normal', // Difficulty (normal|nice|evil).
        speed: 20, // The speed of the game. The higher, the faster the pieces go.
        asdwKeys: true, // Enable ASDW keys

        // Copy
        playText: '开始玩俄罗斯方块！',
        playButtonText: '开始',
        gameOverText: '游戏结束',
        restartButtonText: '再玩一次',
        scoreText: '得分',

        // Basic Callbacks
        onStart: function(){},
        onRestart: function(){},
        onGameOver: function(score){},

        // When a block is placed
        onPlaced: function(){},
        // When a line is made. Returns the number of lines, score assigned and total score
        onLine: function(lines, scoreIncrement, score){}
    }
});