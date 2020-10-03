PreloadState = {
  preload: function () {
    //Clock
    this.load.spritesheet(this.reloj);
    this.reloj = this.add.sprite(
      this.game.world.centerX - 100,
      this.game.world.centerY - 75,
      "reloj"
    );
    this.reloj.scale.setTo(0.2);
    this.reloj.animations.add("move", [0, 1, 2], 10, true);
    this.reloj.animations.play("move");
    //Sprites
    this.load.spritesheet(
      "player",
      "../Assets/sprites/PersonajeSpriteCLL.png",
      192,
      240,
      270
    );
    this.load.spritesheet("saw", "../Assets/traps/saw_mini.png", 64, 31, 4);
    this.load.spritesheet("spike", "../Assets/traps/spike.png", 81, 108, 1);
    this.load.spritesheet("lava", "../Assets/traps/lava.png", 1050, 295, 3);
    this.load.spritesheet("lava_long", "../Assets/traps/lava_long.png", 1248, 295, 3);
    this.load.spritesheet("weapon", "../Assets/tools/weapon.png", 311, 100, 1);
    this.load.spritesheet("bullet", "../Assets/tools/bullet.png", 311, 100, 1);
    this.load.spritesheet("stair", "../Assets/objects/stair.png", 73, 555, 4);
    this.load.spritesheet("door", "../Assets/objects/door.png", 96, 360, 2);
    this.load.spritesheet("lever", "../Assets/objects/lever.png", 97, 89, 2);
    this.load.spritesheet("enemy1", "../Assets/enemies/jefe.png", 192, 240, 5);
    this.load.spritesheet("boss", "../Assets/enemies/boss_sprite_mouth.png", 192, 240, 3);
    this.load.spritesheet("bug", "../Assets/enemies/bug.png", 128, 120, 5);
    this.load.spritesheet("heart", "../Assets/objects/heart.png", 76, 64, 1);
    this.load.spritesheet("checkpoint", "../Assets/objects/checkpoint_2.png", 128, 200, 8);
    this.load.spritesheet("potion", "../Assets/objects/potion.png", 28, 39, 1);
    this.load.spritesheet("girl", "../Assets/sprites/egg_girl.png", 192, 240, 5);
    //Menu
    this.load.spritesheet("m_jugar", "../Assets/menu/JUGAR.png", 405, 107, 1);
    this.load.spritesheet("m_opciones", "../Assets/menu/OPCIONES.png", 405, 107, 1);
    this.load.spritesheet("m_salir", "../Assets/menu/SALIR.png", 405, 107, 1);
    this.load.image('GameOver', '../Assets/game/over.png', 300, 200, 1);


    //BOMBERMAN



     this.load.image('bg', '../Assets/img/jugador.png');
  this.load.image('wall', '../Assets/img/wall.png');
   this.load.image('wall2', '../Assets/img/wall2.png');

   this.load.image('enemigo',  '../Assets/img/enemigo.png');
   this.load.image('ship',  '../Assets/img/jugador.png');
      this.load.image('ship2',  '../Assets/img/jugador2.png');
         this.load.image('ship3',  '../Assets/img/jugador3.png');
            this.load.image('ship4',  '../Assets/img/jugador4.png');
   this.load.image('vida',  '../Assets/img/vida.png');
      this.load.image('bomba',  '../Assets/img/bomba.png');
   this.load.image('explosion',  '../Assets/img/explosion.png');
    this.load.image('poderllama',  '../Assets/img/poderllama.png');
      this.load.image('poderbomba',  '../Assets/img/poderbomba.png');
   this.load.image('poderpatin',  '../Assets/img/poderpatin.png');
    this.load.image('podervida',  '../Assets/img/podervida.png');
  this.load.image('kills',  '../Assets/img/kills.png');
 this.load.image('mina',  '../Assets/img/mina.png');


this.load.image('wall3', '../Assets/img/wall3.png');
this.load.image('wallkill','../Assets/img/wallkill.png')
this.load.image('pisor1', '../Assets/img/pisor1.png');
this.load.image('pisor2', '../Assets/img/pisor2.png');
 this.load.image('pisomov', '../Assets/img/pisomov.png');



           this.load.image('bg', '../Assets/img/jugador.png');
           
           this.load.image('menupause', '../Assets/img/menupause.png');
             this.load.image('menupause2', '../Assets/img/menupause2.png');
          this.load.image('menupause3', '../Assets/img/menupause3.png');
            this.load.image('votacionmenu', '../Assets/img/votacionmenu.png');

                this.load.image('votacionmenu2', '../Assets/img/votacionmenu2P.png');

                    this.load.image('votacionmenu3', '../Assets/img/votacionmenu3P.png');


             this.load.image('votacionmenuP1', '../Assets/img/votacionmenuP1.png');
               this.load.image('votacionmenuP2', '../Assets/img/votacionmenuP2.png');
                this.load.image('votacionmenuP3', '../Assets/img/votacionmenuP3.png');
            this.load.image('votacionmenuP4', '../Assets/img/votacionmenuP4.png');
            
              this.load.image('poderguante', '../Assets/img/poderguante.png');
               this.load.image('seleccion3', '../Assets/img/seleccioncuad.png');



    //Tilemaps
    this.game.load.image("gameTiles", "../Assets/maps/tileMaps.png");
    this.game.load.tilemap(
      "map",
      "../Assets/data/maps/map_1.json",
      null,
      Phaser.Tilemap.TILED_JSON
    );
    this.game.load.tilemap(
      "map_2",
      "../Assets/data/maps/map_2.json",
      null,
      Phaser.Tilemap.TILED_JSON
    );
    this.game.load.tilemap(
      "map_3",
      "../Assets/data/maps/map_3.json",
      null,
      Phaser.Tilemap.TILED_JSON
    );
    this.game.load.tilemap(
      "map_4",
      "../Assets/data/maps/map_4.json",
      null,
      Phaser.Tilemap.TILED_JSON
    );
    this.game.load.tilemap(
      "map_5",
      "../Assets/data/maps/map_5.json",
      null,
      Phaser.Tilemap.TILED_JSON
    );
    //Sound
    this.load.audio('sfx_jump', '../Assets/music/jump_sfx.mp3');
    this.load.audio('sfx_walk', '../Assets/music/step.wav');
    this.load.audio('sfx_die', '../Assets/music/die.wav');
    this.load.audio('sfx_shot', '../Assets/music/shot_sfx.mp3');
    this.load.audio('sfx_fall', '../Assets/music/fall_sfx.mp3');
    this.load.audio('sfx_flag', '../Assets/music/flag_sfx.mp3');
    this.load.audio('sfx_back', '../Assets/music/background_sfx.mp3');
    this.load.audio('sfx_pick_weapon', '../Assets/music/pick_weapon_Sfx.mp3');
    this.load.audio('sfx_lever', '../Assets/music/lever_sfx.mp3');
    this.load.audio('sfx_door', '../Assets/music/door_sfx.mp3');
    //Objects
    this.load.text("collisionData", "../Assets/data/collisions.json");
    this.load.text("sawData", "../Assets/data/saw.json");
    this.load.text("lavaData", "../Assets/data/lava.json");
    this.load.text("stairData", "../Assets/data/stair.json");
    this.load.text("spikeData", "../Assets/data/spike.json");
    this.load.text("weaponData", "../Assets/data/weapon.json");
    this.load.text("doorData", "../Assets/data/door.json");
    this.load.text("leverData", "../Assets/data/lever.json");
    this.load.text("enemyData", "../Assets/data/enemy.json");
    this.load.text("bossData", "../Assets/data/boss.json");
    this.load.text("potionData", "../Assets/data/potion.json");
  },
  create: function () {
    this.state.start("InterLevel", true, false, 1);
  }
};