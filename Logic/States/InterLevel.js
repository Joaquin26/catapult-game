InterLevel={init:function(e){this.game.stage.backgroundColor="#000000",this.level=e,this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,this.scale.pageAlignHorizontally=!1,this.scale.pageAlignVertically=!1,this.game.physics.startSystem(Phaser.Physics.ARCADE)},create:function(){this.level>4&&this.startLevel(),this.showLevelTarget(),setTimeout(this.startLevel.bind(this),2e3)},showLevelTarget:function(){if(!(this.level>4)){this.pickMessage=this.game.add.text(870,500,"NIVEL "+this.level,{font:"50px Arial",fill:"#ffffff"})}},startLevel:function(){switch(this.level){case 1:game.state.start("Level1");break;case 2:game.state.start("Level2");break;case 3:game.state.start("Level3");break;case 4:game.state.start("Level4");break;default:game.state.start("EndLevel")}}};