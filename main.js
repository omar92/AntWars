var game = new Phaser.Game(1200, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var testAntSprite


//load assets
function preload() {
    game.load.image('background', 'assets/sprites/ant_map2.png');
    game.load.image('test_ant', 'assets/sprites/test_ant.jpg');
}

//create objects
function create() {
    game.add.sprite(0, 0, 'background');
    testAnt = game.add.sprite(0, 0, 'test_ant');
    ant = new Ant();
    ant.moveNext()
}

//update and render
function update() {
    ant.update();
}

function moveAnt(ant) {

}