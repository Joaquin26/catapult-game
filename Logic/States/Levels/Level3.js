Level3={init:function(){this.level=3,this.isClimbing=!1,this.loadVariables=loadVariables.bind(this),this.loadVariables("STOPLEFT",[5340,1540]),this.loadSounds=loadSounds.bind(this),this.loadPlayer=loadPlayer.bind(this),this.loadGroups=loadGroups.bind(this),this.loadLives=loadLives.bind(this),this.loadPotions=loadPotions.bind(this),this.loadWeapons=loadWeapons.bind(this),this.loadSaws=loadSaws.bind(this),this.loadSpikes=loadSpikes.bind(this),this.loadEnemy1=loadEnemy1.bind(this),this.loadDoors=loadDoors.bind(this),this.loadLevers=loadLevers.bind(this),this.loadStairs=loadStairs.bind(this),this.loadTiles=loadTiles.bind(this),this.loadBullets=loadBullets.bind(this),this.loadLavas=loadLavas.bind(this),this.loadCheckpoints=loadCheckpoints.bind(this),this.pressLever=pressLever.bind(this),this.pickUpPotion=pickUpPotion.bind(this),this.pickUpWeapon=pickUpWeapon.bind(this),this.killBullet=killBullet.bind(this),this.saveCheckpoint=saveCheckpoint.bind(this),this.updateCamera=updateCamera.bind(this),this.damageEnemy=damageEnemy.bind(this),this.damagePlayer=damagePlayer.bind(this),this.restartPlayer=restartPlayer.bind(this),this.gameOver=gameOver.bind(this),this.nextLevel=nextLevel.bind(this)},create:function(){this.timer=this.game.time.create(!1),this.loadSounds(),this.player=this.game.add.sprite(5340,1540,"player"),this.game.physics.enable([this.player],Phaser.Physics.ARCADE),this.game.physics.arcade.gravity.y=240,this.loadGroups(),this.loadTiles("level3"),this.loadPlayer(),this.loadLives(),this.loadPotions("level3"),this.loadWeapons("level3"),this.loadCheckpoints(2300,460),this.loadSaws("level3"),this.loadSpikes("level3"),this.loadEnemy1("level3"),this.loadDoors("level3"),this.loadLevers("level3"),this.loadStairs("level3"),this.loadLavas("level3"),this.game.world.bringToTop(this.doors),this.game.world.bringToTop(this.levers),this.game.world.bringToTop(this.stairs),this.game.world.bringToTop(this.player),this.game.world.bringToTop(this.enemies),this.game.world.bringToTop(this.checkpoints),this.loadLevel(),this.loadBullets(),this.loadPauseUI()},update:function(){this.updateCollisions(),this.player.scale.set(.8*this.direction,.8),this.enemies.getChildAt(0).scale.set(.8*this.enemyDirection,.8),this.player.body.allowGravity=!0,this.firstDie4Fall&&(this.updateEnemyMovement(),1!=this.powerUp&&this.timer.events.add(120*Phaser.Timer.SECOND,this.back2Normal,this),this.updateCamera(),this.updatePlayerMovement(),this.player.body.velocity.y>500&&(this.die4Fall=!0),0==this.player.body.velocity.y&&this.die4Fall&&this.firstDie4Fall&&(this.player.body.velocity.x=0,this.firstDie4Fall=!1,this.fall_sound.play(),this.player.play("fallDie"),setTimeout(this.damagePlayer.bind(this),800)),this.holdingWeapon&&"B"==cursor&&(this.shot_sound.play(),this.player.play("shoot"),1==this.direction?this.bullet.fireAngle=0:this.bullet.fireAngle=180,this.bullet.trackSprite(this.player,100*this.direction,100),this.bullet.fire()))},unpause:function(){if(this.game.paused)if(event.x>x1&&event.x<x2&&event.y>y1&&event.y<y2){var i=event.x-x1,t=event.y-y1,s=Math.floor(i)+3*Math.floor(t/107);this.choiceLabel.text="You chose menu item: "+["jugar","opciones","salir"][s]}else{for(var e=0;e<this.menu.countLiving();e++)this.menu[e].destroy();this.choiceLabel.destroy(),this.game.paused=!1}},pauseMenu:function(){this.game.paused=!0,this.menu.add(new Phaser.Sprite(405,107,"m_jugar")),this.menu.add(new Phaser.Sprite(405,107,"m_opciones")),this.menu.add(new Phaser.Sprite(405,107,"m_salir")),this.choiceLabel=this.game.add.text(this.windowSize[0]/2,this.windowSize[1]-150,"Click outside menu to continue",{font:"30px Arial",fill:"#fff"}),this.choiceLabel.anchor.setTo(.5,.5)},loadPauseUI:function(){this.pauseLabel=this.game.add.text(this.windowSize[0]-100,20,"Volver",{font:"24px Arial",fill:"#ffffff"}),this.pauseLabel.fixedToCamera=!0,this.pauseLabel.inputEnabled=!0,this.pauseLabel.events.onInputUp.add(goBackMenu)},loadLevel:function(){this.map=this.game.add.tilemap("map_3"),this.map.addTilesetImage("tiles_spritesheet","gameTiles"),this.backgroundLayer=this.map.createLayer("backgroundLayer"),this.foregroundLayer=this.map.createLayer("foregroundLayer"),this.game.world.sendToBack(this.backgroundLayer),this.game.world.bringToTop(this.foregroundLayer),this.map.setCollisionBetween(1,38,!0,"backgroundLayer"),this.backgroundLayer.resizeWorld(),this.game.world.bringToTop(this.lives),this.player.body.collideWorldBounds=!0,this.player.checkWorldBounds=!0},updateCollisions:function(){this.game.physics.arcade.overlap(this.player,this.enemies.getChildAt(0),this.damagePlayer,null,this),this.game.physics.arcade.overlap(this.player,this.weapons,this.pickUpWeapon,null,this),this.game.physics.arcade.overlap(this.player,this.potions,this.pickUpPotion,null,this),this.firstCheck&&this.game.physics.arcade.overlap(this.player,this.checkpoints,this.saveCheckpoint.bind(this),null,this),this.game.physics.arcade.collide(this.player,this.tiles),this.game.physics.arcade.overlap(this.player,this.doors.getChildAt(0),this.nextLevel,null,this),this.game.physics.arcade.collide(this.bullet.bullets,this.tiles,this.killBullet,null,this),this.game.physics.arcade.collide(this.bullet.bullets,this.enemies,this.damageEnemy,null,this),this.saws.forEachAlive(this.collideElements,this),this.saws.forEachAlive(this.collideSaws,this),this.game.physics.arcade.overlap(this.levers.getChildAt(0),this.player,this.pressLever,null,this),this.game.physics.arcade.collide(this.player,this.spikes,this.damagePlayer,null,this),this.game.physics.arcade.collide(this.player,this.lavas,this.damagePlayer,null,this)},collideSaws:function(i){this.game.physics.arcade.collide(this.player,i,this.damagePlayer.bind(this))},updateEnemyMovement:function(){this.enemies.getChildAt(0).body.y<this.player.y+this.player.body.height/2&&this.enemies.getChildAt(0).body.y+this.enemies.getChildAt(0).body.height/2>this.player.body.y&&(this.enemies.getChildAt(0).body.x<this.player.x?this.enemyDirection=1:this.enemies.getChildAt(0).body.x>this.player.x&&(this.enemyDirection=-1)),this.enemies.getChildAt(0).body.x>=4e3?this.enemyDirection=-1:this.enemies.getChildAt(0).body.x<=2300&&(this.enemyDirection=1),this.enemies.getChildAt(0).body.x<this.player.x&&this.enemies.getChildAt(0).body.x>=3070?(this.enemies.getChildAt(0).body.velocity.x=0,this.enemyDirection=1,this.enemies.getChildAt(0).play("stop")):this.enemies.getChildAt(0).body.velocity.x=200*this.enemyDirection},updatePlayerMovement:function(){switch(this.updatePlayerMovementStart(),this.updatePlayerMovementStop(),cursor){case"X":this.lastActionX=!0;break;case"STOPX":this.lastActionX=!1;break;case"Y":this.isJumping=!0,this.lastActionY=!0;break;case"STOPY":this.isJumping=!1,this.lastActionY=!1}this.updatePlayerMovementStairs()},updatePlayerMovementStart:function(){"LEFT"!=cursor&&"LEFT"!=this.lastAction||(this.lastAction="LEFT",this.direction=-1),"RIGHT"!=cursor&&"RIGHT"!=this.lastAction||(this.lastAction="RIGHT",this.direction=1),"RIGHT"!=cursor&&"RIGHT"!=this.lastAction&&"LEFT"!=cursor&&"LEFT"!=this.lastAction||this.isClimbing||(0==this.player.body.velocity.y?"X"==cursor||this.lastActionX?(this.lastActionX=!0,this.player.body.velocity.x=this.stepsX[0]*this.direction,this.holdingWeapon?this.player.play("slowWeapon"):this.player.play("slow")):"Y"!=cursor||this.lastActionY?(this.player.body.velocity.x=this.stepsX[2]*this.direction,this.holdingWeapon?this.player.play("walkWeapon"):this.player.play("walk")):(this.lastActionY=!0,this.player.body.velocity.x=1.2*this.stepsX[1]*this.powerUp*this.direction,this.player.body.velocity.y=this.stepsY[1]*this.powerUp,this.jump_sound.play(),this.player.play("jumpSide")):this.player.body.velocity.y>159?this.player.play("fallJumpSide"):(this.player.body.velocity.x=this.stepsX[1]*this.direction,"jumpSide"!=this.player.animations.name&&(this.holdingWeapon?this.player.play("walkWeapon"):this.player.play("walk"))))},updatePlayerMovementStop:function(){!this.firstDie4Fall||"STOPRIGHT"!=cursor&&"STOPRIGHT"!=this.lastAction||(this.lastAction="STOPRIGHT",this.direction=1),!this.firstDie4Fall||"STOPLEFT"!=cursor&&"STOPLEFT"!=this.lastAction||(this.lastAction="STOPLEFT",this.direction=-1),!this.firstDie4Fall||"STOPRIGHT"!=cursor&&"STOPRIGHT"!=this.lastAction&&"STOPLEFT"!=cursor&&"STOPLEFT"!=this.lastAction||(this.player.body.velocity.x=0,0==this.player.body.velocity.y?"Y"!=cursor||this.lastActionY?this.holdingWeapon?this.player.play("stopWeapon"):this.player.play("stop"):(this.lastActionY=!0,this.player.body.velocity.y=this.stepsY[3],this.player.play("jump"),this.jump_sound.play()):this.player.body.velocity.y>159?this.player.play("fallJump"):"jump"!=this.player.animations.name&&(this.holdingWeapon?this.player.play("stopWeapon"):this.player.play("stop")))},updatePlayerMovementStairs:function(){for(var i=!1,t=0;t<this.stairs.countLiving();t++)this.game.physics.arcade.overlap(this.player,this.stairs.getChildAt(t))&&(this.stairs.getChildAt(t).animations.frame<2&&this.player.body.x>this.stairs.getChildAt(t).body.x||this.stairs.getChildAt(t).animations.frame>1&&this.player.body.x+this.player.body.width<this.stairs.getChildAt(t).body.x+this.stairs.getChildAt(t).body.width)&&(i=!0,this.stairs.getChildAt(t).animations.frame>1?(this.direction=1,this.lastAction="STOPRIGHT"):(this.direction=-1,this.lastAction="STOPLEFT"),this.player.body.allowGravity=!1,this.player.body.y+this.player.body.height<this.stairs.getChildAt(t).body.y+38?(this.isClimbing=!1,"UP"==cursor?(this.player.body.velocity.y=-40,this.player.play("climbEndUP")):"DOWN"==cursor?(this.player.body.velocity.y=100,this.player.play("climbStartUP")):(this.player.body.velocity.y=0,this.player.play("climbStairStop"))):this.player.body.y+this.player.body.height>=this.stairs.getChildAt(t).body.y+this.stairs.getChildAt(t).body.height?(this.isClimbing=!1,"UP"==cursor?(this.player.play("climbStartDown"),this.player.body.velocity.y=-240):"DOWN"==cursor&&(this.player.body.velocity.y=240,this.player.play("climbEndDown"))):(this.isClimbing=!0,this.player.body.velocity.y=0,"UP"==cursor||"DOWN"==cursor?(this.player.play("climbStair"),"UP"==cursor&&(this.player.body.velocity.y=-100),"DOWN"==cursor&&(this.player.body.velocity.y=100)):this.player.play("climbStairStop")));i||(this.isClimbing=!1)},collideElements:function(i){this.game.physics.arcade.collide(i,this.tiles)},back2Normal:function(){this.powerUp=1},renderGroup:function(i){this.game.debug.body(i)},render:function(){}};