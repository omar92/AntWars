function Ant(antSprite) {
    rightPath = {
        'x': [600, 480, 300, 300],
        'leftY': [600, 460, 390, 0]
    };
    leftPath = {
        'x': [0, 120, 240, 240],
        'rightY': [600, 450, 400, 0]
    }
    this.getResources = false;
    this.resource = null;
    this.path = [];
    this.alignLeft = true;
    this.position = game.add.sprite(600, 600, 'test_ant.jpg');
    this.moveNext = function() {
        if (this.path.length == 0) {
            this.path.push(LOCATIONS.QUEEN)
        } else {
            gotoPos(this.path.pop())
        }
    }

    function update() {
        this.position.y += 0.1
        this.position.x += 0.1
        this.position.y = Phaser.Math.linearInterpolation(rightPath.y, this.position.y);
        this.position.x = Phaser.Math.linearInterpolation(rightPath.x, this.position.x);
    }
}