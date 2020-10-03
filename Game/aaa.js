     var SCREEN_WIDTH = 1920;
    var SCREEN_HEIGHT = 1080;
    var config = {
        type: Phaser.AUTO,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        physics: {
            default: 'arcade'
        }
    };

    //================================================================================

    class platforms extends Phaser.GameObjects.Sprite  {

        constructor(scene, x , y) {
            super(scene, x, y);
           this.setTexture('ship');
            this.setPosition(x, y);
           this.scene = scene;
         
        }

        

        preUpdate(time, delta) {
            super.preUpdate(time, delta);
        }
    }


    class Ship extends Phaser.GameObjects.Sprite  {


        constructor(scene, x , y) {
            super(scene, x, y);


            this.setTexture('ship');
            this.setPosition(x, y);

            this.scene = scene;
            this.deltaX = 25;
            this.deltaY = 25;
        }

        moveLeft() {
            if (this.x > 50) {
                this.x -= this.deltaX;
            }
        }

        moveRight() {
            if (this.x < -50 + SCREEN_WIDTH) {
                this.x += this.deltaX;
            }
        }

        moveUp() {
            if (this.y > 50) {
                this.y -= this.deltaY;
            }
        }

        moveDown() {

            if (this.y <-50+ SCREEN_HEIGHT) {
                this.y += this.deltaY;
            }
        }

        preUpdate(time, delta) {

            super.preUpdate(time, delta);
        }
    }

    //================================================================================

    class Scene1 extends Phaser.Scene {

        constructor(config) {
            super(config);
        }

        preload() {
             this.load.setBaseURL('http://labs.phaser.io');

            this.load.image('ship', 'assets/particles/red.png');
        }

        create() {
           
               this.physics.add.Sprite(50,50,'ship',50);

                this.physics.world.setBounds(0, 0, 1000, 1000);

            this.cursors = this.input.keyboard.createCursorKeys();
            this.myShip = new Ship(this, 400, 500);
            this.myPlatform = new platforms(this, 450,550,50,50);
         



        this.physics.add.collider(this.myShip, this.myPlatform);


       // this.physics.add.collider(Ship, platforms, platforms, null, this);

          //  var rect = new Phaser.Geom.Rectangle(100, 100, 100, 100);
          //  graphics.fillRectShape(rect);

            this.add.existing(this.myShip);
            this.add.existing(this.myPlatform);

        }

        update() {


            if (this.cursors.left.isDown) {
                this.myShip.moveLeft();
            }

            if (this.cursors.right.isDown) {
                this.myShip.moveRight();
            }

            if (this.cursors.up.isDown) {
                this.myShip.moveUp();
            }

            if (this.cursors.down.isDown) {
                this.myShip.moveDown();
            }

            if (this.cursors.space.isDown) {
                // shooting guns goes here
            }
        }
    }

    var game = new Phaser.Game(config);
    game.scene.add('scene1', Scene1, true, { x: 400, y: 300 });