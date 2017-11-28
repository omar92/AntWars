var game = new Phaser.Game(1200, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

//load assets
function preload() {
    game.load.image('background', 'assets/sprites/ant_map2.png');
}

//create objects
function create() {
    game.add.sprite(0, 0, 'background');
}

//update and render
function update() {

}