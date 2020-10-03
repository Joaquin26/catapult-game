
var bombasFull;
var bombasFull2;
var bombasFull3;
var bombasFull4
var myShip;
var myShip2;
var myShip3;
var myShip4;
var bomba;
var bombas;
var bombas2;
var bombas3;
var bombas4;
var limpiarLlama;
var limpiarLlama2;
var limpiarLlama3;
var limpiarLlama4;

var countExplosion;
var countExplosion2;
var countExplosion3;
var countExplosion4;
var explosionUp;
var explosionDown;
var explosionLeft;
var explosionRight;

var explosionUp2;
var explosionDown2;
var explosionLeft2;
var explosionRight2;

var explosionUp3;
var explosionDown3;
var explosionLeft3;
var explosionRight3;

var explosionUp4;
var explosionDown4;
var explosionLeft4;
var explosionRight4;
Level1 = {

  init: function () {


    this.level = 1;
    this.isClimbing = false;
    this.loadVariables = loadVariables.bind(this);
    // LOAD FUNCTIONS
    this.loadVariables("STOPRIGHT", [0, 108]);
    this.loadSounds = loadSounds.bind(this);
    this.loadPlayer = loadPlayer.bind(this);
    this.loadGroups = loadGroups.bind(this);
    this.loadLives = loadLives.bind(this);
    this.loadPotions = loadPotions.bind(this);
    this.loadWeapons = loadWeapons.bind(this);
    this.loadSaws = loadSaws.bind(this);
    this.loadSpikes = loadSpikes.bind(this);
    this.loadEnemy1 = loadEnemy1.bind(this);
    this.loadDoors = loadDoors.bind(this);
    this.loadLevers = loadLevers.bind(this);
    this.loadStairs = loadStairs.bind(this);
    this.loadTiles = loadTiles.bind(this);
    this.loadBullets = loadBullets.bind(this);
    this.loadCheckpoints = loadCheckpoints.bind(this);
    // ACTIONS FUNCTIONS
    this.pressLever = pressLever.bind(this);
    this.pickUpPotion = pickUpPotion.bind(this);
    this.pickUpWeapon = pickUpWeapon.bind(this);
    this.killBullet = killBullet.bind(this);
    this.saveCheckpoint = saveCheckpoint.bind(this);
    // UPDATE FUNCTIONS
    this.updateCamera = updateCamera.bind(this);
    this.damageEnemy = damageEnemy.bind(this);
    this.damagePlayer = damagePlayer.bind(this);
    this.restartPlayer = restartPlayer.bind(this);
    this.gameOver = gameOver.bind(this);
    this.nextLevel = nextLevel.bind(this);


    //JUEGO BOMBERMAN

     this.colocarBomba = 0;
   // this.designer = this.designerData;
   // this.jugadoresTotal =  this.jugadoresData;
  //this.gamemode = this.gamemodeData;

    this.designer = 0;
    this.jugadoresTotal =  1;
     this.gamemode = 0;

    this.cooldownP1 = 0;
    this.cooldownP2 = 0;
    this.cooldownP3 = 0;
    this.cooldownP4 = 0;

      this.activarEsperaInt = 0;

     this.cooldownP1tick = 0;
    this.cooldownP2tick = 0;
    this.cooldownP3tick = 0;
    this.cooldownP4tick = 0;
    
    this.menureiniciar = 0;
    bombas = 1;
     bombas2 = 1;
      bombas3 = 1;
       bombas4 = 1;
    this.patin = 10;
    this.patin2 = 10;
    this.patin3 = 10;
    this.patin4 = 10;
      this.CrearObjeto = 1;
    this.CrearX = 0;
     this.CrearY = 0;
     limpiarLlama = 50;
        this.llama = 2;
        this.llama2 = 2;
        this.llama3 = 2;
        this.llama4 = 2;
        countExplosion = 30;
        countExplosion2 = 30;
        countExplosion3 = 30;
        countExplosion4 = 30;
        this.countBomb = 0;
        this.countBomb2 = 0;
        this.countBomb3 = 0;
        this.countBomb4 = 0;
        myShip = null;
        this.bombbutton = null;
        this.scoreInt = 0;
        this.vidasInt = 3;
        this.vidasInt2 = 0;
        this.vidasInt3 = 0;
        this.vidasInt4 = 0;
        this.player = null;
        this.cursor = null;
        this.bullet = null;
        this.brick = null;
        this.playerBulletLive = false;
        this.playerDirection = 'up';
     
  },
  create: function () {

  this.game.physics.startSystem(Phaser.Physics.ARCADE);
 //this.game.physics.p2.setImpactEvents(true);


     this.disminuirX = 0;
    this.disminuirY = 0;
    this.caerEnX = 1;
    this.caerEnY = 0;
  
this.menuseleccion = 1;
this.aceptarP1 = 0;
this.aceptarP2 = 0;
this.aceptarP3 = 0;
this.aceptarP4 = 0;

this.guanteP1 =0;
this.guanteP2 =0;
this.guanteP3 =0;
this.guanteP4 =0;

this.novotacionP1=0;
this.novotacionP2=0;
this.novotacionP3=0;
this.novotacionP4=0;
this.pause = 0;
     this.caerparedX =-1;
 this.caerparedY = 1;

this.tick1 = 0;
    this.nivelInt = 1;
this.relojInt = 300;
    this.resbalar = 0;
    this.resbalar2 = 0;
    this.resbalar3 = 0;
    this.resbalar4 = 0;
   this.pisor2X = 0;
   this.pisor2Y = 0;
  this.scoreInt = 0;
   //  bomba = this.game.add.sprite(-50,-50, 'bomba');
    this.countBomb = 0;
     this.countBomb2 = 0;
      this.countBomb3 = 0;
       this.countBomb4 = 0;
    countExplosion =0;
      countExplosion2 =0;
      countExplosion3 =0;
      countExplosion4 =0;
     

//sprites de puntuacion

//jugadores
if(this.jugadoresTotal >=1)
{
    this.jugador1 = this.add.text(32+32, 216+96, 'Jugador1', { fontFamily: '"Arial Black"' , fontSize: '32px', fill: '#ffffff'});

//this.jugador1.setFontSize(32);
}
if(this.jugadoresTotal >=2)
{
    this.jugador2 = this.add.text(32+32, 366+96, 'Jugador2', { fontFamily: '"Arial Black"', fontSize: '32px', fill: '#ffffff' });
//this.jugador2.setFontSize(32);
        this.vidasInt2 = 3;

}

if(this.jugadoresTotal >=3)
{
    this.jugador3 = this.add.text(32+32, 516+96, 'Jugador3', { fontFamily: '"Arial Black"' , fontSize: '32px', fill: '#ffffff'});
//this.jugador3.setFontSize(32);
        this.vidasInt3 = 3;

}
if(this.jugadoresTotal >=4)
{
    this.jugador4 = this.add.text(32+32, 666+96, 'Jugador4', { fontFamily: '"Arial Black"' , fontSize: '32px', fill: '#ffffff'});
//this.jugador4.setFontSize(32);
        this.vidasInt4 = 3;

}


     this.vida = this.game.add.sprite(92, 336+48, 'vida');

       this.kill = this.game.add.sprite(92, 336+96, 'kills');

if(this.jugadoresTotal >=2)
{
       //jugador 2

          this.vida = this.game.add.sprite(92, 486+48, 'vida');
if(this.gamemode ==1 || this.gamemode ==2)
       this.kill = this.game.add.sprite(92, 486+96, 'kills');
}

if(this.jugadoresTotal >=3)
{
          //jugador 3

          this.vida = this.game.add.sprite(92, 636+48, 'vida');
if(this.gamemode ==1 || this.gamemode ==2)
       this.kill = this.game.add.sprite(92, 636+96, 'kills');
}
            //jugador 4

if(this.jugadoresTotal >=4)
{
          this.vida = this.game.add.sprite(92, 786+48, 'vida');

if(this.gamemode ==1 || this.gamemode ==2)
       this.kill = this.game.add.sprite(92, 786+96, 'kills');
}
     this.minas = this.game.add.physicsGroup();


if(this.gamemode==0)
{
this.nivel = this.add.text(64, 32, 'Nivel', { fontFamily: '"Arial Black"' , fontSize: '32px', fill: '#ffffff'});
//this.nivel.setFontSize(32);


this.nivel = this.add.text(64, 64, this.nivelInt, { fontFamily: '"Arial Black"' , fontSize: '32px', fill: '#ffffff'});
//this.nivel.setFontSize(32);
}


this.vidas = this.add.text(120, 345, this.vidasInt, { fontFamily: '"Arial Black"' , fontSize: '64px', fill: '#ffffff'});
//this.vidas.setFontSize(64);

if(this.jugadoresTotal >=2)
{
this.vidasJ2 = this.add.text(120, 495, this.vidasInt2, { fontFamily: '"Arial Black"' , fontSize: '64px', fill: '#ffffff'});
//.vidasJ2.setFontSize(64);
}

if(this.jugadoresTotal >=3)
{
this.vidasJ3 = this.add.text(120, 645, this.vidasInt3, { fontFamily: '"Arial Black"' , fontSize: '64px', fill: '#ffffff'});
//this.vidasJ3.setFontSize(64);
}

if(this.jugadoresTotal >=4)
{
this.vidasJ4 = this.add.text(120, 795, this.vidasInt4, { fontFamily: '"Arial Black"', fontSize: '64px', fill: '#ffffff' });
//this.vidasJ4.setFontSize(64);
}

     this.cursors = this.input.keyboard.createCursorKeys();
    this.bombbutton = this.input.keyboard.addKey('X');

     this.guantebutton1 = this.input.keyboard.addKey('Z');
    this.guantebutton2 = this.input.keyboard.addKey('N');
    this.guantebutton3 = this.input.keyboard.addKey('M');
    this.guantebutton4 = this.input.keyboard.addKey('0');

     this.pausebutton = this.input.keyboard.addKey('Q');
     
      this.upjugador2 = this.input.keyboard.addKey('W');    
      this.downjugador2 = this.input.keyboard.addKey('S');    
      this.leftjugador2 = this.input.keyboard.addKey('A');  
      this.rightjugador2 = this.input.keyboard.addKey('D');
     


      this.upjugador3 = this.input.keyboard.addKey('T');    
      this.downjugador3 = this.input.keyboard.addKey('G');    
      this.leftjugador3 = this.input.keyboard.addKey('F');  
      this.rightjugador3 = this.input.keyboard.addKey('H');
     

      this.upjugador4 = this.input.keyboard.addKey('I');    
      this.downjugador4 = this.input.keyboard.addKey('K');    
      this.leftjugador4 = this.input.keyboard.addKey('J');  
      this.rightjugador4 = this.input.keyboard.addKey('L');
     



if(this.gamemode == 0)
{
this.txt = this.add.text(64, 196, 'Puntaje', { fontFamily: '"Arial Black"' , fontSize: '32px', fill: '#ffffff'});
//this.txt.setFontSize(32);

this.score = this.add.text(64, 226, this.scoreInt, { fontFamily: '"Arial Black"' , fontSize: '64px' , fill: '#ffffff'});
//this.score.setFontSize(64);
}

if(this.gamemode == 1 ||this.gamemode == 2)
{

this.score = this.add.text(-500, -500, this.scoreInt, { fontFamily: '"Arial Black"', fontSize: '64px' , fill: '#ffffff'});
//this.score.setFontSize(64);

}
  this.tiempo = this.add.text(64, 96, 'Tiempo', { fontFamily: '"Arial Black"', fontSize: '32px' , fill: '#ffffff'});
//this.tiempo.setFontSize(32);

   this.reloj = this.add.text(64, 128, this.relojInt, { fontFamily: '"Arial Black"' , fontSize: '64px', fill: '#ffffff'});
//this.reloj.setFontSize(64);



   



bombasFull = this.game.add.physicsGroup();

bombasFull2 = this.game.add.physicsGroup();
 bombasFull3 = this.game.add.physicsGroup();
 bombasFull4 = this.game.add.physicsGroup();
 
this.enemigos = this.game.add.physicsGroup();

       explosionUp = this.game.add.physicsGroup();
       explosionDown = this.game.add.physicsGroup();
       explosionLeft = this.game.add.physicsGroup();
       explosionRight = this.game.add.physicsGroup();

  explosionUp2 = this.game.add.physicsGroup();
       explosionDown2 = this.game.add.physicsGroup();
       explosionLeft2 = this.game.add.physicsGroup();
       explosionRight2 = this.game.add.physicsGroup();

 explosionUp3 = this.game.add.physicsGroup();
       explosionDown3 = this.game.add.physicsGroup();
       explosionLeft3 = this.game.add.physicsGroup();
       explosionRight3 = this.game.add.physicsGroup();

 explosionUp4 = this.game.add.physicsGroup();
       explosionDown4 = this.game.add.physicsGroup();
       explosionLeft4 = this.game.add.physicsGroup();
       explosionRight4 = this.game.add.physicsGroup();



         this.box = this.game.add.physicsGroup();
         this.pisor1 = this.game.add.physicsGroup();
          this.pisor2 = this.game.add.physicsGroup();
           this.pisomov = this.game.add.physicsGroup();
        this.boxFuerte = this.game.add.physicsGroup();
        this.boxFuerte2 = this.game.add.physicsGroup();
        
         this.boxFuerteSprite = this.game.add.physicsGroup();
        
         this.powerups = this.game.add.physicsGroup();
        this.powerupsLlamas = this.game.add.physicsGroup();
   this.powerupsPatin = this.game.add.physicsGroup();
   this.powerupsBombas = this.game.add.physicsGroup();
 this.powerupsVidas = this.game.add.physicsGroup();
 this.powerupsGuantes = this.game.add.physicsGroup();

 this.wallkill = this.game.add.physicsGroup();

//random
  /*   for (var i = 0; i < 600; i++)
    {

        var x = Phaser.Math.Between(0, (1920 - 32*18)/32 );
        var y = Phaser.Math.Between(0, (1080 - 32*6)/32);
         var item = Phaser.Math.Between(0,5);

     if(item ==1)
     this.powerupsLlamas.create(480+ x*32,  64 + y*32, 'poderllama');
    if(item ==2)
     this.powerupsPatin.create(480+ x*32,  64 + y*32, 'poderpatin');
    if(item ==3)
     this.powerupsBombas.create(480+ x*32,  64 + y*32, 'poderbomba');
   if(item ==4)
     this.boxFuerte.create(480+ x*32,  64 + y*32, 'wall2');
   
    if(item !=4)
        this.box.create(480+ x*32, 64 + y*32, 'wall');

     //   var box = this.add.image(x, y, 'crate');
      //      box.setInteractive();


     }
*/

//Modo no aleatorio
if(this.designer ==0)
{
    for (var i = -1; i < 22; i++)
    {
for (var j = 1; j < 14; j++)
    {
        if((i > -2 && i < 1 && j > 0 && j < 3) || (i > 19 && i < 22 && j > 0 && j < 3)
            || (i > -2 && i < 1 && j > 11 && j < 14) || (i > 19 && i < 22 && j > 11 && j < 14))
        {
            
        }
        else
        {
          var item = this.game.rnd.integerInRange(0, 40)

     if(item ==1)
     {
     this.powerupsLlamas.create(480+ i*32*2,  64 + j*32*2, 'poderllama');
     this.box.create(480+ i*32*2, 64 + j*32*2, 'wall');
    }
    if(item ==2)
    {
     this.powerupsPatin.create(480+ i*32*2,  64 + j*32*2, 'poderpatin');
     this.box.create(480+ i*32*2, 64 + j*32*2, 'wall');
    }
    if(item ==3)
    {
     this.powerupsBombas.create(480+ i*32*2,  64 + j*32*2, 'poderbomba');
     this.box.create(480+ i*32*2, 64 + j*32*2, 'wall');
    }
     if(item ==36)
    {
     this.powerupsVidas.create(480+ i*32*2,  64 + j*32*2, 'podervida');
     this.box.create(480+ i*32*2, 64 + j*32*2, 'wall');
    }
     if(item ==38)
    {
     this.powerupsGuantes.create(480+ i*32*2,  64 + j*32*2, 'poderguante');
     this.box.create(480+ i*32*2, 64 + j*32*2, 'wall');
    }
   if(item ==4)
     this.boxFuerte.create(480+ i*32*2,  64 + j*32*2, 'wall2');
   if(item > 5 && item <6+this.nivelInt){

     if(i > 0 && i < 20 && j > 2 && j < 12)
        {
    if(this.enemigos.length<3+this.nivelInt)
    {
        if(this.gamemode==0)
{
     this.enemigos.create(480+ i*32*2,  64 + j*32*2, 'enemigo');
}
    }
}
    }

    if(item >16 && item < 28)
        this.box.create(480+ i*32*2, 64 + j*32*2, 'wall');

  if(item >29 && item < 32)
        this.pisor1.create(480+ i*32*2, 64 + j*32*2, 'pisor1');
  if(item >33 && item < 35)
        this.pisomov.create(480+ i*32*2, 64 + j*32*2, 'pisomov');

     //   var box = this.add.image(x, y, 'crate');
      //      box.setInteractive();

     }
 }
 }
}





for (var i = 1; i < 15; i++)
    {
     this.boxFuerte2.create(12*32-32-32 + 32, 32 + i*64, 'wall3');
 this.boxFuerte2.create(12*32-32-32 -32, 32 + i*64, 'wall3');
}
for (var i = 1; i < 15; i++)
    {
     this.boxFuerte2.create(1920-64 + 32, 32 + i*64, 'wall3');
       this.boxFuerte2.create(1920-64 + 32 + 64, 32 + i*64, 'wall3');
}

for (var i = -3; i < 25; i++)
    {
     this.boxFuerte2.create(12*32 + 64*i, 32 + 32, 'wall3');
      this.boxFuerte2.create(12*32 + 64*i, 32-32, 'wall3');
}
for (var i = -3; i < 25; i++)
    {
    this.boxFuerte2.create(12*32 + 64*i, 896+ 32 + 32, 'wall3');
    this.boxFuerte2.create(12*32 + 64*i, 896+ 32 + 32+64, 'wall3');
 }


for (var i = 2; i < 15; i++)
    {
     this.boxFuerteSprite.create(12*32-32-32 + 32,  i*64, 'wall2');
}
for (var i = 2; i < 15; i++)
    {
     this.boxFuerteSprite.create(1920-64 + 32, i*64, 'wall2');
}

for (var i = 0; i < 25; i++)
    {
     this.boxFuerteSprite.create(11*32 + 64*i, 32 + 32, 'wall2');
 }
for (var i = 0; i < 25; i++)
    {
    this.boxFuerteSprite.create(11*32 + 64*i, 896+ 32 + 32, 'wall2');
}



      // myShip = new Ship(this, 400, 500);
    myShip = this.game.add.sprite(420, 130, 'ship');

myShip2 = this.game.add.sprite(5000, 130, 'ship2');
myShip3 = this.game.add.sprite(5000, 130, 'ship3');
myShip4 = this.game.add.sprite(5000, 130, 'ship4');

if(this.jugadoresTotal >=2)
{
   myShip2 = this.game.add.sprite(1820, 130, 'ship2');
}

if(this.jugadoresTotal >=3)
{
      myShip3 = this.game.add.sprite(420, 885, 'ship3');
}
if(this.jugadoresTotal >=4)
{
         myShip4 = this.game.add.sprite(1820, 885, 'ship4');
}




//myShip.body.collideWorldBounds=true;
 //myShip2.body.collideWorldBounds=true;
 //myShip3.body.collideWorldBounds=true;
 //myShip4.body.collideWorldBounds=true;



  this.killsInt = this.enemigos.length;
   this.killsInt2 = 0;
   this.killsInt3 = 0;
   this.killsInt4 = 0;

   this.kills = this.add.text(92+32, 306+96, this.killsInt, { fontFamily: '"Arial Black"', fontSize: '64px', fill: '#ffffff' });
//this.kills.setFontSize(64);

if(this.jugadoresTotal >=2 && (this.gamemode == 1 || this.gamemode == 2))
{
 this.killsJ2 = this.add.text(92+32, 456+96, this.killsInt2, { fontFamily: '"Arial Black"' , fontSize: '64px', fill: '#ffffff'});
//this.killsJ2.setFontSize(64);
}
if(this.jugadoresTotal >=3 && (this.gamemode == 1 || this.gamemode == 2))
{
this.killsJ3 = this.add.text(92+32, 606+96, this.killsInt3, { fontFamily: '"Arial Black"' , fontSize: '64px', fill: '#ffffff'});
//this.killsJ3.setFontSize(64);
}
if(this.jugadoresTotal >=4 && (this.gamemode == 1 || this.gamemode == 2))
{
this.killsJ4= this.add.text(92+32, 756+96, this.killsInt4, { fontFamily: '"Arial Black"'  , fontSize: '64px', fill: '#ffffff'});
//this.killsJ4.setFontSize(64);
}
//AAGREGADO TODO COLIISON

//FIN TODO COLISION

  this.XKey = game.input.keyboard.addKey(Phaser.Keyboard.X);
  this.CKey = game.input.keyboard.addKey(Phaser.Keyboard.C);
  this.VKey = game.input.keyboard.addKey(Phaser.Keyboard.V);
 this.BKey = game.input.keyboard.addKey(Phaser.Keyboard.B);

//
//this.leftKey.downDuration(250)


   //this.input.keyboard.on('keydown_X', actualizarEstado, this);
   //this.input.keyboard.on('keydown_C', actualizarEstado2, this);
  // this.input.keyboard.on('keydown_V', actualizarEstado3, this);
  // this.input.keyboard.on('keydown_B', actualizarEstado4, this);

//guante


//this.input.keyboard.on('keydown_Z', cogerBomba, this);

function activarPause()
{

   if(this.pause==1)
   this.pause = 0;
    else   
   this.pause = 1;  

if(this.pause ==0)
{

     this.seleccionoVotacion.setText("");
     this.objetocolocarsprite.visible = false;
 this.seleccionadoSprite.visible = false;

    this.designer =0;
     this.menureiniciar =0;
    this.menupausesprite.visible = false;
    this.menupausesprite2.visible = false;
    this.menupausesprite3.visible = false;

this.menupspritereiniciar.visible = false;

      this.menupspritereiniciarP1.visible = false;
     this.menupspritereiniciarP2.visible = false;
      this.menupspritereiniciarP3.visible = false;
       this.menupspritereiniciarP4.visible = false;

   
      this.aceptarP1 = 0;
       this.aceptarP2 = 0; 
        this.aceptarP3 = 0;
         this.aceptarP4 = 0;
}

if(this.pause ==1)
{

if(this.menuseleccion==1)
    {
         this.menupausesprite.visible = true;
    }
    if(this.menuseleccion==2)
    {
            this.menupausesprite2.visible = true;

    }
    if(this.menuseleccion==3)
    {
            this.menupausesprite3.visible= true;
    }
}
    
    myShip.body.velocity.x = 0
    myShip.body.velocity.y = 0
    

    myShip2.body.velocity.x = 0
    myShip2.body.velocity.y = 0
    

    myShip3.body.velocity.x = 0
    myShip3.body.velocity.y = 0
    

    myShip4.body.velocity.x = 0
    myShip4.body.velocity.y = 0
    
    explosionUp.body.velocity.x = 0
    explosionDown.body.velocity.x = 0
    explosionLeft.body.velocity.y = 0
 explosionRight.body.velocity.y = 0

explosionUp2.body.velocity.x = 0
    explosionDown2.body.velocity.x = 0
    explosionLeft2.body.velocity.y = 0
 explosionRight2.body.velocity.y = 0


explosionUp3.body.velocity.x = 0
    explosionDown3.body.velocity.x = 0
    explosionLeft3.body.velocity.y = 0
 explosionRight3.body.velocity.y = 0


explosionUp4.body.velocity.x = 0
    explosionDown4.body.velocity.x = 0
    explosionLeft4.body.velocity.y = 0
 explosionRight4.body.velocity.y = 0

  /*this.enemigos.children.iterate(child => {
      
     

            child.body.velocity.x = 0
            child.body.velocity.y = 0
         

         })*/
        

}




function moverMenuIzq()
{
if(this.pause == 1)
 {

  if(this.menuseleccion==1)
    {
 this.menupausesprite.visible = false;
  this.menupausesprite3.visible = true;
  this.menuseleccion = 3;
    }
    else if(this.menuseleccion==2)
    {

 this.menupausesprite.visible = true;
  this.menupausesprite2.visible = false;
  this.menuseleccion = 1;
 
    }
    else if(this.menuseleccion==3)
    {
this.menupausesprite3.visible = false;
  this.menupausesprite2.visible = true;
  this.menuseleccion = 2;
    }

                    
  }
}

function moverMenuDer()
{

    if(this.pause == 1)
 {
     if(this.menuseleccion==1)
    {
 this.menupausesprite.visible = false;
  this.menupausesprite2.visible = true;
  this.menuseleccion = 2;
    }
    else if(this.menuseleccion==2)
    {

 this.menupausesprite2.visible = false;
  this.menupausesprite3.visible = true;
  this.menuseleccion = 3;
 
    }
    else if(this.menuseleccion==3)
    {
this.menupausesprite.visible = true;
  this.menupausesprite3.visible = false;
  this.menuseleccion = 1;
    }
}
}


function realizarAccionesMenu()
{
     if(this.pause == 1)
 {
  if(this.novotacionP1 ==0 && this.menureiniciar ==0)
    this.seleccionoVotacion.setText("J1");

     if(this.menuseleccion==1)
    {
        
        this.pause = 0;
         this.menupausesprite.visible = false;
    this.menupausesprite2.visible = false;
    this.menupausesprite3.visible = false;
      this.aceptarP1 = 0;
       this.aceptarP2 = 0; 
        this.aceptarP3 = 0;
         this.aceptarP4 = 0;
     }

    else if(this.menuseleccion==2  && this.novotacionP1==0)
    {
            this.novotacionP1 =1;
        this.menureiniciar =1;

        if(this.jugadoresTotal!=1)
        {
        
        if(this.jugadoresTotal==2)
     this.menupspritereiniciar.setTexture('votacionmenu2');
     if(this.jugadoresTotal==3)
             this.menupspritereiniciar.setTexture('votacionmenu3');

         this.menupspritereiniciar.visible = true;
        

        }



    }
    else if(this.menuseleccion==3)
    {

        this.scene.start('SceneB');
    }
 }


    
}


function realizarAccionesMenu2()
{
     if(this.pause == 1)
 {

    if(this.novotacionP2 ==0 && this.menureiniciar ==0)
    this.seleccionoVotacion.setText("J2");

     if(this.menuseleccion==1)
    {
      
        this.pause = 0;
         this.menupausesprite.visible = false;
    this.menupausesprite2.visible = false;
    this.menupausesprite3.visible = false;
      this.aceptarP1 = 0;
       this.aceptarP2 = 0; 
        this.aceptarP3 = 0;
         this.aceptarP4 = 0;
     }

    else if(this.menuseleccion==2  && this.novotacionP2==0)
    {
          this.novotacionP2 =1;

        this.menureiniciar =1;

   if(this.jugadoresTotal==2)
     this.menupspritereiniciar.setTexture('votacionmenu2');
     if(this.jugadoresTotal==3)
             this.menupspritereiniciar.setTexture('votacionmenu3');
         

         this.menupspritereiniciar.visible = true;


    }
    else if(this.menuseleccion==3)
    {

        this.scene.start('SceneB');
    }
 }


    
}



function realizarAccionesMenu3()
{
     if(this.pause == 1)
 {
  if(this.novotacionP3 ==0 && this.menureiniciar ==0)
     this.seleccionoVotacion.setText("J3");

     if(this.menuseleccion==1)
    {
       
        this.pause = 0;
         this.menupausesprite.visible = false;
    this.menupausesprite2.visible = false;
    this.menupausesprite3.visible = false;
      this.aceptarP1 = 0;
       this.aceptarP2 = 0; 
        this.aceptarP3 = 0;
         this.aceptarP4 = 0;
     }

    else if(this.menuseleccion==2  && this.novotacionP3==0)
    {  
         this.novotacionP3 =1;

        this.menureiniciar =1;

           if(this.jugadoresTotal==2)
     this.menupspritereiniciar.setTexture('votacionmenu2');
     if(this.jugadoresTotal==3)
             this.menupspritereiniciar.setTexture('votacionmenu3');
         

         this.menupspritereiniciar.visible = true;

      

    }
    else if(this.menuseleccion==3)
    {

        this.scene.start('SceneB');
    }
 }


    
}

function realizarAccionesMenu4()
{
     if(this.pause == 1)
 {
  if(this.novotacionP4 ==0 && this.menureiniciar ==0)
     this.seleccionoVotacion.setText("J4");
     if(this.menuseleccion==1)
    {
       
        this.pause = 0;
         this.menupausesprite.visible = false;
    this.menupausesprite2.visible = false;
    this.menupausesprite3.visible = false;
      this.aceptarP1 = 0;
       this.aceptarP2 = 0; 
        this.aceptarP3 = 0;
         this.aceptarP4 = 0;
     }

    else if(this.menuseleccion==2 && this.novotacionP4==0)
    {
         this.novotacionP4 =1;
        this.menureiniciar =1;

           if(this.jugadoresTotal==2)
     this.menupspritereiniciar.setTexture('votacionmenu2');
     if(this.jugadoresTotal==3)
             this.menupspritereiniciar.setTexture('votacionmenu3');
         

         this.menupspritereiniciar.visible = true;

      

    }
    else if(this.menuseleccion==3)
    {

        this.scene.start('SceneB');
    }
 }


    
}
function aceptarVotacionP1()
{

    if(this.menureiniciar ==1 && this.pause ==1)
    {
    this.aceptarP1 = 1;

     if(this.jugadoresTotal!=1)
    this.menupspritereiniciarP1.visible = true;
   
    }
}
function aceptarVotacionP2()
{
    if(this.jugadoresTotal>=2)
    {
    if(this.menureiniciar ==1 && this.pause ==1)
    {
        this.aceptarP2 = 1;
   
    this.menupspritereiniciarP2.visible = true;

    }
}
}
function aceptarVotacionP3()
{
     if(this.jugadoresTotal>=3)
    {
    if(this.menureiniciar ==1 && this.pause ==1)
    {
            this.aceptarP3 = 1;

    this.menupspritereiniciarP3.visible = true;
    }
}
}
function aceptarVotacionP4()
{
     if(this.jugadoresTotal>=4)
    {
    if(this.menureiniciar ==1 && this.pause ==1)
    {
          this.aceptarP4 = 1;

    this.menupspritereiniciarP4.visible = true;
    }
}
}

function activarEspera2()
{


if(this.jugadoresTotal >=2)
{
    this.menuseleccion=2;
 this.aceptarP2 = 1;
    this.menupspritereiniciarP2.visible = true;

    this.pause = 1;
this.activarEsperaInt = 1;
this.menureiniciar = 1;
  this.menupspritereiniciar.visible = true;





      myShip.body.velocity.x = 0
    myShip.body.velocity.y = 0
    

    myShip2.body.velocity.x = 0
    myShip2.body.velocity.y = 0
    

    myShip3.body.velocity.x = 0
    myShip3.body.velocity.y = 0
    

    myShip4.body.velocity.x = 0
    myShip4.body.velocity.y = 0
    
    explosionUp.body.velocity.x = 0
    explosionDown.body.velocity.x = 0
    explosionLeft.body.velocity.y = 0
 explosionRight.body.velocity.y = 0

explosionUp2.body.velocity.x = 0
    explosionDown2.body.velocity.x = 0
    explosionLeft2.body.velocity.y = 0
 explosionRight2.body.velocity.y = 0


explosionUp3.body.velocity.x = 0
    explosionDown3.body.velocity.x = 0
    explosionLeft3.body.velocity.y = 0
 explosionRight3.body.velocity.y = 0


explosionUp4.body.velocity.x = 0
    explosionDown4.body.velocity.x = 0
    explosionLeft4.body.velocity.y = 0
 explosionRight4.body.velocity.y = 0


 if(this.gamemode == 0)
 {
    
  /*this.enemigos.children.iterate(child => {
      
     

            child.body.velocity.x = 0
            child.body.velocity.y = 0
         

         })*/
        

 }
}



}


function activarEspera3()
{

if(this.jugadoresTotal >=3)
{
     this.menuseleccion=2;
     this.aceptarP3 = 1;
    this.menupspritereiniciarP3.visible = true;

    this.pause = 1;
this.activarEsperaInt = 1;
this.menureiniciar = 1;
  this.menupspritereiniciar.visible = true;

      myShip.body.velocity.x = 0
    myShip.body.velocity.y = 0
    

    myShip2.body.velocity.x = 0
    myShip2.body.velocity.y = 0
    

    myShip3.body.velocity.x = 0
    myShip3.body.velocity.y = 0
    

    myShip4.body.velocity.x = 0
    myShip4.body.velocity.y = 0
    
    explosionUp.body.velocity.x = 0
    explosionDown.body.velocity.x = 0
    explosionLeft.body.velocity.y = 0
 explosionRight.body.velocity.y = 0

explosionUp2.body.velocity.x = 0
    explosionDown2.body.velocity.x = 0
    explosionLeft2.body.velocity.y = 0
 explosionRight2.body.velocity.y = 0


explosionUp3.body.velocity.x = 0
    explosionDown3.body.velocity.x = 0
    explosionLeft3.body.velocity.y = 0
 explosionRight3.body.velocity.y = 0


explosionUp4.body.velocity.x = 0
    explosionDown4.body.velocity.x = 0
    explosionLeft4.body.velocity.y = 0
 explosionRight4.body.velocity.y = 0


 if(this.gamemode == 0)
 {
    
  /*this.enemigos.children.iterate(child => {
      
     

            child.body.velocity.x = 0
            child.body.velocity.y = 0
         

         })*/
        

 }

}
}


function activarEspera4()
{


if(this.jugadoresTotal >=4)
{

     this.aceptarP4 = 1;
      this.menuseleccion=2;
    this.menupspritereiniciarP4.visible = true;

    this.pause = 1;
this.activarEsperaInt = 1;
this.menureiniciar = 1;
  this.menupspritereiniciar.visible = true;



      myShip.body.velocity.x = 0
    myShip.body.velocity.y = 0
    

    myShip2.body.velocity.x = 0
    myShip2.body.velocity.y = 0
    

    myShip3.body.velocity.x = 0
    myShip3.body.velocity.y = 0
    

    myShip4.body.velocity.x = 0
    myShip4.body.velocity.y = 0
    
    explosionUp.body.velocity.x = 0
    explosionDown.body.velocity.x = 0
    explosionLeft.body.velocity.y = 0
 explosionRight.body.velocity.y = 0

explosionUp2.body.velocity.x = 0
    explosionDown2.body.velocity.x = 0
    explosionLeft2.body.velocity.y = 0
 explosionRight2.body.velocity.y = 0


explosionUp3.body.velocity.x = 0
    explosionDown3.body.velocity.x = 0
    explosionLeft3.body.velocity.y = 0
 explosionRight3.body.velocity.y = 0


explosionUp4.body.velocity.x = 0
    explosionDown4.body.velocity.x = 0
    explosionLeft4.body.velocity.y = 0
 explosionRight4.body.velocity.y = 0

 if(this.gamemode == 0)
 {

  /*this.enemigos.children.iterate(child => {
      
     

            child.body.velocity.x = 0
            child.body.velocity.y = 0
         

         })*/
        

 }
}

}

//simular desconexion mando 2
 // this.input.keyboard.on('keydown_E', activarPause, this);
  //  this.input.keyboard.on('keydown_E', activarEspera2, this);
//simular desconexion mando 3
  //  this.input.keyboard.on('keydown_Y', activarPause, this);
  //   this.input.keyboard.on('keydown_Y', activarEspera3, this);
  //simular desconexion mando 4
 //   this.input.keyboard.on('keydown_O', activarPause, this);
 //    this.input.keyboard.on('keydown_O', activarEspera4, this);


/*this.input.keyboard.on('keydown_ENTER', activarPause, this);
this.input.keyboard.on('keydown_R', activarPause, this);
this.input.keyboard.on('keydown_U', activarPause, this);
this.input.keyboard.on('keydown_P', activarPause, this);

this.input.keyboard.on('keydown_LEFT', moverMenuIzq, this);
this.input.keyboard.on('keydown_RIGHT', moverMenuDer, this);
this.input.keyboard.on('keydown_X', realizarAccionesMenu, this);


this.input.keyboard.on('keydown_A', moverMenuIzq, this);
this.input.keyboard.on('keydown_D', moverMenuDer, this);
this.input.keyboard.on('keydown_C', realizarAccionesMenu2, this);

this.input.keyboard.on('keydown_F', moverMenuIzq, this);
this.input.keyboard.on('keydown_H', moverMenuDer, this);
this.input.keyboard.on('keydown_V', realizarAccionesMenu3, this);


this.input.keyboard.on('keydown_J', moverMenuIzq, this);
this.input.keyboard.on('keydown_L', moverMenuDer, this);
this.input.keyboard.on('keydown_B', realizarAccionesMenu4, this);


this.input.keyboard.on('keydown_X', aceptarVotacionP1, this);
this.input.keyboard.on('keydown_C', aceptarVotacionP2, this);
this.input.keyboard.on('keydown_V', aceptarVotacionP3, this);
this.input.keyboard.on('keydown_B', aceptarVotacionP4, this);

*/
  this.menupausesprite = this.game.add.sprite(1920/2+200-50, 1080/2 -50, 'menupause');
  this.menupausesprite.visible = false;

   this.menupausesprite2 = this.game.add.sprite(1920/2+200-50, 1080/2 -50, 'menupause2');
  this.menupausesprite2.visible = false;

 this.menupausesprite3 = this.game.add.sprite(1920/2+200-50, 1080/2 -50, 'menupause3');
  this.menupausesprite3.visible = false;

 this.menupspritereiniciar = this.game.add.sprite(1920/2+200-50, 1080/2 -50, 'votacionmenu');
  this.menupspritereiniciar.visible = false;

   this.menupspritereiniciarP1 = this.game.add.sprite(1920/2+200-50, 1080/2 -50, 'votacionmenuP1');
  this.menupspritereiniciarP1.visible = false;

   this.menupspritereiniciarP2 = this.game.add.sprite(1920/2+200-50, 1080/2 -50, 'votacionmenuP2');
  this.menupspritereiniciarP2.visible = false;

   this.menupspritereiniciarP3 = this.game.add.sprite(1920/2+200-50, 1080/2 -50, 'votacionmenuP3');
  this.menupspritereiniciarP3.visible = false;

   this.menupspritereiniciarP4 = this.game.add.sprite(1920/2+200-50, 1080/2 -50, 'votacionmenuP4');
  this.menupspritereiniciarP4.visible = false;


function crearmapa()
{



}






 function moverazar()
 {
    
 }

this.seleccionoVotacion = this.add.text(1920/2+190, 1080/2-136, 'J1', { fontFamily: '"Arial Black"',  color: '#000000' });
this.seleccionoVotacion.setText("");
//moverazar();

//Designer


     // this.objetocolocarspriteStart = this.game.add.sprite(416 , 128, 'ship');
  
this.objetocolocar=0;

 //this.objetocolocarsprite = this.game.add.sprite(416, 128, 'wall');

 this.objetocolocarsprite = this.game.add.sprite(416, 128, 'wall');
 this.seleccionadoSprite = this.game.add.sprite(416, 128, 'seleccion3');


 this.objetocolocarsprite.visible = false
 this.seleccionadoSprite.visible =false;

if(this.designer ==1)
{
     this.objetocolocarsprite.visible = true;
 this.seleccionadoSprite.visible =true;

}

function moverMenuArribaDes()
{
    if(this.designer==1)
    {
if(this.seleccionadoSprite.y -64 >= 128)
this.seleccionadoSprite.y = this.seleccionadoSprite.y - 64;

this.objetocolocarsprite.y = this.seleccionadoSprite.y ;
}
}

function moverMenuAbajoDes()
{
    if(this.designer==1)
    {
    if(this.seleccionadoSprite.y +64 <= 908)
this.seleccionadoSprite.y = this.seleccionadoSprite.y + 64;

this.objetocolocarsprite.y = this.seleccionadoSprite.y ;
        
        }
}
function moverMenuIzqDes()
{
    if(this.designer==1)
    {
    if(this.seleccionadoSprite.x -64 >= 416)
   this.seleccionadoSprite.x = this.seleccionadoSprite.x - 64;

   this.objetocolocarsprite.x = this.seleccionadoSprite.x ;
}
}
function moverMenuDerDes()
{
    if(this.designer==1)
    {
     if(this.seleccionadoSprite.x +64 <= 1840)
    this.seleccionadoSprite.x = this.seleccionadoSprite.x + 64;

      this.objetocolocarsprite.x = this.seleccionadoSprite.x ;
  }
}
function seleccionarOpcionMin()
{
    if(this.designer==1)
    {
    if(this.objetocolocar>0)
    this.objetocolocar = this.objetocolocar - 1;
    else
     this.objetocolocar = 0;
}
    //this.scene.start('Scene1', { gamemode: this.gamemode, jugadores: this.jugadores });
      
}



function seleccionarOpcionMax()
{
    if(this.designer==1)
    {
if(this.objetocolocar<=5)
     this.objetocolocar = this.objetocolocar + 1;
  else
     this.objetocolocar = 5;
}

// this.scene.start('Scene1', { gamemode: this.gamemode, jugadores: this.jugadores });
      
}

function seleccionarOpcionSet()
{
    if(this.designer==1)
    {
    if(this.objetocolocar ==0)
    {
       
        this.objetocolocarsprite.setTexture('wall');
    }
     if(this.objetocolocar ==1)
    {
        this.objetocolocarsprite.setTexture('enemigo');
    }

     if(this.objetocolocar ==2)
    {
        this.objetocolocarsprite.setTexture('pisomov');
    }
     if(this.objetocolocar ==3)
    {
        this.objetocolocarsprite.setTexture('pisor1');
    }

 if(this.objetocolocar ==4)
    {
        this.objetocolocarsprite.setTexture('mina');
    }
    if(this.objetocolocar ==5)
    {
        this.objetocolocarsprite.setTexture('ship');
    }
      if(this.objetocolocar ==6)
    {
        this.objetocolocarsprite.setTexture('wall2');
    }
}
// this.scene.start('Scene1', { gamemode: this.gamemode, jugadores: this.jugadores });
      
}

function seleccionarOpcionDes()
{
    if(this.designer==1)
    {
    if(this.objetocolocar ==0)
    {

          var item = this.game.rnd.integerInRange(0, 40)

  if(item ==1)
     {
     this.powerupsLlamas.create(this.seleccionadoSprite.x , this.seleccionadoSprite.y,'poderllama');
    }
    if(item ==2)
    {
     this.powerupsPatin.create(this.seleccionadoSprite.x , this.seleccionadoSprite.y,'poderpatin');
    }
    if(item ==3)
    {
     this.powerupsBombas.create(this.seleccionadoSprite.x , this.seleccionadoSprite.y, 'poderbomba');
    }
     if(item ==36)
    {
     this.powerupsVidas.create(this.seleccionadoSprite.x , this.seleccionadoSprite.y,'podervida');
    }
     if(item ==38)
    {
     this.powerupsGuantes.create(this.seleccionadoSprite.x , this.seleccionadoSprite.y, 'poderguante');
    }
        this.box.create(this.seleccionadoSprite.x , this.seleccionadoSprite.y, 'wall');


       //this.objetocolocarspriteNuevo = this.game.add.sprite(this.seleccionadoSprite.x , this.seleccionadoSprite.y, 'wall');
    }

  if(this.objetocolocar ==1)
    {

        this.enemigos.create(this.seleccionadoSprite.x , this.seleccionadoSprite.y, 'enemigo');
        //this.objetocolocarspriteNuevo = this.game.add.sprite(this.seleccionadoSprite.x , this.seleccionadoSprite.y, 'enemigo');
  }

  if(this.objetocolocar ==2)
    {
       this.pisomov.create(this.seleccionadoSprite.x , this.seleccionadoSprite.y, 'pisomov');
       // this.objetocolocarspriteNuevo = this.game.add.sprite(this.seleccionadoSprite.x , this.seleccionadoSprite.y, 'pisomov');
  }

   if(this.objetocolocar ==3)
    {
       this.pisor1.create(this.seleccionadoSprite.x , this.seleccionadoSprite.y, 'pisor1');
//        this.objetocolocarspriteNuevo = this.game.add.sprite(this.seleccionadoSprite.x , this.seleccionadoSprite.y, 'pisor1');
  }
   if(this.objetocolocar ==4)
    {
         this.minas.create(this.seleccionadoSprite.x , this.seleccionadoSprite.y, 'mina');
  //      this.objetocolocarspriteNuevo = this.game.add.sprite(this.seleccionadoSprite.x , this.seleccionadoSprite.y, 'mina');
  }
   if(this.objetocolocar ==5)
    {
        myShip.x = this.seleccionadoSprite.x;
        myShip.y = this.seleccionadoSprite.y;
    }
     if(this.objetocolocar ==6)
    {
        this.boxFuerte.create(this.seleccionadoSprite.x , this.seleccionadoSprite.y, 'wall2');
    }
}
// this.scene.start('Scene1', { gamemode: this.gamemode, jugadores: this.jugadores });
      
}
   /* this.input.keyboard.on('keydown_UP', moverMenuArribaDes, this);
    this.input.keyboard.on('keydown_DOWN', moverMenuAbajoDes, this);
    this.input.keyboard.on('keydown_LEFT', moverMenuIzqDes, this);
    this.input.keyboard.on('keydown_RIGHT', moverMenuDerDes, this);
 this.input.keyboard.on('keydown_X', seleccionarOpcionMax, this);
 this.input.keyboard.on('keydown_Z', seleccionarOpcionMin, this);
  this.input.keyboard.on('keydown_X', seleccionarOpcionSet, this);
 this.input.keyboard.on('keydown_Z', seleccionarOpcionSet, this);
 this.input.keyboard.on('keydown_Q', seleccionarOpcionDes, this);
*/

 //EXPERIMENTAL


function aumentarNivel()
{
  //  console.log(this.nivelInt)

    if(this.nivelInt <=99)
    this.nivelInt = this.nivelInt+1;
     this.nivel.setText(this.nivelInt)
}
 //this.input.keyboard.on('keydown_SPACE', aumentarNivel, this);







    // XL/R, YL/R, normal, YStop
    this.timer = this.game.time.create(false);

    //SFX/Background
    this.loadSounds(); // BINDEADO

   // this.player = this.game.add.sprite(0, 110, "player");
  //  this.game.physics.enable([this.player], Phaser.Physics.ARCADE);

     this.game.physics.enable([myShip], Phaser.Physics.ARCADE);

        this.game.physics.enable([this.box], Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 0;

/*
    //Groups(Sprites) added
    this.loadGroups(); // BINDEADO
    //Groups(Sprites) initiated
    this.loadTiles('level1'); // BINDEADO
    this.loadPlayer(); // BINDEADO
    this.loadLives(); // BINDEADO
    this.loadPotions("level1"); // BINDEADO
    this.loadWeapons("level1"); // BINDEADO
    this.loadCheckpoints(3936, 470); // BINDEADO
    this.loadSaws("level1"); // BINDEADO
    this.loadSpikes("level1"); // BINDEADO
    this.loadEnemy1("level1"); // BINDEADO
    this.loadDoors("level1"); // BINDEADO
    this.loadLevers("level1"); // BINDEADO
    this.loadStairs("level1"); // BINDEADO
    //Z-index sprite positions
    this.game.world.bringToTop(this.doors);
    this.game.world.bringToTop(this.levers);
    this.game.world.bringToTop(this.stairs);
    this.game.world.bringToTop(this.player);
    this.game.world.bringToTop(this.enemies);
    this.game.world.bringToTop(this.checkpoints);

    this.loadLevel();
    this.loadBullets();
    this.loadPauseUI();*/


  },
  update: function () {

this.box.setAll('body.immovable',true);
this.boxFuerte.setAll('body.immovable',true);

this.boxFuerte2.setAll('body.immovable',true);
this.game.world.bringToTop(this.box);



function actualizarEstado()
{
  if(bombasFull.length< bombas)
        {

        bombasFull.create(myShip.x, myShip.y, 'bomba');
        countExplosion = 100;
         }       
    
//bombasFull.create(myShip.x, myShip.y, 'bomba');
    if(this.pause==0 && this.designer==0)
{
if( this.vidasInt >0)
{


    
}
     }
}
function actualizarEstado2()
{
    if(this.jugadoresTotal >=2 && this.vidasInt2 >0)
{
    if(this.pause==0 && this.designer==0)
{
      if(bombasFull2.length< bombas2)
        {
         bombasFull2.create(myShip2.x, myShip2.y, 'bomba');
        countExplosion2 = 100;
         }     
         }  
     }
}
function actualizarEstado3()
{
    if(this.jugadoresTotal >=3  && this.vidasInt3 >0)
{
    if(this.pause==0 && this.designer==0)
{
      if(bombasFull3.length< bombas3)
        {
        bombasFull3.create(myShip3.x, myShip3.y, 'bomba');
        countExplosion3 = 100;
         }     
         }  
     }
}
function actualizarEstado4()
{
    if(this.jugadoresTotal >=4 && this.vidasInt4 >0)
{
    if(this.pause==0 && this.designer==0)
{
      if(bombasFull4.length< bombas4)
        {
                
         bombasFull4.create(myShip4.x, myShip4.y, 'bomba');
        countExplosion4 = 100;
         }   
         }  
         }  
}


    function cogerBomba()
{

}
   this.game.physics.arcade.collide(myShip, this.box);

 this.game.physics.arcade.collide(myShip2, this.box);

 this.game.physics.arcade.collide(myShip3, this.box);
this.game.physics.arcade.collide(myShip4, this.box);


   function pisoMovPasar()
   {
    this.resbalar = 1;

   }

   function pisoMovPasar2()
   {
    this.resbalar2 = 1;

   }

   function pisoMovPasar3()
   {
    this.resbalar3 = 1;

   }
   function pisoMovPasar4()
   {
    this.resbalar4 = 1;

   }
   this.game.physics.arcade.overlap(myShip, this.pisomov, pisoMovPasar, function(col1,col2){

   },this);
    this.game.physics.arcade.overlap(myShip2, this.pisomov, pisoMovPasar2, function(col1,col2){

   },this);
     this.game.physics.arcade.overlap(myShip3, this.pisomov, pisoMovPasar3, function(col1,col2){

   },this);
      this.game.physics.arcade.overlap(myShip4, this.pisomov, pisoMovPasar4, function(col1,col2){

   },this);


this.game.physics.arcade.overlap(myShip, explosionUp,bajarvidas, function(col1,col2){
   },this);
this.game.physics.arcade.overlap(myShip, explosionUp2,bajarvidas, function(col1,col2){
   },this);
this.game.physics.arcade.overlap(myShip, explosionUp3,bajarvidas, function(col1,col2){
   },this);
this.game.physics.arcade.overlap(myShip, explosionUp4,bajarvidas, function(col1,col2){
   },this);

//puntuacion
this.game.physics.arcade.collide(myShip, explosionUp2,aumentarScore2, function(col1,col2){
   },this);
this.game.physics.arcade.collide(myShip, explosionUp3,aumentarScore3, function(col1,col2){
   },this);
this.game.physics.arcade.collide(myShip, explosionUp4,aumentarScore4, function(col1,col2){
   },this);

   
   this.game.physics.arcade.overlap(myShip, explosionDown, bajarvidas,function(col1,col2){
   },this);
    this.game.physics.arcade.overlap(myShip, explosionDown2, bajarvidas,function(col1,col2){
   },this);
     this.game.physics.arcade.overlap(myShip, explosionDown3, bajarvidas,function(col1,col2){
   },this);
      this.game.physics.arcade.overlap(myShip, explosionDown4, bajarvidas,function(col1,col2){
   },this);

      //puntuacion
        this.game.physics.arcade.collide(myShip, explosionDown2, aumentarScore2,function(col1,col2){
   },this);
     this.game.physics.arcade.collide(myShip, explosionDown3, aumentarScore3,function(col1,col2){
   },this);
      this.game.physics.arcade.collide(myShip, explosionDown4, aumentarScore4,function(col1,col2){
   },this);

   
   this.game.physics.arcade.overlap(myShip, explosionLeft,bajarvidas, function(col1,col2){
   },this);
    this.game.physics.arcade.overlap(myShip, explosionLeft2,bajarvidas, function(col1,col2){
   },this);
     this.game.physics.arcade.overlap(myShip, explosionLeft3,bajarvidas, function(col1,col2){
   },this);
      this.game.physics.arcade.overlap(myShip, explosionLeft4,bajarvidas, function(col1,col2){
   },this);
   
  //puntuacion
     this.game.physics.arcade.collide(myShip, explosionLeft2,aumentarScore2, function(col1,col2){
   },this);
     this.game.physics.arcade.collide(myShip, explosionLeft3,aumentarScore3, function(col1,col2){
   },this);
      this.game.physics.arcade.collide(myShip, explosionLeft4,aumentarScore4, function(col1,col2){
   },this);

   this.game.physics.arcade.overlap(myShip, explosionRight,bajarvidas, function(col1,col2){
   },this);
    this.game.physics.arcade.overlap(myShip, explosionRight2,bajarvidas, function(col1,col2){
   },this);
     this.game.physics.arcade.overlap(myShip, explosionRight3,bajarvidas, function(col1,col2){
   },this);
      this.game.physics.arcade.overlap(myShip, explosionRight4,bajarvidas, function(col1,col2){
   },this);
   
   //puntuacion

     this.game.physics.arcade.overlap(myShip, explosionRight2,aumentarScore2, function(col1,col2){

   },this);
     this.game.physics.arcade.overlap(myShip, explosionRight3,aumentarScore3, function(col1,col2){
   },this);
      this.game.physics.arcade.overlap(myShip, explosionRight4,aumentarScore4, function(col1,col2){
   },this);

   this.game.physics.arcade.collide(myShip,this.wallkill);
   this.game.physics.arcade.overlap(myShip,this.wallkill,bajarvidas, function(col1,col2){

   },this);
   

   //jugador2

this.game.physics.arcade.overlap(myShip2, explosionUp,bajarvidas2, function(col1,col2){
   },this);
this.game.physics.arcade.overlap(myShip2, explosionUp2,bajarvidas2, function(col1,col2){
   },this);
this.game.physics.arcade.overlap(myShip2, explosionUp3,bajarvidas2, function(col1,col2){
   },this);
this.game.physics.arcade.overlap(myShip2, explosionUp4,bajarvidas2, function(col1,col2){
   },this);

//puntuacion


this.game.physics.arcade.collide(myShip2, explosionUp,aumentarScore1, function(col1,col2){
   },this);
this.game.physics.arcade.collide(myShip2, explosionUp3,aumentarScore3, function(col1,col2){
   },this);
this.game.physics.arcade.collide(myShip2, explosionUp4,aumentarScore4, function(col1,col2){
   },this);

   
   this.game.physics.arcade.overlap(myShip2, explosionDown, bajarvidas2,function(col1,col2){
   },this);
    this.game.physics.arcade.overlap(myShip2, explosionDown2, bajarvidas2,function(col1,col2){
   },this);
     this.game.physics.arcade.overlap(myShip2, explosionDown3, bajarvidas2,function(col1,col2){
   },this);
      this.game.physics.arcade.overlap(myShip2, explosionDown4, bajarvidas2,function(col1,col2){
   },this);

      //puntuacion

   this.game.physics.arcade.collide(myShip2, explosionDown, aumentarScore1,function(col1,col2){
   },this);
     this.game.physics.arcade.collide(myShip2, explosionDown3, aumentarScore3,function(col1,col2){
   },this);
      this.game.physics.arcade.collide(myShip2, explosionDown4, aumentarScore4,function(col1,col2){
   },this);

   
   this.game.physics.arcade.overlap(myShip2, explosionLeft,bajarvidas2, function(col1,col2){
   },this);
    this.game.physics.arcade.overlap(myShip2, explosionLeft2,bajarvidas2, function(col1,col2){
   },this);
     this.game.physics.arcade.overlap(myShip2, explosionLeft3,bajarvidas2, function(col1,col2){
   },this);
      this.game.physics.arcade.overlap(myShip2, explosionLeft4,bajarvidas2, function(col1,col2){
   },this);
   

   //puntacion


   this.game.physics.arcade.collide(myShip2, explosionLeft,aumentarScore1, function(col1,col2){
   },this);
     this.game.physics.arcade.collide(myShip2, explosionLeft3,aumentarScore3, function(col1,col2){
   },this);
      this.game.physics.arcade.collide(myShip2, explosionLeft4,aumentarScore4, function(col1,col2){
   },this);
   
  
   this.game.physics.arcade.overlap(myShip2, explosionRight,bajarvidas2, function(col1,col2){
   },this);
    this.game.physics.arcade.overlap(myShip2, explosionRight2,bajarvidas2, function(col1,col2){
   },this);
     this.game.physics.arcade.overlap(myShip2, explosionRight3,bajarvidas2, function(col1,col2){
   },this);
      this.game.physics.arcade.overlap(myShip2, explosionRight4,bajarvidas2, function(col1,col2){
   },this);

      //puntuacion


   this.game.physics.arcade.collide(myShip2, explosionRight,aumentarScore1, function(col1,col2){
   },this);
     this.game.physics.arcade.collide(myShip2, explosionRight3,aumentarScore3, function(col1,col2){
   },this);
      this.game.physics.arcade.collide(myShip2, explosionRight4,aumentarScore4, function(col1,col2){
   },this);

   
   
   this.game.physics.arcade.collide(myShip2,this.wallkill);

   this.game.physics.arcade.overlap(myShip2,this.wallkill,bajarvidas2, function(col1,col2){

   },this);
   
    //jugador3


this.game.physics.arcade.overlap(myShip3, explosionUp,bajarvidas3, function(col1,col2){
   },this);
this.game.physics.arcade.overlap(myShip3, explosionUp2,bajarvidas3, function(col1,col2){
   },this);
this.game.physics.arcade.overlap(myShip3, explosionUp3,bajarvidas3, function(col1,col2){
   },this);
this.game.physics.arcade.overlap(myShip3, explosionUp4,bajarvidas3, function(col1,col2){
   },this);

//puntacion


this.game.physics.arcade.collide(myShip3, explosionUp,aumentarScore1, function(col1,col2){
   },this);
this.game.physics.arcade.collide(myShip3, explosionUp2,aumentarScore2, function(col1,col2){
   },this);
this.game.physics.arcade.collide(myShip3, explosionUp4,aumentarScore4, function(col1,col2){
   },this);

   
   this.game.physics.arcade.overlap(myShip3, explosionDown, bajarvidas3,function(col1,col2){
   },this);
    this.game.physics.arcade.overlap(myShip3, explosionDown2, bajarvidas3,function(col1,col2){
   },this);
     this.game.physics.arcade.overlap(myShip3, explosionDown3, bajarvidas3,function(col1,col2){
   },this);
      this.game.physics.arcade.overlap(myShip3, explosionDown4, bajarvidas3,function(col1,col2){
   },this);

      //Puntacion


   this.game.physics.arcade.collide(myShip3, explosionDown, aumentarScore1,function(col1,col2){
   },this);
    this.game.physics.arcade.collide(myShip3, explosionDown2, aumentarScore2,function(col1,col2){
   },this);
      this.game.physics.arcade.collide(myShip3, explosionDown4, aumentarScore4,function(col1,col2){
   },this);

   
   this.game.physics.arcade.overlap(myShip3, explosionLeft,bajarvidas3, function(col1,col2){
   },this);
    this.game.physics.arcade.overlap(myShip3, explosionLeft2,bajarvidas3, function(col1,col2){
   },this);
     this.game.physics.arcade.overlap(myShip3, explosionLeft3,bajarvidas3, function(col1,col2){
   },this);
      this.game.physics.arcade.overlap(myShip3, explosionLeft4,bajarvidas3, function(col1,col2){
   },this);
   
   //puntacion
 
   this.game.physics.arcade.collide(myShip3, explosionLeft,aumentarScore1, function(col1,col2){
   },this);
    this.game.physics.arcade.collide(myShip3, explosionLeft2,aumentarScore2, function(col1,col2){
   },this);
      this.game.physics.arcade.collide(myShip3, explosionLeft4,aumentarScore4, function(col1,col2){
   },this);
   


   this.game.physics.arcade.overlap(myShip3, explosionRight,bajarvidas3, function(col1,col2){
   },this);
    this.game.physics.arcade.overlap(myShip3, explosionRight2,bajarvidas3, function(col1,col2){
   },this);
     this.game.physics.arcade.overlap(myShip3, explosionRight3,bajarvidas3, function(col1,col2){
   },this);
      this.game.physics.arcade.overlap(myShip3, explosionRight4,bajarvidas3, function(col1,col2){
   },this);

      //puntacion


   this.game.physics.arcade.collide(myShip3, explosionRight,aumentarScore1, function(col1,col2){
   },this);
    this.game.physics.arcade.collide(myShip3, explosionRight2,aumentarScore2, function(col1,col2){
   },this);
      this.game.physics.arcade.collide(myShip3, explosionRight4,aumentarScore4, function(col1,col2){
   },this);

 this.game.physics.arcade.collide(myShip3,this.wallkill);

   this.game.physics.arcade.overlap(myShip3,this.wallkill,bajarvidas3, function(col1,col2){

   },this);
   

    //jugador4


this.game.physics.arcade.overlap(myShip4, explosionUp,bajarvidas4, function(col1,col2){
   },this);
this.game.physics.arcade.overlap(myShip4, explosionUp2,bajarvidas4, function(col1,col2){
   },this);
this.game.physics.arcade.overlap(myShip4, explosionUp3,bajarvidas4, function(col1,col2){
   },this);
this.game.physics.arcade.overlap(myShip4, explosionUp4,bajarvidas4, function(col1,col2){
   },this);

//puntuacion



this.game.physics.arcade.collide(myShip4, explosionUp,aumentarScore1, function(col1,col2){
   },this);
this.game.physics.arcade.collide(myShip4, explosionUp2,aumentarScore2, function(col1,col2){
   },this);
this.game.physics.arcade.collide(myShip4, explosionUp3,aumentarScore3, function(col1,col2){
   },this);

   
   this.game.physics.arcade.overlap(myShip4, explosionDown, bajarvidas4,function(col1,col2){
   },this);
    this.game.physics.arcade.overlap(myShip4, explosionDown2, bajarvidas4,function(col1,col2){
   },this);
     this.game.physics.arcade.overlap(myShip4, explosionDown3, bajarvidas4,function(col1,col2){
   },this);
      this.game.physics.arcade.overlap(myShip4, explosionDown4, bajarvidas4,function(col1,col2){
   },this);

      //Puntuacion


   this.game.physics.arcade.overlap(myShip4, explosionDown, aumentarScore1,function(col1,col2){
   },this);
    this.game.physics.arcade.overlap(myShip4, explosionDown2, aumentarScore2,function(col1,col2){
   },this);
     this.game.physics.arcade.overlap(myShip4, explosionDown3, aumentarScore3,function(col1,col2){
   },this);

   
   this.game.physics.arcade.overlap(myShip4, explosionLeft,bajarvidas4, function(col1,col2){
   },this);
    this.game.physics.arcade.overlap(myShip4, explosionLeft2,bajarvidas4, function(col1,col2){
   },this);
     this.game.physics.arcade.overlap(myShip4, explosionLeft3,bajarvidas4, function(col1,col2){
   },this);
      this.game.physics.arcade.overlap(myShip4, explosionLeft4,bajarvidas4, function(col1,col2){
   },this);
   
   //Puntuacion


   
   this.game.physics.arcade.collide(myShip4, explosionLeft,aumentarScore1, function(col1,col2){
   },this);
    this.game.physics.arcade.collide(myShip4, explosionLeft2,aumentarScore2, function(col1,col2){
   },this);
     this.game.physics.arcade.collide(myShip4, explosionLeft3,aumentarScore3, function(col1,col2){
   },this);
  
   


   this.game.physics.arcade.overlap(myShip4, explosionRight,bajarvidas4, function(col1,col2){
   },this);
    this.game.physics.arcade.overlap(myShip4, explosionRight2,bajarvidas4, function(col1,col2){
   },this);
     this.game.physics.arcade.overlap(myShip4, explosionRight3,bajarvidas4, function(col1,col2){
   },this);
      this.game.physics.arcade.overlap(myShip4, explosionRight4,bajarvidas4, function(col1,col2){
   },this);

//puntuacion 



   this.game.physics.arcade.collide(myShip4, explosionRight,aumentarScore1, function(col1,col2){
   },this);
    this.game.physics.arcade.collide(myShip4, explosionRight2,aumentarScore2, function(col1,col2){
   },this);
     this.game.physics.arcade.collide(myShip4, explosionRight3,aumentarScore3, function(col1,col2){
   },this);
 

 this.game.physics.arcade.collide(myShip4,this.wallkill);

   this.game.physics.arcade.overlap(myShip4,this.wallkill,bajarvidas4, function(col1,col2){

   },this);





    this.game.physics.arcade.collide(this.enemigos,this.wallkill);

   this.game.physics.arcade.overlap(this.enemigos,this.wallkill, aumentarScore, function(col1,col2){
    col1.destroy();
   },this);
   
this.game.physics.arcade.collide(myShip,bombasFull);
this.game.physics.arcade.collide(myShip,bombasFull2);
this.game.physics.arcade.collide(myShip,bombasFull3);
this.game.physics.arcade.collide(myShip,bombasFull4);


this.game.physics.arcade.collide(myShip2,bombasFull);
this.game.physics.arcade.collide(myShip2,bombasFull2);
this.game.physics.arcade.collide(myShip2,bombasFull3);
this.game.physics.arcade.collide(myShip2,bombasFull4);


this.game.physics.arcade.collide(myShip3,bombasFull);
this.game.physics.arcade.collide(myShip3,bombasFull2);
this.game.physics.arcade.collide(myShip3,bombasFull3);
this.game.physics.arcade.collide(myShip3,bombasFull4);

this.game.physics.arcade.collide(myShip4,bombasFull);
this.game.physics.arcade.collide(myShip4,bombasFull2);
this.game.physics.arcade.collide(myShip4,bombasFull3);
this.game.physics.arcade.collide(myShip4,bombasFull4);

this.game.physics.arcade.collide(this.enemigos,bombasFull);
this.game.physics.arcade.collide(this.enemigos,bombasFull2);
this.game.physics.arcade.collide(this.enemigos,bombasFull3);
this.game.physics.arcade.collide(this.enemigos,bombasFull4);
this.game.physics.arcade.collide(this.enemigos,this.pisor2);

   this.game.physics.arcade.collide(myShip, this.boxFuerte);
 this.game.physics.arcade.collide(myShip, this.boxFuerte2);
  this.game.physics.arcade.collide(myShip, this.pisor2);

  this.game.physics.arcade.collide(myShip2, this.boxFuerte);
 this.game.physics.arcade.collide(myShip2, this.boxFuerte2);
  this.game.physics.arcade.collide(myShip2, this.pisor2);


  this.game.physics.arcade.collide(myShip3, this.boxFuerte);
 this.game.physics.arcade.collide(myShip3, this.boxFuerte2);
  this.game.physics.arcade.collide(myShip3, this.pisor2);

  this.game.physics.arcade.collide(myShip4, this.boxFuerte);
 this.game.physics.arcade.collide(myShip4, this.boxFuerte2);
  this.game.physics.arcade.collide(myShip4, this.pisor2);
 
 
   this.game.physics.arcade.collide(this.boxFuerte,this.powerups,function(col1,col2)
    {
        col2.destroy();
    });


    this.game.physics.arcade.collide(explosionUp,this.box, function(col1,col2){
    col1.destroy();
    col2.destroy();
   });
     this.game.physics.arcade.collide(explosionDown,this.box, function(col1,col2){
    col1.destroy();
    col2.destroy();
   });
   this.game.physics.arcade.collide(explosionLeft,this.box, function(col1,col2){
    col1.destroy();
    col2.destroy();
   });
   this.game.physics.arcade.collide(explosionRight,this.box, function(col1,col2){
    col1.destroy();
    col2.destroy();
   });

   this.game.physics.arcade.collide(explosionUp2,this.box, function(col1,col2){
    col1.destroy();
    col2.destroy();
   });
     this.game.physics.arcade.collide(explosionDown2,this.box, function(col1,col2){
    col1.destroy();
    col2.destroy();
   });
   this.game.physics.arcade.collide(explosionLeft2,this.box, function(col1,col2){
    col1.destroy();
    col2.destroy();
   });
   this.game.physics.arcade.collide(explosionRight2,this.box, function(col1,col2){
    col1.destroy();
    col2.destroy();
   });

   this.game.physics.arcade.collide(explosionUp3,this.box, function(col1,col2){
    col1.destroy();
    col2.destroy();
   });
     this.game.physics.arcade.collide(explosionDown3,this.box, function(col1,col2){
    col1.destroy();
    col2.destroy();
   });
   this.game.physics.arcade.collide(explosionLeft3,this.box, function(col1,col2){
    col1.destroy();
    col2.destroy();
   });
   this.game.physics.arcade.collide(explosionRight3,this.box, function(col1,col2){
    col1.destroy();
    col2.destroy();
   });

   this.game.physics.arcade.collide(explosionUp4,this.box, function(col1,col2){
    col1.destroy();
    col2.destroy();
   });
     this.game.physics.arcade.collide(explosionDown4,this.box, function(col1,col2){
    col1.destroy();
    col2.destroy();
   });
   this.game.physics.arcade.collide(explosionLeft4,this.box, function(col1,col2){
    col1.destroy();
    col2.destroy();
   });
   this.game.physics.arcade.collide(explosionRight4,this.box, function(col1,col2){
    col1.destroy();
    col2.destroy();
   });

function crearpisor2()
{
    this.pisor2.create(this.pisor2X, this.pisor2Y,'pisor2');
}

  //colision rompible 1
   this.game.physics.arcade.collide(explosionUp,this.pisor1,crearpisor2, function(col1,col2){
      this.pisor2X = col2.x;
this.pisor2Y = col2.y;
      col2.destroy();
    
   },this);

     this.game.physics.arcade.collide(explosionDown,this.pisor1,crearpisor2, function(col1,col2){
          this.pisor2X = col2.x;
this.pisor2Y = col2.y;
    col2.destroy();
  },this);
   this.game.physics.arcade.collide(explosionLeft,this.pisor1,crearpisor2, function(col1,col2){
      this.pisor2X = col2.x;
this.pisor2Y = col2.y;
    col2.destroy();
  },this);
   this.game.physics.arcade.collide(explosionRight,this.pisor1,crearpisor2, function(col1,col2){
      this.pisor2X = col2.x;
this.pisor2Y = col2.y;
    col2.destroy();
   },this);

//colision rompible 2
   this.game.physics.arcade.collide(explosionUp2,this.pisor1,crearpisor2, function(col1,col2){
      this.pisor2X = col2.x;
this.pisor2Y = col2.y;
      col2.destroy();
    
   },this);

     this.game.physics.arcade.collide(explosionDown2,this.pisor1,crearpisor2, function(col1,col2){
          this.pisor2X = col2.x;
this.pisor2Y = col2.y;
    col2.destroy();
  },this);
   this.game.physics.arcade.collide(explosionLeft2,this.pisor1,crearpisor2, function(col1,col2){
      this.pisor2X = col2.x;
this.pisor2Y = col2.y;
    col2.destroy();
  },this);
   this.game.physics.arcade.collide(explosionRight2,this.pisor1,crearpisor2, function(col1,col2){
      this.pisor2X = col2.x;
this.pisor2Y = col2.y;
    col2.destroy();
   },this);


//colision rompible 3
   this.game.physics.arcade.collide(explosionUp3,this.pisor1,crearpisor2, function(col1,col2){
      this.pisor2X = col2.x;
this.pisor2Y = col2.y;
      col2.destroy();
    
   },this);

     this.game.physics.arcade.collide(explosionDown3,this.pisor1,crearpisor2, function(col1,col2){
          this.pisor2X = col2.x;
this.pisor2Y = col2.y;
    col2.destroy();
  },this);
   this.game.physics.arcade.collide(explosionLeft3,this.pisor1,crearpisor2, function(col1,col2){
      this.pisor2X = col2.x;
this.pisor2Y = col2.y;
    col2.destroy();
  },this);
   this.game.physics.arcade.collide(explosionRight3,this.pisor1,crearpisor2, function(col1,col2){
      this.pisor2X = col2.x;
this.pisor2Y = col2.y;
    col2.destroy();
   },this);

//colision rompible 4
   this.game.physics.arcade.collide(explosionUp4,this.pisor1,crearpisor2, function(col1,col2){
      this.pisor2X = col2.x;
this.pisor2Y = col2.y;
      col2.destroy();
    
   },this);

     this.game.physics.arcade.collide(explosionDown4,this.pisor1,crearpisor2, function(col1,col2){
          this.pisor2X = col2.x;
this.pisor2Y = col2.y;
    col2.destroy();
  },this);
   this.game.physics.arcade.collide(explosionLeft4,this.pisor1,crearpisor2, function(col1,col2){
      this.pisor2X = col2.x;
this.pisor2Y = col2.y;
    col2.destroy();
  },this);
   this.game.physics.arcade.collide(explosionRight4,this.pisor1,crearpisor2, function(col1,col2){
      this.pisor2X = col2.x;
this.pisor2Y = col2.y;
    col2.destroy();
   },this);



//COLISION CON ENEMIGOS
 this.game.physics.arcade.collide(this.enemigos,this.boxFuerte, function(col1,col2){

   });

this.game.physics.arcade.collide(this.enemigos,this.boxFuerte2, function(col1,col2){

   });

 this.game.physics.arcade.collide(this.enemigos,this.box, function(col1,col2){

   });

this.game.physics.arcade.collide(this.enemigos,explosionUp,aumentarScore, function(col1,col2){
      col1.destroy();
    
   },this);

this.game.physics.arcade.collide(this.enemigos,explosionDown, aumentarScore, function(col1,col2){
    col1.destroy();
   
   },this);


this.game.physics.arcade.collide(this.enemigos,explosionLeft, aumentarScore, function(col1,col2){
    col1.destroy();

   },this);

this.game.physics.arcade.collide(this.enemigos,explosionRight, aumentarScore, function(col1,col2){
    col1.destroy();

   },this);

//2

this.game.physics.arcade.collide(this.enemigos,explosionUp2,aumentarScore, function(col1,col2){
      col1.destroy();
    
   },this);

this.game.physics.arcade.collide(this.enemigos,explosionDown2, aumentarScore, function(col1,col2){
    col1.destroy();
   
   },this);


this.game.physics.arcade.collide(this.enemigos,explosionLeft2, aumentarScore, function(col1,col2){
    col1.destroy();

   },this);

this.game.physics.arcade.collide(this.enemigos,explosionRight2, aumentarScore, function(col1,col2){
    col1.destroy();

   },this);

//3

this.game.physics.arcade.collide(this.enemigos,explosionUp3,aumentarScore, function(col1,col2){
      col1.destroy();
    
   },this);

this.game.physics.arcade.collide(this.enemigos,explosionDown3, aumentarScore, function(col1,col2){
    col1.destroy();
   
   },this);


this.game.physics.arcade.collide(this.enemigos,explosionLeft3, aumentarScore, function(col1,col2){
    col1.destroy();

   },this);

this.game.physics.arcade.collide(this.enemigos,explosionRight3, aumentarScore, function(col1,col2){
    col1.destroy();

   },this);


//4

this.game.physics.arcade.collide(this.enemigos,explosionUp4,aumentarScore, function(col1,col2){
      col1.destroy();
    
   },this);

this.game.physics.arcade.collide(this.enemigos,explosionDown4, aumentarScore, function(col1,col2){
    col1.destroy();
   
   },this);


this.game.physics.arcade.collide(this.enemigos,explosionLeft4, aumentarScore, function(col1,col2){
    col1.destroy();

   },this);

this.game.physics.arcade.collide(this.enemigos,explosionRight4, aumentarScore, function(col1,col2){
    col1.destroy();

   },this);

function bajarvidas2()
{
if(this.cooldownP2 ==0)
    {
         this.cooldownP2 =1;
        this.cooldownP2tick=300;

     if(this.vidasInt2 <= 1)
   {
    this.vidasInt2 = this.vidasInt2 - 1;
        this.vidasJ2.setText(this.vidasInt2);    

     myShip2.x = 10000;
   myShip2.y = 10000;
   }
   else
   {
    this.vidasInt2 = this.vidasInt2 - 1;
    this.vidasJ2.setText(this.vidasInt2);    

if(this.relojInt > 0)
  {
   myShip2.x = 1820;
   myShip2.y = 130;
 }
    }
}
}

function bajarvidas3()
{
    if(this.cooldownP3 ==0)
    {
 this.cooldownP3 =1;
        this.cooldownP3tick=300;

       if(this.vidasInt3 <= 1)
   {
    this.vidasInt3 = this.vidasInt3 - 1;
        this.vidasJ3.setText(this.vidasInt3); 

         myShip3.x = 10000;
   myShip3.y = 10000;
}
else
{
this.vidasInt3 = this.vidasInt3 - 1;
    this.vidasJ3.setText(this.vidasInt3); 
 
if(this.relojInt > 0)
  {
   myShip3.x = 420;
   myShip3.y = 885;
}
}
}
}
function bajarvidas4()
{
    if(this.cooldownP4 ==0)
    {

         this.cooldownP4 =1;
        this.cooldownP4tick=300;
     if(this.vidasInt4 <= 1)
   {
     this.vidasInt4 = this.vidasInt4 - 1;
         this.vidasJ4.setText(this.vidasInt4);   

      myShip4.x = 10000;
   myShip4.y = 10000;
}
else
{
     this.vidasInt4 = this.vidasInt4 - 1;
    this.vidasJ4.setText(this.vidasInt4);   
 
 if(this.relojInt > 0)
  {
   myShip4.x = 1820;
   myShip4.y = 885;
}
}
}
}

function bajarvidas()
{

    if(this.cooldownP1 ==0)
    {
        this.cooldownP1 =1;
        this.cooldownP1tick=300;
      
        if(this.gamemode==0)
        {
        //    this.relojInt = 300;
      //this.caerparedX =-1;
 //this.caerparedY = 1;
// this.wallkill.clear(this.scene);

}

   if(this.vidasInt > 1)
   {

    this.vidasInt = this.vidasInt - 1;
   
  
  if(this.relojInt > 0)
  {
   myShip.x = 420;
   myShip.y = 130;
    }
    this.vidas.setText(this.vidasInt);
}
else
{

        if(this.gamemode ==0 || this.gamemode ==1 || this.gamemode ==2)
        {
    this.vidasInt = this.vidasInt - 1;
    this.vidas.setText(this.vidasInt);    

   myShip.x = 5000;
   myShip.y = 5000;
    
}





}
}
}


this.game.physics.arcade.overlap(this.enemigos,myShip, bajarvidas, function(col1,col2){

   }, this);
this.game.physics.arcade.overlap(this.enemigos,myShip2, bajarvidas2, function(col1,col2){

   }, this);
this.game.physics.arcade.overlap(this.enemigos,myShip3, bajarvidas3, function(col1,col2){

   }, this);
this.game.physics.arcade.overlap(this.enemigos,myShip4, bajarvidas4, function(col1,col2){

   }, this);



this.game.physics.arcade.collide(explosionUp,this.minas, function(col1,col2){
    col2.destroy();
    
   });
     this.game.physics.arcade.collide(explosionDown,this.minas, function(col1,col2){
    col2.destroy();
   
   });
   this.game.physics.arcade.collide(explosionLeft,this.minas, function(col1,col2){
    col2.destroy();
  
   });
   this.game.physics.arcade.collide(explosionRight,this.minas, function(col1,col2){
    col2.destroy();
    
   });

   //2


this.game.physics.arcade.collide(explosionUp2,this.minas, function(col1,col2){
    col2.destroy();
    
   });
     this.game.physics.arcade.collide(explosionDown2,this.minas, function(col1,col2){
    col2.destroy();
   
   });
   this.game.physics.arcade.collide(explosionLeft2,this.minas, function(col1,col2){
    col2.destroy();
  
   });
   this.game.physics.arcade.collide(explosionRight2,this.minas, function(col1,col2){
    col2.destroy();
    
   });

    //3


this.game.physics.arcade.collide(explosionUp3,this.minas, function(col1,col2){
    col2.destroy();
    
   });
     this.game.physics.arcade.collide(explosionDown3,this.minas, function(col1,col2){
    col2.destroy();
   
   });
   this.game.physics.arcade.collide(explosionLeft3,this.minas, function(col1,col2){
    col2.destroy();
  
   });
   this.game.physics.arcade.collide(explosionRight3,this.minas, function(col1,col2){
    col2.destroy();
    
   });


    //4


this.game.physics.arcade.collide(explosionUp4,this.minas, function(col1,col2){
    col2.destroy();
    
   });
     this.game.physics.arcade.collide(explosionDown4,this.minas, function(col1,col2){
    col2.destroy();
   
   });
   this.game.physics.arcade.collide(explosionLeft4,this.minas, function(col1,col2){
    col2.destroy();
  
   });
   this.game.physics.arcade.collide(explosionRight4,this.minas, function(col1,col2){
    col2.destroy();
    
   });


//1
    this.game.physics.arcade.collide(explosionUp,this.boxFuerte, function(col1,col2){
    col1.destroy();
    
   });
     this.game.physics.arcade.collide(explosionDown,this.boxFuerte, function(col1,col2){
    col1.destroy();
   
   });
   this.game.physics.arcade.collide(explosionLeft,this.boxFuerte, function(col1,col2){
    col1.destroy();
  
   });
   this.game.physics.arcade.collide(explosionRight,this.boxFuerte, function(col1,col2){
    col1.destroy();
    
   });


//2
    this.game.physics.arcade.collide(explosionUp2,this.boxFuerte, function(col1,col2){
    col1.destroy();
    
   });
     this.game.physics.arcade.collide(explosionDown2,this.boxFuerte, function(col1,col2){
    col1.destroy();
   
   });
   this.game.physics.arcade.collide(explosionLeft2,this.boxFuerte, function(col1,col2){
    col1.destroy();
  
   });
   this.game.physics.arcade.collide(explosionRight2,this.boxFuerte, function(col1,col2){
    col1.destroy();
    
   });


//3
    this.game.physics.arcade.collide(explosionUp3,this.boxFuerte, function(col1,col2){
    col1.destroy();
    
   });
     this.game.physics.arcade.collide(explosionDown3,this.boxFuerte, function(col1,col2){
    col1.destroy();
   
   });
   this.game.physics.arcade.collide(explosionLeft3,this.boxFuerte, function(col1,col2){
    col1.destroy();
  
   });
   this.game.physics.arcade.collide(explosionRight3,this.boxFuerte, function(col1,col2){
    col1.destroy();
    
   });


//4
    this.game.physics.arcade.collide(explosionUp4,this.boxFuerte, function(col1,col2){
    col1.destroy();
    
   });
     this.game.physics.arcade.collide(explosionDown4,this.boxFuerte, function(col1,col2){
    col1.destroy();
   
   });
   this.game.physics.arcade.collide(explosionLeft4,this.boxFuerte, function(col1,col2){
    col1.destroy();
  
   });
   this.game.physics.arcade.collide(explosionRight4,this.boxFuerte, function(col1,col2){
    col1.destroy();
    
   });
//1

 this.game.physics.arcade.collide(explosionUp,this.boxFuerte2, function(col1,col2){
    col1.destroy();
    
   });
     this.game.physics.arcade.collide(explosionDown,this.boxFuerte2, function(col1,col2){
    col1.destroy();
   
   });
   this.game.physics.arcade.collide(explosionLeft,this.boxFuerte2, function(col1,col2){
    col1.destroy();
  
   });
   this.game.physics.arcade.collide(explosionRight,this.boxFuerte2, function(col1,col2){
    col1.destroy();
    
   });


//2

 this.game.physics.arcade.collide(explosionUp2,this.boxFuerte2, function(col1,col2){
    col1.destroy();
    
   });
     this.game.physics.arcade.collide(explosionDown2,this.boxFuerte2, function(col1,col2){
    col1.destroy();
   
   });
   this.game.physics.arcade.collide(explosionLeft2,this.boxFuerte2, function(col1,col2){
    col1.destroy();
  
   });
   this.game.physics.arcade.collide(explosionRight2,this.boxFuerte2, function(col1,col2){
    col1.destroy();
    
   });


//3

 this.game.physics.arcade.collide(explosionUp3,this.boxFuerte2, function(col1,col2){
    col1.destroy();
    
   });
     this.game.physics.arcade.collide(explosionDown3,this.boxFuerte2, function(col1,col2){
    col1.destroy();
   
   });
   this.game.physics.arcade.collide(explosionLeft3,this.boxFuerte2, function(col1,col2){
    col1.destroy();
  
   });
   this.game.physics.arcade.collide(explosionRight3,this.boxFuerte2, function(col1,col2){
    col1.destroy();
    
   });



//4

 this.game.physics.arcade.collide(explosionUp4,this.boxFuerte2, function(col1,col2){
    col1.destroy();
    
   });
     this.game.physics.arcade.collide(explosionDown4,this.boxFuerte2, function(col1,col2){
    col1.destroy();
   
   });
   this.game.physics.arcade.collide(explosionLeft4,this.boxFuerte2, function(col1,col2){
    col1.destroy();
  
   });
   this.game.physics.arcade.collide(explosionRight4,this.boxFuerte2, function(col1,col2){
    col1.destroy();
    
   });


 function aumentarScore1()
{

if(this.gamemode == 1 || this.gamemode == 2)
{
   // this.scoreInt = this.scoreInt + 500;
   // this.scoreInt = this.scoreInt + 500;
   if(this.cooldownP2tick==300)
    this.killsInt = this.killsInt +1;

 if(this.cooldownP3tick==300)
    this.killsInt = this.killsInt +1;

if(this.cooldownP4tick==300)
    this.killsInt = this.killsInt +1;
    //this.score.setText(this.scoreInt);
    this.kills.setText(this.killsInt);
  }
}


 function aumentarScore2()
{

if(this.gamemode == 1 || this.gamemode == 2)
{
   // this.scoreInt = this.scoreInt + 500;
   if(this.cooldownP1tick==300)
    this.killsInt2 = this.killsInt2 +1;

 if(this.cooldownP3tick==300)
    this.killsInt2 = this.killsInt2 +1;

if(this.cooldownP4tick==300)
    this.killsInt2 = this.killsInt2 +1;

    //this.score.setText(this.scoreInt);
    this.killsJ2.setText(this.killsInt2);
 } 
}

 function aumentarScore3()
{
if(this.gamemode == 1 || this.gamemode == 2)
{
   // this.scoreInt = this.scoreInt + 500;
     if(this.cooldownP1tick==300)
    this.killsInt3 = this.killsInt3 +1;

 if(this.cooldownP2tick==300)
    this.killsInt3 = this.killsInt3 +1;

if(this.cooldownP4tick==300)
    this.killsInt3 = this.killsInt3 +1;

    //this.score.setText(this.scoreInt);
    this.killsJ3.setText(this.killsInt3);
  }
}

 function aumentarScore4()
{
if(this.gamemode == 1 || this.gamemode == 2)
{
   // this.scoreInt = this.scoreInt + 500;
    if(this.cooldownP1tick==300)
    this.killsInt4 = this.killsInt4 +1;

 if(this.cooldownP2tick==300)
    this.killsInt4 = this.killsInt4 +1;

if(this.cooldownP3tick==300)
    this.killsInt4 = this.killsInt4 +1;


    //this.score.setText(this.scoreInt);
    this.killsJ4.setText(this.killsInt4);
  }
}
   function aumentarScore()
{

    this.scoreInt = this.scoreInt + 500;

    if(this.gamemode ==0)
    {
    this.killsInt = this.enemigos.length;
   }
   this.score.setText(this.scoreInt);
    this.kills.setText(this.killsInt);
    //this.score.setFontSize(this.scoreInt);


    if(this.enemigos.length <=0)
    {
    
  this.caerparedX =-1;
 this.caerparedY = 1;
  this.disminuirX = 0;
    this.disminuirY = 0;
    this.caerEnX = 1;
    this.caerEnY = 0;

if(this.nivelInt <=99)
    this.nivelInt = this.nivelInt + 1;
//this.wallkill.clear(this.scene);
this.relojInt = 300;

   this.nivel.setText(this.nivelInt);
   this.score.setText(this.scoreInt);
    this.vidas.setText(this.vidasInt);
/*this.powerupsLlamas.clear(this.scene);
this.powerupsVidas.clear(this.scene);
this.wallkill.clear(this.scene);

this.pisor1.clear(this.scene);
this.pisor2.clear(this.scene);
this.powerupsGuantes.clear(this.scene);
this.powerupsPatin.clear(this.scene);
this.powerupsBombas.clear(this.scene);
this.box.clear(this.scene);
this.boxFuerte.clear(this.scene);
this.enemigos.clear(this.scene);
explosionRight.clear(this.scene);
explosionLeft.clear(this.scene);
explosionDown.clear(this.scene);
explosionUp.clear(this.scene);*/
    for (var i = -1; i < 22; i++)
    {
for (var j = 1; j < 14; j++)
    {
        if(i > -2 && i < 1 && j > 0 && j < 3)
        {
            
        }
        else
        {
          var item = this.game.rnd.integerInRange(0, 40)

     if(item ==1)
     {
     this.powerupsLlamas.create(480+ i*32*2,  64 + j*32*2, 'poderllama');
     this.box.create(480+ i*32*2, 64 + j*32*2, 'wall');
    }
    if(item ==2)
    {
     this.powerupsPatin.create(480+ i*32*2,  64 + j*32*2, 'poderpatin');
     this.box.create(480+ i*32*2, 64 + j*32*2, 'wall');
    }
    if(item ==3)
    {
     this.powerupsBombas.create(480+ i*32*2,  64 + j*32*2, 'poderbomba');
     this.box.create(480+ i*32*2, 64 + j*32*2, 'wall');
    }
    if(item ==36)
    {
     this.powerupsVidas.create(480+ i*32*2,  64 + j*32*2, 'podervida');
     this.box.create(480+ i*32*2, 64 + j*32*2, 'wall');
    }
     if(item ==38)
    {
     this.powerupsGuantes.create(480+ i*32*2,  64 + j*32*2, 'poderguante');
     this.box.create(480+ i*32*2, 64 + j*32*2, 'wall');
    }
   if(item ==4)
     this.boxFuerte.create(480+ i*32*2,  64 + j*32*2, 'wall2');
   if(item > 5 && item <6+this.nivelInt){

     if(i > 0 && i < 20 && j > 2 && j < 12)
        {
    if(this.enemigos.length<3+this.nivelInt)
    {
    if(this.gamemode==0)
{
     this.enemigos.create(480+ i*32*2,  64 + j*32*2, 'enemigo');
}
    }
}
    }

    if(item >16 && item < 28)
        this.box.create(480+ i*32*2, 64 + j*32*2, 'wall');

  if(item >29 && item < 32)
        this.pisor1.create(480+ i*32*2, 64 + j*32*2, 'pisor1');
  if(item >33 && item < 35)
        this.pisomov.create(480+ i*32*2, 64 + j*32*2, 'pisomov');


   
        
 
     //   var box = this.add.image(x, y, 'crate');
      //      box.setInteractive();
   this.kills.setText(this.enemigos.length);



if(this.vidasInt >0  && this.vidasInt >0)
{
    myShip.x = 430;
    myShip.y = 130;
    this.vidas.setText(this.vidasInt);


}


if(this.jugadoresTotal >=2 && this.vidasInt2 >0)
{
  myShip2.x = 1820;
   myShip2.y = 130;
    this.vidasJ2.setText(this.vidasInt2);


}   
if(this.jugadoresTotal >=3 && this.vidasInt3 >0)
{
   myShip3.x = 420;
   myShip3.y = 885;

    this.vidasJ3.setText(this.vidasInt3);
}   
if(this.jugadoresTotal >=4 && this.vidasInt4 >0)
{
  myShip4.x = 1820;
   myShip4.y = 885;
     this.vidasJ4.setText(this.vidasInt4);
}

     }


 }
 }

    }

}
function aumentarllamas()
{
    this.scoreInt = this.scoreInt + 100;
    this.llama = this.llama +1;  console.log("llama");
    this.score.setText(this.scoreInt);
}
function aumentarllamas2()
{
    this.scoreInt = this.scoreInt + 100;
    this.llama2 = this.llama2 +1;  console.log("llama2");
    this.score.setText(this.scoreInt);
}
function aumentarllamas3()
{
    this.scoreInt = this.scoreInt + 100;
    this.llama3 = this.llama3 +1;  console.log("llama3");
    this.score.setText(this.scoreInt);
}
function aumentarllamas4()
{
    this.scoreInt = this.scoreInt + 100;
    this.llama4 = this.llama4 +1;  console.log("llama4");
    this.score.setText(this.scoreInt);
}


  function aumentarBombas()
{
    this.scoreInt = this.scoreInt + 100;
    bombas = bombas +1;  console.log("bomba");
    this.score.setText(this.scoreInt);
}
 function aumentarBombas2()
{
    this.scoreInt = this.scoreInt + 100;
    bombas2 = bombas2 +1;  console.log("bomba2");
    this.score.setText(this.scoreInt);
}
 function aumentarBombas3()
{
    this.scoreInt = this.scoreInt + 100;
    bombas3 = bombas3 +1;  console.log("bomba3");
    this.score.setText(this.scoreInt);
}
 function aumentarBombas4()
{
    this.scoreInt = this.scoreInt + 100;
    bombas4 = bombas4 +1;  console.log("bomba4");
    this.score.setText(this.scoreInt);
}



function agregarGuante1()
{
   this.guanteP1 = 1;
     this.scoreInt = this.scoreInt + 100;
      this.score.setText(this.scoreInt);
    console.log("guante");   
}

function agregarGuante2()
{
   this.guanteP2 = 1;
     this.scoreInt = this.scoreInt + 100;
      this.score.setText(this.scoreInt);
    console.log("guante");   
}
function agregarGuante3()
{
   this.guanteP3 = 1;
     this.scoreInt = this.scoreInt + 100;
      this.score.setText(this.scoreInt);
    console.log("guante");   
}
function agregarGuante4()
{
   this.guanteP4 = 1;
     this.scoreInt = this.scoreInt + 100;
      this.score.setText(this.scoreInt);
    console.log("guante");   
}
function aumentarPatin()
{
    this.scoreInt = this.scoreInt + 100;
    this.patin = this.patin +5;
    console.log("velocidad");
    this.score.setText(this.scoreInt);
}

function aumentarPatin2()
{
    this.scoreInt = this.scoreInt + 100;
    this.patin2 = this.patin2 +5;
    console.log("velocidad2");
    this.score.setText(this.scoreInt);
}

function aumentarPatin3()
{
    this.scoreInt = this.scoreInt + 100;
    this.patin3 = this.patin3 +5;
    console.log("velocidad3");
    this.score.setText(this.scoreInt);
}

function aumentarPatin4()
{
    this.scoreInt = this.scoreInt + 100;
    this.patin4 = this.patin4 +5;
    console.log("velocidad4");
    this.score.setText(this.scoreInt);
}

function aumentarVida()
{
     this.scoreInt = this.scoreInt + 500;
    this.vidasInt = this.vidasInt + 1;
    console.log("vida");
    this.vidas.setText(this.vidasInt);
      this.score.setText(this.scoreInt);
}

function aumentarVida2()
{
     this.scoreInt = this.scoreInt + 500;
    this.vidasInt2 = this.vidasInt2 + 1;
    console.log("vida2");
    this.vidasJ2.setText(this.vidasInt2);
      this.score.setText(this.scoreInt);
}

function aumentarVida3()
{
     this.scoreInt = this.scoreInt + 500;
    this.vidasInt3 = this.vidasInt3 + 1;
    console.log("vida3");
    this.vidasJ3.setText(this.vidasInt3);
      this.score.setText(this.scoreInt);
}

function aumentarVida4()
{
     this.scoreInt = this.scoreInt + 500;
    this.vidasInt4 = this.vidasInt4 + 1;
    console.log("vida4");
    this.vidasJ4.setText(this.vidasInt4);
      this.score.setText(this.scoreInt);
}




this.game.physics.arcade.collide(myShip,this.powerupsBombas, aumentarBombas, function(col1,col2){
    col2.destroy();  
   },this);
this.game.physics.arcade.collide(myShip2,this.powerupsBombas, aumentarBombas2, function(col1,col2){
    col2.destroy();  
   },this);
this.game.physics.arcade.collide(myShip3,this.powerupsBombas, aumentarBombas3, function(col1,col2){
    col2.destroy();  
   },this);
this.game.physics.arcade.collide(myShip4,this.powerupsBombas, aumentarBombas4, function(col1,col2){
    col2.destroy();  
   },this);



  this.game.physics.arcade.collide(myShip,this.powerupsLlamas, aumentarllamas, function(col1,col2){
    col2.destroy();  
   },this);
  this.game.physics.arcade.collide(myShip2,this.powerupsLlamas, aumentarllamas2, function(col1,col2){
    col2.destroy();  
   },this);
this.game.physics.arcade.collide(myShip3,this.powerupsLlamas, aumentarllamas3, function(col1,col2){
    col2.destroy();  
   },this);
this.game.physics.arcade.collide(myShip4,this.powerupsLlamas, aumentarllamas4, function(col1,col2){
    col2.destroy();  
   },this);



 this.game.physics.arcade.collide(myShip,this.powerupsVidas, aumentarVida, function(col1,col2){
    col2.destroy();    
   },this);
 this.game.physics.arcade.collide(myShip2,this.powerupsVidas, aumentarVida2, function(col1,col2){
    col2.destroy();    
   },this);
 this.game.physics.arcade.collide(myShip3,this.powerupsVidas, aumentarVida3, function(col1,col2){
    col2.destroy();    
   },this);
 this.game.physics.arcade.collide(myShip4,this.powerupsVidas, aumentarVida4, function(col1,col2){
    col2.destroy();    
   },this);

  this.game.physics.arcade.collide(myShip,this.powerupsPatin, aumentarPatin, function(col1,col2){
    col2.destroy();    
   },this);
   this.game.physics.arcade.collide(myShip2,this.powerupsPatin, aumentarPatin2, function(col1,col2){
    col2.destroy();    
   },this);
    this.game.physics.arcade.collide(myShip3,this.powerupsPatin, aumentarPatin3, function(col1,col2){
    col2.destroy();    
   },this);
     this.game.physics.arcade.collide(myShip4,this.powerupsPatin, aumentarPatin4, function(col1,col2){
    col2.destroy();    
   },this);


  this.game.physics.arcade.collide(myShip,this.powerupsGuantes, agregarGuante1, function(col1,col2){
    col2.destroy();    
   },this);
   this.game.physics.arcade.collide(myShip2,this.powerupsGuantes, agregarGuante2, function(col1,col2){
    col2.destroy();    
   },this);
    this.game.physics.arcade.collide(myShip3,this.powerupsGuantes, agregarGuante3, function(col1,col2){
    col2.destroy();    
   },this);
     this.game.physics.arcade.collide(myShip4,this.powerupsGuantes, agregarGuante4, function(col1,col2){
    col2.destroy();    
   },this);
         
   this.game.physics.arcade.collide(myShip,this.powerups, function(col1,col2){
   

    col2.destroy();
         
    
   });

    this.game.physics.arcade.collide(myShip,this.minas, bajarvidas,function(col1,col2){
    col2.destroy();     
   },this);
     this.game.physics.arcade.collide(myShip2,this.minas, bajarvidas2,function(col1,col2){
    col2.destroy();     
   },this);
      this.game.physics.arcade.collide(myShip3,this.minas, bajarvidas3,function(col1,col2){
    col2.destroy();     
   },this);
       this.game.physics.arcade.collide(myShip4,this.minas, bajarvidas4,function(col1,col2){
    col2.destroy();     
   },this);

 this.game.physics.arcade.overlap(myShip,bombasFull, cogerBomba,function(col1,col2){
    
    if(this.guanteP1==2)
    {
        if(this.cursors.down.isDown)
        {
       
        col2.y = col2.y + 50;
        }

        if(this.cursors.left.isDown)
        {
       
        col2.x = col2.x - 50;
        }

          if(this.cursors.right.isDown)
        {
       
        col2.x = col2.x + 50;
        }
          if(this.cursors.up.isDown)
        {
       
          col2.y = col2.y - 50;
        }
    }

   },this);


 this.game.physics.arcade.overlap(myShip2,bombasFull2, cogerBomba,function(col1,col2){
    
    if(this.guanteP2==2)
    {
        if(this.downjugador2.isDown)
        {
       
        col2.y = col2.y + 50;
        }

        if(this.leftjugador2.isDown)
        {
       
        col2.x = col2.x - 50;
        }

          if(this.rightjugador2.isDown)
        {
       
        col2.x = col2.x + 50;
        }
          if(this.upjugador2.isDown)
        {
       
          col2.y = col2.y - 50;
        }
    }

   },this);



 this.game.physics.arcade.overlap(myShip3,bombasFull3, cogerBomba,function(col1,col2){
    
    if(this.guanteP3==2)
    {
        if(this.downjugador3.isDown)
        {
       
        col2.y = col2.y + 50;
        }

        if(this.leftjugador3.isDown)
        {
       
        col2.x = col2.x - 50;
        }

          if(this.rightjugador3.isDown)
        {
       
        col2.x = col2.x + 50;
        }
          if(this.upjugador3.isDown)
        {
       
          col2.y = col2.y - 50;
        }
    }

   },this);


 this.game.physics.arcade.overlap(myShip4,bombasFull4, cogerBomba,function(col1,col2){
    
    if(this.guanteP4==2)
    {
        if(this.downjugador4.isDown)
        {
       
        col2.y = col2.y + 50;
        }

        if(this.leftjugador4.isDown)
        {
       
        col2.x = col2.x - 50;
        }

          if(this.rightjugador4.isDown)
        {
       
        col2.x = col2.x + 50;
        }
          if(this.upjugador4.isDown)
        {
       
          col2.y = col2.y - 50;
        }
    }

   },this);

 //leftjugador2




    // this.game.physics.arcade.collide(myShip, this.box);
       
 if(this.designer ==0)
    {


   if(this.pause == 1)
   {



   if(this.jugadoresTotal ==1)
        {
         if(this.aceptarP1 == 1)
         {
       this.scene.restart();
        }
        }


        if(this.jugadoresTotal ==2)
        {
         if(this.aceptarP1 == 1 && this.aceptarP2 == 1)
         {
       this.scene.restart();
        }
        }

    if(this.jugadoresTotal ==3)
        {
         if(this.aceptarP1 == 1 && this.aceptarP2 == 1 && this.aceptarP3 == 1)
         {
       this.scene.restart();
        }
        }

         if(this.jugadoresTotal ==4)
        {
         if(this.aceptarP1 == 1 && this.aceptarP2 == 1 && this.aceptarP3 == 1 && this.aceptarP4 == 1)
         {
       this.scene.restart();
        }
        }
}
//PAUSE1


//console.log(this.gamemode);
   if(this.pause == 0)
   {



 //REINICIO



//console.log("gamemode "+ this.gamemode+ " v1: " + this.vidasInt + this.vidasInt2+ this.vidasInt3+ this.vidasInt4 )
    if(this.gamemode == 0 && this.vidasInt <=0 && this.vidasInt2 <=0 && this.vidasInt3 <=0 && this.vidasInt4 <=0 )
    {

this.scene.restart();

     this.caerparedX =-1;
 this.caerparedY = 1;
 this.disminuirX = 0;
    this.disminuirY = 0;
    this.caerEnX = 1;
    this.caerEnY = 0;

this.relojInt = 300;
      

    this.scoreInt = 0;
    myShip.x = 430;
    myShip.y = 130;
 
this.vidasInt = 3;


if(this.jugadoresTotal >=2)
{
this.vidasInt2 = 3;
  myShip2.x = 1820;
   myShip2.y = 130;
    this.vidasJ2.setText(this.vidasInt2);

}   
if(this.jugadoresTotal >=3)
{
this.vidasInt3 = 3;
   myShip3.x = 420;
   myShip3.y = 885;
    this.vidasJ3.setText(this.vidasInt3);
}   
if(this.jugadoresTotal >=4)
{
this.vidasInt4 = 3;
  myShip4.x = 1820;
   myShip4.y = 885;
     this.vidasJ4.setText(this.vidasInt4);
}
   this.score.setText(this.scoreInt);
    this.vidas.setText(this.vidasInt);
/*this.powerupsLlamas.clear(this.scene);
this.powerupsVidas.clear(this.scene);
this.pisor1.clear(this.scene);
this.pisor2.clear(this.scene);
this.wallkill.clear(this.scene);

this.powerupsGuantes.clear(this.scene);
this.powerupsPatin.clear(this.scene);
this.powerupsBombas.clear(this.scene);

this.box.clear(this.scene);
this.boxFuerte.clear(this.scene);
this.enemigos.clear(this.scene);
explosionRight.clear(this.scene);
explosionLeft.clear(this.scene);
explosionDown.clear(this.scene);
explosionUp.clear(this.scene);*/
    for (var i = -1; i < 22; i++)
    {
for (var j = 1; j < 14; j++)
    {
        if(i > -2 && i < 1 && j > 0 && j < 3)
        {
            
        }
        else
        {
          var item = Phaser.Math.Between(0,40);

     if(item ==1)
     {
     this.powerupsLlamas.create(480+ i*32*2,  64 + j*32*2, 'poderllama');
     this.box.create(480+ i*32*2, 64 + j*32*2, 'wall');
    }
    if(item ==2)
    {
     this.powerupsPatin.create(480+ i*32*2,  64 + j*32*2, 'poderpatin');
     this.box.create(480+ i*32*2, 64 + j*32*2, 'wall');
    }
    if(item ==3)
    {
     this.powerupsBombas.create(480+ i*32*2,  64 + j*32*2, 'poderbomba');
     this.box.create(480+ i*32*2, 64 + j*32*2, 'wall');
    }
    if(item ==36)
    {
     this.powerupsVidas.create(480+ i*32*2,  64 + j*32*2, 'podervida');
     this.box.create(480+ i*32*2, 64 + j*32*2, 'wall');
    }
     if(item ==38)
    {
     this.powerupsGuantes.create(480+ i*32*2,  64 + j*32*2, 'poderguante');
     this.box.create(480+ i*32*2, 64 + j*32*2, 'wall');
    }
   if(item ==4)
     this.boxFuerte.create(480+ i*32*2,  64 + j*32*2, 'wall2');
   if(item > 5 && item <6+this.nivelInt){

     if(i > 0 && i < 20 && j > 2 && j < 12)
        {
    if(this.enemigos.length<3+this.nivelInt)
    {
     if(this.gamemode==0)
{
     this.enemigos.create(480+ i*32*2,  64 + j*32*2, 'enemigo');
}
    }
}
    }

    if(item >16 && item < 28)
        this.box.create(480+ i*32*2, 64 + j*32*2, 'wall');

  if(item >29 && item < 32)
        this.pisor1.create(480+ i*32*2, 64 + j*32*2, 'pisor1');
  if(item >33 && item < 35)
        this.pisomov.create(480+ i*32*2, 64 + j*32*2, 'pisomov');


     //   var box = this.add.image(x, y, 'crate');
      //      box.setInteractive();

     }


 }
 }



}

//FIN REINICIO
 if(this.relojInt==1) //bajar vidas cuando el contador sea 0
 {

if(this.gamemode == 1 || this.gamemode == 2 )
{
    if(this.vidasInt>0)
    {
  this.vidasInt = 1;
    this.vidas.setText(this.vidasInt); }
}

 if(this.jugadoresTotal >=2 && (this.gamemode == 1 || this.gamemode == 2 ))
{

    if(this.vidasInt2>0)
    {
 this.vidasInt2 = 1;
    this.vidasJ2.setText(this.vidasInt2); 
   } 
    }

    if(this.jugadoresTotal >=3 && (this.gamemode == 1 || this.gamemode == 2))
{  

    if(this.vidasInt3>0)
    {
  this.vidasInt3 = 1;
    this.vidasJ3.setText(this.vidasInt3);  
    }
    }
    if(this.jugadoresTotal >=4 &&( this.gamemode == 1 || this.gamemode == 2))
{ 

    if(this.vidasInt4>0)
    {
  this.vidasInt4 = 1;
    
    this.vidasJ4.setText(this.vidasInt4);   
}
 }
 }



if(this.gamemode == 1 ) //modo ultimo en pie
{
if(this.jugadoresTotal ==2)
{
   if(this.vidasInt <=0 )
{
    this.scene.restart();
}

if(this.vidasInt2 <=0 )
{
    this.scene.restart();
}
}

if(this.jugadoresTotal ==3)
{
   if(this.vidasInt <=0 && this.vidasInt2 <=0)
{
    this.scene.restart();
}

 if(this.vidasInt2 <=0 && this.vidasInt3 <=0)
{
    this.scene.restart();
}

 if(this.vidasInt <=0 && this.vidasInt3 <=0)
{
    this.scene.restart();
}
}

if(this.jugadoresTotal ==4)
{
if(this.vidasInt <= 0 && this.vidasInt2 <= 0 && this.vidasInt3 <=0)
{
    this.scene.restart();
}

if(this.vidasInt4 <= 0 && this.vidasInt2 <= 0 && this.vidasInt3 <=0)
{
    this.scene.restart();
}


if(this.vidasInt4 <= 0 && this.vidasInt2 <= 0 && this.vidasInt<=0)
{
    this.scene.restart();
}

if(this.vidasInt <= 0 && this.vidasInt4 <= 0 && this.vidasInt3 <=0)
{
    this.scene.restart();
}
}
}

if(this.gamemode == 2 ) //modo por puntos
{
    if(this.vidasInt <=0 && this.vidasInt2<= 0 && this.vidasInt3 <=0 && this.vidasInt4<=0)
{
    this.scene.restart();
}

if(this.killsInt >= 3)
{
    this.scene.restart();
}

if(this.killsInt2 >= 3)
{
    this.scene.restart();
}


if(this.killsInt3 >= 3)
{
    this.scene.restart();
}

if(this.killsInt4 >= 3)
{
    this.scene.restart();
}

}
if(this.guantebutton1.isDown)
{
    if(this.guanteP1==1)
    {
        this.guanteP1=2;
    }
}


if(this.guantebutton1.isUp)
{
    if(this.guanteP1==2)
    {
        this.guanteP1=1;
    }
}

if(this.guantebutton2.isDown)
{
    if(this.guanteP2==1)
    {
        this.guanteP2=2;
    }
}


if(this.guantebutton2.isUp)
{
    if(this.guanteP2==2)
    {
        this.guanteP2=1;
    }
}


if(this.guantebutton3.isDown)
{
    if(this.guanteP3==1)
    {
        this.guanteP3=2;
    }
}


if(this.guantebutton3.isUp)
{
    if(this.guanteP3==2)
    {
        this.guanteP3=1;
    }
}


if(this.guantebutton4.isDown)
{
    if(this.guanteP4==1)
    {
        this.guanteP4=2;
    }
}


if(this.guantebutton4.isUp)
{
    if(this.guanteP4==2)
    {
        this.guanteP4=1;
    }
}


if(this.cooldownP1 ==0)
    myShip.visible=true;

if(this.cooldownP1==1)
{
  this.cooldownP1tick =this.cooldownP1tick -1;

  if(myShip.visible==true)
myShip.visible=false;
  else    
myShip.visible=true;

  if(this.cooldownP1tick < 0)
    this.cooldownP1 =0;

 }  




if(this.cooldownP2 ==0)
    myShip2.visible=true;

if(this.cooldownP2==1)
{
  this.cooldownP2tick =this.cooldownP2tick -1;

  if(myShip2.visible==true)
myShip2.visible=false;
  else    
myShip2.visible=true;

  if(this.cooldownP2tick < 0)
    this.cooldownP2 =0;

 }  



if(this.cooldownP3 ==0)
    myShip3.visible=true;

if(this.cooldownP3==1)
{
  this.cooldownP3tick =this.cooldownP3tick -1;

  if(myShip3.visible==true)
myShip3.visible=false;
  else    
myShip3.visible=true;

  if(this.cooldownP3tick < 0)
    this.cooldownP3 =0;

 }  



if(this.cooldownP4 ==0)
    myShip4.visible=true;

if(this.cooldownP4==1)
{
  this.cooldownP4tick =this.cooldownP4tick -1;

  if(myShip4.visible==true)
myShip4.visible=false;
  else    
myShip4.visible=true;

  if(this.cooldownP4tick < 0)
    this.cooldownP4 =0;

 }  

       /*explosionUp.body.velocity.x = -20*this.llama;
           explosionDown.body.velocity.x = 20*this.llama;
         explosionLeft.body.velocity.y = -20*this.llama;
        explosionRight.body.velocity.y = 20*this.llama;

         explosionUp2.body.velocity.X = -20*this.llama2;
           explosionDown2.body.velocity.X = 20*this.llama2;
         explosionLeft2.body.velocity.Y = -20*this.llama2;
        explosionRight2.body.velocity.Y = 20*this.llama2;


         explosionUp3.body.velocity.X = -20*this.llama3;
           explosionDown3.body.velocity.X = 20*this.llama3;
         explosionLeft3.body.velocity.Y = -20*this.llama3;
        explosionRight3.body.velocity.Y = 20*this.llama3;

          explosionUp4.body.velocity.X = -20*this.llama4;
           explosionDown4.body.velocity.X = 20*this.llama4;
         explosionLeft4.body.velocity.Y = -20*this.llama4;
        explosionRight4.body.velocity.Y = 20*this.llama4;*/


this.tick1 = this.tick1 +1;
 
 if(this.tick1 >10)
    {
        this.tick1=0;

        if(this.relojInt > 0)
   this.relojInt = this.relojInt-1;

    this.reloj.setText(this.relojInt);



    if(this.relojInt < 1)
{


         //   var i = Phaser.Math.Between(-1,22);
            
        //    var j = Phaser.Math.Between(1,14);
            
        var i = this.caerparedX;
            
            var j = this.caerparedY;


if(this.caerEnX == 1)
this.caerparedX = this.caerparedX +1;


if(this.caerEnX == -1)
this.caerparedX = this.caerparedX -1;



     this.wallkill.create(480+ i*32*2, 64 + j*32*2, 'wallkill');


if(this.caerEnY == 1)
 this.caerparedY = this.caerparedY+1;


if(this.caerEnY == -1)
 this.caerparedY = this.caerparedY-1;

     this.wallkill.create(480+ i*32*2, 64 + j*32*2, 'wallkill');

if(this.caerparedX> 20 - this.disminuirX)
{
    this.caerEnX=0;
    this.caerEnY=1;
    //this.caerparedX = -2;
  //  this.caerparedY = this.caerparedY+1;
     // 
}

if(this.caerparedY> 12 - this.disminuirY)
{
     this.caerEnX=-1;
    this.caerEnY=0;
//    this.caerparedX = -2;
}

if(this.caerparedX< 0 + this.disminuirX && this.caerEnX ==-1)
{
    this.caerEnX=0;
    this.caerEnY=-1;
}


if(this.caerparedY< 3 + this.disminuirY &&  this.caerEnY==-1)
{
    this.caerEnX=1;
    this.caerEnY=0;

this.disminuirX = this.disminuirX+1;
this.disminuirY = this.disminuirY+1;
}


}

}


  /*this.enemigos.children.iterate(child => {
      
     


            var random = Phaser.Math.Between(0,100);
             //bomba = child;
            //child.destroy(child, true);

            if(random ==0)
            child.setVelocityX(25*this.nivelInt +50);

            if(random ==1)
            child.setVelocityX(-25*this.nivelInt -50);

            if(random ==2)
            child.setVelocityY(25*this.nivelInt +50);

            if(random ==3)
            child.setVelocityY(-25*this.nivelInt-50);
            
            if(random ==99)
            {
                random = Phaser.Math.Between(0,99);
                {
                    if(random ==99)
                    {
                     this.minas.create(child.x, child.y, 'mina');
                    }
                 }
            }

            return;
            }
           
        )*/

 if(this.CrearObjeto == 1)
  {

    this.CrearObjeto = 0;
  }


if(limpiarLlama >0)
{
    limpiarLlama = limpiarLlama-1;
}
if(limpiarLlama2 >0)
{
    limpiarLlama2 = limpiarLlama2-1;
}
if(limpiarLlama3 >0)
{
    limpiarLlama3 = limpiarLlama3-1;
}
if(limpiarLlama4 >0)
{
    limpiarLlama4 = limpiarLlama4-1;
}


if(limpiarLlama ==0)
{
  console.log("limpiar");
 explosionUp.removeAll();
  explosionDown.removeAll();
  explosionLeft.removeAll();
 explosionRight.removeAll();
}

if(limpiarLlama2 ==0)
{
/* explosionUp2.clear(this.scene);
  explosionDown2.clear(this.scene);
  explosionLeft2.clear(this.scene);
 explosionRight2.clear(this.scene);*/
}


if(limpiarLlama3 ==0)
{
 /*explosionUp3.clear(this.scene);
  explosionDown3.clear(this.scene);
  explosionLeft3.clear(this.scene);
 explosionRight3.clear(this.scene);*/
}


if(limpiarLlama4 ==0)
{
 /*explosionUp4.clear(this.scene);
  explosionDown4.clear(this.scene);
  explosionLeft4.clear(this.scene);
 explosionRight4.clear(this.scene);*/
}


if(countExplosion >0)
{
    countExplosion = countExplosion-1;
}
if(countExplosion2 >0)
{
    countExplosion2 = countExplosion2-1;
}
if(countExplosion3 >0)
{
    countExplosion3 = countExplosion3-1;
}
if(countExplosion4 >0)
{
    countExplosion4 = countExplosion4-1;
}


if(bombasFull.length>0 && countExplosion ==0)
{

     bomba = bombasFull.getChildAt(0);

     bombasFull.remove(0);
     /*bombasFull.children.iterate(child => {
        if (true) {

             bomba = child;
            //child.destroy(child, true);
            return;
            }
          
        })*/

    /* bombasFull.children.iterate(child => {
        if (child.x == bomba.x && child.y == bomba.y) {

             //bomba = child;
            child.destroy(child, true);
            return;
            }
           
        })*/

this.countBomb = 0;

  

        explosionUp.create(bomba.x, bomba.y, 'explosion');
      //  explosionUp.body.velocity.x = -20*this.llama;

        explosionDown.create(bomba.x, bomba.y, 'explosion');
    //       explosionDown.body.velocity.x = 20*this.llama;
   
        explosionLeft.create(bomba.x, bomba.y, 'explosion');
     //    explosionLeft.body.velocity.y = -20*this.llama;
  
        explosionRight.create(bomba.x, bomba.y, 'explosion');
    //    explosionRight.body.velocity.y = 20*this.llama;
    
        limpiarLlama =50;
 }


if(bombasFull2.length>0 && countExplosion2 ==0)
{
     bomba2 = bombasFull2.getFirst();
    /* bombasFull2.children.iterate(child => {
        if (true) {

             bomba2 = child;
            //child.destroy(child, true);
            return;
            }
          
        })

     bombasFull2.children.iterate(child => {
        if (child.x == bomba2.x && child.y == bomba2.y) {

             //bomba = child;
            child.destroy(child, true);
            return;
            }
           
        })*/

this.countBomb2 = 0;

        explosionUp2.create(bomba2.x, bomba2.y, 'explosion');
        explosionUp2.body.velocity.X = -20*this.llama2;

        explosionDown2.create(bomba2.x, bomba2.y, 'explosion');
           explosionDown2.body.velocity.X = 20*this.llama2;
   
        explosionLeft2.create(bomba2.x, bomba2.y, 'explosion');
         explosionLeft2.body.velocity.Y = -20*this.llama2;
  
        explosionRight2.create(bomba2.x, bomba2.y, 'explosion');
        explosionRight2.body.velocity.Y = 20*this.llama2;
    
        limpiarLlama2 =50;
 }

if(bombasFull3.length>0 && countExplosion3 ==0)
{
     bomba3 = bombasFull3.getFirst();
     /*bombasFull3.children.iterate(child => {
        if (true) {

             bomba3 = child;
            //child.destroy(child, true);
            return;
            }
          
        })

     bombasFull3.children.iterate(child => {
        if (child.x == bomba3.x && child.y == bomba3.y) {

             //bomba = child;
            child.destroy(child, true);
            return;
            }
           
        })*/

this.countBomb3 = 0;

        explosionUp3.create(bomba3.x, bomba3.y, 'explosion');
        explosionUp3.body.velocity.X = -20*this.llama3;

        explosionDown3.create(bomba3.x, bomba3.y, 'explosion');
           explosionDown3.body.velocity.X = 20*this.llama3;
   
        explosionLeft3.create(bomba3.x, bomba3.y, 'explosion');
         explosionLeft3.body.velocity.Y = -20*this.llama3;
  
        explosionRight3.create(bomba3.x, bomba3.y, 'explosion');
        explosionRight3.body.velocity.Y = 20*this.llama3;
    
        limpiarLlama3 =50;
 }

if(bombasFull4.length>0 && countExplosion4 ==0)
{
     bomba4 = bombasFull4.getFirst();
     /*bombasFull4.children.iterate(child => {
        if (true) {

             bomba4 = child;
            //child.destroy(child, true);
            return;
            }
          
        })

     bombasFull4.children.iterate(child => {
        if (child.x == bomba4.x && child.y == bomba4.y) {

             //bomba = child;
            child.destroy(child, true);
            return;
            }
           
        })*/

this.countBomb4 = 0;

        explosionUp4.create(bomba4.x, bomba4.y, 'explosion');
      //  explosionUp4.body.velocity.X = -20*this.llama4;

        explosionDown4.create(bomba4.x, bomba4.y, 'explosion');
     //      explosionDown4.body.velocity.X = 20*this.llama4;
   
        explosionLeft4.create(bomba4.x, bomba4.y, 'explosion');
     //    explosionLeft4.body.velocity.Y = -20*this.llama4;
  
        explosionRight4.create(bomba4.x, bomba4.y, 'explosion');
      //  explosionRight4.body.velocity.Y = 20*this.llama4;
    
        limpiarLlama4 =50;
 }

if(this.resbalar==0)
{
 myShip.body.velocity.x = 0
  myShip.body.velocity.y = 0
}
if(this.resbalar2==0)
{
//myShip2.body.velocity.x = 0
 // myShip2.body.velocity.y = 0
}

if(this.resbalar3==0)
{
  //myShip3.body.velocity.x = 0
 // myShip3.body.velocity.y = 0
}

if(this.resbalar4==0)
{
// myShip4.body.velocity.x = 0
 // myShip4.body.velocity.y = 0
}



    switch (cursor) {
      case "LEFT":
          console.log("left");
        myShip.body.velocity.x = -20*this.patin;
         break;
      case "RIGHT":
          console.log("right");
           myShip.body.velocity.x = 20*this.patin;
         break;
      case "UP":
          console.log("up");
            myShip.body.velocity.y = -20*this.patin;
          break;
      case "DOWN":
          console.log("down");
          myShip.body.velocity.y = 20*this.patin;
    }

//JUGADOR 1
      
      if (this.XKey.downDuration(1)) { 
            actualizarEstado();
        }

        if (this.cursors.left.isDown) { 
            myShip.body.velocity.x = -20*this.patin
        }
        else{
             
        }


        if (this.cursors.right.isDown) {
           myShip.body.velocity.x = 20*this.patin;
        }
        else{
           
        }

        if (this.cursors.up.isDown) {
            myShip.body.velocity.y = -20*this.patin;
        }
        else
        {
           
        }

          if (this.cursors.down.isDown) {
            myShip.body.velocity.y = 20*this.patin;
        }
        else{
           
        }

//JUGADOR 2
        if (this.leftjugador2.isDown) { 
      //      myShip2.body.velocity.X = -20*this.patin2;
        }
        else{
             
        }


        if (this.rightjugador2.isDown) {
      //      myShip2.body.velocity.X = 20*this.patin2;
        }
        else{
           
        }

        if (this.upjugador2.isDown) {
      //      myShip2.body.velocity.Y = -20*this.patin2;
        }
        else
        {
           
        }

          if (this.downjugador2.isDown) {
       //     myShip2.body.velocity.Y = 20*this.patin2;
        }
        else{
           
        }
 

//JUGADOR 3

if (this.leftjugador3.isDown) { 
      //      myShip3.body.velocity.X = -20*this.patin3;
        }
        else{
             
        }

        if (this.rightjugador3.isDown) {
      //      myShip3.body.velocity.X = 20*this.patin3;
        }
        else{
           
        }

        if (this.upjugador3.isDown) {
     //       myShip3.body.velocity.Y = -20*this.patin3;
        }
        else
        {
           
        }

          if (this.downjugador3.isDown) {
      //      myShip3.body.velocity.Y = 20*this.patin3;
        }
        else{
           
        }
 

//JUGADOR 4


if (this.leftjugador4.isDown) { 
      //      myShip4.body.velocity.X = -20*this.patin4;
        }
        else{
             
        }

        if (this.rightjugador4.isDown) {
        //    myShip4.body.velocity.X = 20*this.patin4;
        }
        else{
           
        }

        if (this.upjugador4.isDown) {
      //      myShip4.body.velocity.Y = -20*this.patin4;
        }
        else
        {
           
        }

          if (this.downjugador4.isDown) {
       //     myShip4.body.velocity.Y = 20*this.patin4;
        }
        else{
           
        }
 

this.resbalar = 0;
this.resbalar2 = 0;
this.resbalar3 = 0;
this.resbalar4 = 0;



}
}


    //BOMBERMAN
   /* this.updateCollisions();

    this.player.scale.set(0.8 * this.direction, 0.8);
    this.enemies.getChildAt(0).scale.set(this.enemyDirection * 0.8, 0.8);
    this.player.body.allowGravity = true;
    //Waiting for fall damage (can't move)
    if (!this.firstDie4Fall) {
      return;
    }

    this.updateEnemyMovement();*/

    //if(this.player.x>5320 && this.player.x<5400) this.powerUp = 2
    /*if (this.powerUp != 1) {
      this.timer.events.add(Phaser.Timer.SECOND * 120, this.back2Normal, this);
    }
*/
  //  this.updateCamera();
   //
//  this.updatePlayerMovement();

   /* //Player fall damage
    if (this.player.body.velocity.y > 500)
      this.die4Fall = true;
    if (this.player.body.velocity.y == 0 && this.die4Fall && this.firstDie4Fall) {
      this.player.body.velocity.x = 0;
      this.firstDie4Fall = false;
      this.fall_sound.play();
      this.player.play("fallDie");
      setTimeout(this.damagePlayer.bind(this), 800);
    }
    //Player shoot event
    if (this.holdingWeapon && cursor == "B") {
      this.shot_sound.play();
      this.player.play("shoot");
      if (this.direction == 1)
        this.bullet.fireAngle = 0;
      else
        this.bullet.fireAngle = 180;
      this.bullet.trackSprite(this.player, 100 * this.direction, 100);
      this.bullet.fire();
    }*/
  },
  unpause: function () { //event
    /*if (this.game.paused) {
      if (event.x > x1 && event.x < x2 && event.y > y1 && event.y < y2) {
        var choiceMap = ['jugar', 'opciones', 'salir'];
        var x = event.x - x1,
          y = event.y - y1;
        var choice = Math.floor(x) + 3 * Math.floor(y / 107);
        this.choiceLabel.text = 'You chose menu item: ' + choiceMap[choice];
      } else {
        for (var i = 0; i < this.menu.countLiving(); i++) {
          this.menu[i].destroy()
        }
        this.choiceLabel.destroy();
        this.game.paused = false;
      }
    }*/
  },
  pauseMenu: function () {
    /*this.game.paused = true;
    this.menu.add(new Phaser.Sprite(405, 107, "m_jugar"))
    this.menu.add(new Phaser.Sprite(405, 107, "m_opciones"))
    this.menu.add(new Phaser.Sprite(405, 107, "m_salir"))
    this.choiceLabel = this.game.add.text(this.windowSize[0] / 2, this.windowSize[1] - 150,
      'Click outside menu to continue', {
      font: '30px Arial',
      fill: '#fff'
    });
    this.choiceLabel.anchor.setTo(0.5, 0.5);*/
  },
  loadPauseUI: function () {
   /* this.pauseLabel = this.game.add.text(this.windowSize[0] - 100, 20,
      'Volver', {
      font: '24px Arial',
      fill: '#ffffff'
    });
    this.pauseLabel.fixedToCamera = true;
    this.pauseLabel.inputEnabled = true;
    this.pauseLabel.events.onInputUp.add(goBackMenu);
    // this.pauseLabel.events.onInputUp.add(this.pauseMenu.bind(this));
    // this.game.input.onDown.add(this.unpause.bind(this));*/
  },
  loadLevel: function () {
    this.map = this.game.add.tilemap("map");
    this.map.addTilesetImage("tiles_spritesheet", "gameTiles");

    this.collisionLayer = this.map.createLayer("collisionLayer");
    this.backgroundLayer = this.map.createLayer("backgroundLayer");
    this.foregroundLayer = this.map.createLayer("foregroundLayer");

    this.game.world.sendToBack(this.collisionLayer);
    this.game.world.sendToBack(this.backgroundLayer);
    this.game.world.bringToTop(this.foregroundLayer);

    this.map.setCollisionBetween(1, 38, true, "collisionLayer");
    this.collisionLayer.resizeWorld();

    this.game.world.bringToTop(this.lives);

    this.player.body.collideWorldBounds = true;
    this.player.checkWorldBounds = true;

    myShip.body.collideWorldBounds = true;
  
    myShip.checkWorldBounds = true;


  },
  updateCollisions: function () {
    // ENEMIES
    /*
    this.game.physics.arcade.overlap(
      this.player,
      this.enemies.getChildAt(0),
      this.damagePlayer,
      null,
      this
    );

    // WEAPONS
    this.game.physics.arcade.overlap(
      this.player,
      this.weapons,
      this.pickUpWeapon,
      null,
      this
    );

    // POTIONS
    this.game.physics.arcade.overlap(
      this.player,
      this.potions,
      this.pickUpPotion,
      null,
      this
    );

    // LEVER
    this.game.physics.arcade.overlap(
      this.player,
      this.levers,
      this.pressLever,
      null,
      this
    );

    // CHECKPOINT
    if (this.firstCheck)
      this.game.physics.arcade.overlap(this.player, this.checkpoints, this.saveCheckpoint.bind(this), null, this);

    // PLAYER AND TILES
    this.game.physics.arcade.collide(this.player, this.tiles);

    // NEXT LEVEL
    this.game.physics.arcade.overlap(
      this.player,
      this.doors.getChildAt(0),
      this.nextLevel,
      null,
      this
    );

    // BULLETS
    this.game.physics.arcade.collide(this.bullet.bullets, this.tiles, this.killBullet, null, this)
    this.game.physics.arcade.collide(this.bullet.bullets, this.enemies, this.damageEnemy, null, this)

    // SAWS
    this.saws.forEachAlive(this.collideElements, this);
    this.saws.forEachAlive(this.collideSaws, this);


    // SPIKES
    this.game.physics.arcade.collide(
      this.player,
      this.spikes,
      this.damagePlayer,
      null,
      this
    );*/
  },
  collideSaws: function (saw) {
    this.game.physics.arcade.collide(
      this.player,
      myShip,
      saw,
      this.damagePlayer.bind(this));
  },
  updateEnemyMovement: function () {
    /*if (
      this.enemies.getChildAt(0).body.y <
      this.player.y + this.player.body.height / 2 &&
      this.enemies.getChildAt(0).body.y +
      this.enemies.getChildAt(0).body.height / 2 >
      this.player.body.y
    ) {
      if (this.enemies.getChildAt(0).body.x < this.player.x)
        this.enemyDirection = 1;
      else if (this.enemies.getChildAt(0).body.x > this.player.x)
        this.enemyDirection = -1;
    }
    if (this.enemies.getChildAt(0).body.x >= 3070)
      this.enemyDirection = -1;
    else if (this.enemies.getChildAt(0).body.x <= 100)
      this.enemyDirection = 1;

    if (this.enemies.getChildAt(0).body.x < this.player.x &&
      this.enemies.getChildAt(0).body.x >= 3070) {
      this.enemies.getChildAt(0).body.velocity.x = 0;
      this.enemyDirection = 1;
      this.enemies.getChildAt(0).play("move");
    } else
      this.enemies.getChildAt(0).body.velocity.x = this.enemyDirection * 200;*/
  },
  updatePlayerMovement: function () {
    this.updatePlayerMovementStart();
    this.updatePlayerMovementStop();

    switch (cursor) {
      case "X":
        this.lastActionX = true;
        break;
      case "STOPX":
        this.lastActionX = false;
        break;
      case "Y":
        this.isJumping = true;
        this.lastActionY = true;
        break;
      case "STOPY":
        this.isJumping = false;
        this.lastActionY = false;
    }

    this.updatePlayerMovementStairs();
  },
  updatePlayerMovementStart: function () {
    if (cursor == "LEFT" || this.lastAction == "LEFT") {
      this.lastAction = "LEFT";
      this.direction = -1;
    }
    if (cursor == "RIGHT" || this.lastAction == "RIGHT") {
      this.lastAction = "RIGHT";
      this.direction = 1;
    }
    if (
      (cursor == "RIGHT" ||
        this.lastAction == "RIGHT" ||
        cursor == "LEFT" ||
        this.lastAction == "LEFT") && !this.isClimbing
    ) {
      if (this.player.body.velocity.y == 0) {
        if (cursor == "X" || this.lastActionX) {
          this.lastActionX = true;
          this.player.body.velocity.x = this.stepsX[0] * this.direction;
          if (this.holdingWeapon)
            this.player.play("slowWeapon");
          else
            this.player.play("slow");
        } else if (cursor == "Y" && !this.lastActionY) {
          this.lastActionY = true;
          this.player.body.velocity.x = this.stepsX[1] * 1.2 * this.powerUp * this.direction;
          this.player.body.velocity.y = this.stepsY[1] * this.powerUp;
          this.jump_sound.play();
          this.player.play("jumpSide");
        } else {
          this.player.body.velocity.x = this.stepsX[2] * this.direction;
          // this.walk_sound.play()
          if (this.holdingWeapon)
            this.player.play("walkWeapon");
          else
            this.player.play("walk");
        }
      } else if (this.player.body.velocity.y > 159) {
        this.player.play("fallJumpSide");
      } else {
        this.player.body.velocity.x = this.stepsX[1] * this.direction;
        if (this.player.animations.name != "jumpSide") {
          if (this.holdingWeapon)
            this.player.play("walkWeapon");
          else
            this.player.play("walk");
        }
      }
    }
  },
  updatePlayerMovementStop: function () {
    if (this.firstDie4Fall && (cursor == "STOPRIGHT" || this.lastAction == "STOPRIGHT")) {
      this.lastAction = "STOPRIGHT";
      this.direction = 1;
    }
    if (this.firstDie4Fall && (cursor == "STOPLEFT" || this.lastAction == "STOPLEFT")) {
      this.lastAction = "STOPLEFT";
      this.direction = -1;
    }
    if (this.firstDie4Fall && (
      cursor == "STOPRIGHT" ||
      this.lastAction == "STOPRIGHT" ||
      cursor == "STOPLEFT" ||
      this.lastAction == "STOPLEFT"
    )) {
      this.player.body.velocity.x = 0;
      if (this.player.body.velocity.y == 0) {
        if (cursor == "Y" && !this.lastActionY) {
          this.lastActionY = true;
          this.player.body.velocity.y = this.stepsY[3];
          this.player.play("jump");
          this.jump_sound.play();
        } else {
          if (this.holdingWeapon)
            this.player.play("stopWeapon");
          else
            this.player.play("stop");
        }
      } else if (this.player.body.velocity.y > 159) {
        this.player.play("fallJump");
      } else if (this.player.animations.name != "jump") {
        if (this.holdingWeapon)
          this.player.play("stopWeapon");
        else
          this.player.play("stop");
      }
    }
  },
  updatePlayerMovementStairs: function () {
    /*var anyStairIsOverlap = false;
    for (var i = 0; i < this.stairs.countLiving(); i++) {
      if (this.game.physics.arcade.overlap(this.player,
        this.stairs.getChildAt(i)) &&
        ((this.stairs.getChildAt(i).animations.frame < 2 &&
          this.player.body.x > this.stairs.getChildAt(i).body.x) ||
          (this.stairs.getChildAt(i).animations.frame > 1 &&
            this.player.body.x + this.player.body.width <
            this.stairs.getChildAt(i).body.x +
            this.stairs.getChildAt(i).body.width))) {

        anyStairIsOverlap = true;
        if (this.stairs.getChildAt(i).animations.frame > 1) {
          this.direction = 1;
          this.lastAction = "STOPRIGHT";
        } else {
          this.direction = -1;
          this.lastAction = "STOPLEFT"
        }
        this.player.body.allowGravity = false;
        if (
          this.player.body.y + this.player.body.height <
          this.stairs.getChildAt(i).body.y + 38
        ) {
          this.isClimbing = false;
          if (cursor == "UP") {
            // console.log("Salir desde arriba");
            this.player.body.velocity.y = -40;
            this.player.play("climbEndUP");
          } else if (cursor == "DOWN") {
            // console.log("Entrar desde arriba");
            this.player.body.velocity.y = 100;
            this.player.play("climbStartUP");
          } else {
            // console.log("Estancarse arriba");
            this.player.body.velocity.y = 0;
            this.player.play("climbStairStop");
          }
        } else if (
          this.player.body.y + this.player.body.height >=
          this.stairs.getChildAt(i).body.y +
          this.stairs.getChildAt(i).body.height
        ) {
          this.isClimbing = false;
          if (cursor == "UP") {
            // console.log("Entrar desde abajo");
            this.player.play("climbStartDown");
            this.player.body.velocity.y = -240;
          } else if (cursor == "DOWN") {
            // console.log("Salir desde abajo");
            this.player.body.velocity.y = 240;
            this.player.play("climbEndDown");
          }
        } else {
          this.isClimbing = true;
          // console.log("Climbing");
          this.player.body.velocity.y = 0;
          if (cursor == "UP" || cursor == "DOWN") {
            this.player.play("climbStair");
            if (cursor == "UP")
              this.player.body.velocity.y = -100;
            if (cursor == "DOWN")
              this.player.body.velocity.y = 100;
          } else
            this.player.play("climbStairStop");
        }
        //console.log(this.player.animations.frame)
      }
    }
    if (!anyStairIsOverlap) {
      this.isClimbing = false;
    }
  },
  collideElements: function (element) {
    this.game.physics.arcade.collide(element, this.tiles);*/
  },
  back2Normal: function () {
    this.powerUp = 1;
  },
  renderGroup: function (member) {
    this.game.debug.body(member);
  },
  render: function () {
    //this.enemies.forEachAlive(this.renderGroup, this);
    // this.tiles.forEachAlive(this.renderGroup, this);
  }
};