function updateCamera(){this.player.body.x>=this.windowSize[0]&&this.player.body.x<2*this.windowSize[0]?this.game.camera.x=this.windowSize[0]:this.player.body.x>=2*this.windowSize[0]?this.game.camera.x=2*this.windowSize[0]:this.game.camera.x=0,this.player.body.y>=this.windowSize[1]&&this.player.body.y<2*this.windowSize[1]?this.game.camera.y=this.windowSize[1]:this.player.body.y>=2*this.windowSize[1]?this.game.camera.y=2*this.windowSize[1]:this.game.camera.y=0}function damageEnemy(i,e){i.kill(),e.damage(34),"boss"!=e.key||e.alive||clearInterval(this.timerBug)}function killBug(i,e){i.kill()}function damagePlayer(){if(!this.isInvulnerable){this.isInvulnerable=!0;var i=this;setTimeout(function(){i.isInvulnerable=!1},1500),this.die4Fall=!1,this.firstDie4Fall=!0,this.isClimbing=!1,this.player.kill(),this.restartPlayer(),this.lives.length<1?this.gameOver():this.lives.getTop().destroy()}}function restartPlayer(){this.player.x=this.checkpointPosition[0],this.player.y=this.checkpointPosition[1],this.player.revive()}function gameOver(){game.state.start("EndLevel")}function nextLevel(){"active"==this.doors.getChildAt(0).animations.name&&(this.background_sound.destroy(),game.state.start("InterLevel",!0,!1,this.level+1))}function goBackMenu(){$(location).attr("href","../Game/menu.html?url="+url)}