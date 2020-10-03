//#region GAME DEVELOPMENT
game = new Phaser.Game(1920, 1080, Phaser.AUTO);

game.state.add('Boot', BootState);
game.state.add('Preload', PreloadState);
game.state.add('InterLevel', InterLevel);
game.state.add('Level1', Level1);
game.state.add('Level2', Level2);
game.state.add('Level3', Level3);
game.state.add('Level4', Level4);
game.state.add('Level5', Level5);
game.state.add('EndLevel', EndLevelState);

game.state.start('Boot');