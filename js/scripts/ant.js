function Ant(antSprite) {
    currentPos = 0;
    endPos = 0;
    this.rightPath = {
        'x': [600, 480, 300, 300],
        'y': [600, 460, 390, 0]
    };
    this.leftPath = {
        'x': [0, 120, 240, 240],
        'y': [600, 450, 400, 0]
    }
    this.getResources = false;
    this.resource = null;
    this.path = [];
    this.alignLeft = true;
    this.position = game.add.sprite(600, 600, 'test_ant');
    this.moveNext = function() {
        if (this.path.length == 0) {
            endPos = 5
        } else {
            endPos = this.path.pop()
        }
    }

    this.update = function() {
        currentPos += 0.1
        if (currentPos < endPos) {
            this.position.y = Phaser.Math.linearInterpolation(this.rightPath.y, currentPos);
            this.position.x = Phaser.Math.linearInterpolation(this.rightPath.x, currentPos);
        } else {
            this.moveNext()
        }
    }
}