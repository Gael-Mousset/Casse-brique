let bricks = [];
let brickState = 1;
let brickLigneNb = 8;
let brickColonneNb = 10;
let brickLarg = 63;
let brickHaut = 20;
let brickSpace = 6;
let brickLimitTop = 8;
let brickLimitLeft = 8;
let speedBrickColor = "#DD2CE1";
let normalBrickColor = "#30E12C";
let explosionBrick = "#FF7A00";
let numberExplosionBrick = 3;

let paddleX = 295;
let paddleY = 450;
let paddleLarg = 110;
let paddleHaut = 15;
let paddleVitesse = 0;
let paddleColor = 'red';

let ballX = 340;
let ballY = 400;
let ballRadius = 10;
let ballColor = '#fff';
let ballSpeedX = 1.5
let ballSpeedY = -1.5

let ballMatrix = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

let playerLife = 3;
let sideHit;

function createPlayer(name, score) {
    player = new Player(name, playerLife, score);
}

function buildBricks() {
    for (let c = 0; c < brickColonneNb; c++) {
        for (let l = 0; l < brickLigneNb; l++) {
            let random = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
            // random = 1 : Brick de vitesse
            if (71 <= random && random <= 85) {
                speedBrick = 0.3;
                colorBrick = speedBrickColor;
                pointsBrick = 30;
                brickState = 1;
            }
            // random = 0 : Brick normale
            else if (random <= 70) {
                speedBrick = 0;
                colorBrick = normalBrickColor;
                pointsBrick = 10;
                brickState = 1;
            }
            else if (86 <= random && random <= 90) {
                speedBrick = 0;
                colorBrick = explosionBrick;
                pointsBrick = 40;
                brickState = 1;
                if (numberExplosionBrick == 0) {
                    speedBrick = 0;
                    colorBrick = normalBrickColor;
                    pointsBrick = 10;
                    brickState = 1;
                }
                else {
                    numberExplosionBrick--;
                }
            }
            else if (91 <= random) {
                speedBrick = 0;
                colorBrick = normalBrickColor;
                pointsBrick = 0;
                brickState = 0;

            }

            let xBrick = (c * (brickLarg + brickSpace)) + brickLimitLeft;
            let yBrick = (l * (brickHaut + brickSpace)) + brickLimitTop;
            let brick = new Brick(brickState, xBrick, yBrick, brickLarg, brickHaut, speedBrick, colorBrick, pointsBrick);
            bricks.push(brick);

            if (91 <= random) {
                removeBrick(brick);
            }
        }
    }
}

function drawBricks() {
    bricks.forEach(brick => {
        if (brick.getState() == 1) {
            brick.drawBrick();
        }
    });
}

function drawScore(player) {
    $('.scoreGame').text('Score: ' + player.getScore());
}

function movePaddle() {
    let vitesse = paddle.getX() + paddle.getVitesse();
    paddle.setX(vitesse);
}

function moveBall() {
    ball.setX(ball.getX() + ball.getVitesseX())
    ball.setY(ball.getY() + ball.getVitesseY())
}

function colisionPaddle() {
    if (paddle.getX() >= 590) {
        paddle.setX(590);
    }
    else if (paddle.getX() <= 0) {
        paddle.setX(0);
    }
}

function buildPaddle() {
    paddle = new Paddle(paddleX, paddleY, paddleLarg, paddleHaut, paddleVitesse, paddleColor);
}

function drawPaddle() {
    colisionPaddle();
    context.beginPath();
    context.rect(paddle.getX(), paddle.getY(), paddle.getLarg(), paddle.getHaut());
    context.fillStyle = paddle.getColor();
    context.fill();
    context.closePath();
}

function buildBall() {
    ball = new Ball(ballX, ballY, ballRadius, 0, 0, 0, ballColor, ballMatrix);
}

function drawBall() {
    context.beginPath();
    context.arc(ball.getX(), ball.getY(), ballRadius, 0, 2 * Math.PI);
    context.fillStyle = ball.getColor();
    context.fill();
    context.stroke();
    context.closePath();
    detectionColisions();
}

function removeBrick(abrick) {
    abrick.setState(0);
    bricks.splice(bricks.indexOf(abrick), 1);
}

function addSpeedToBall(brick) {
    if (ball.getVitesseX() < 0) { ball.setVitesseX(ball.getVitesseX() - brick.getVitesse()) }
    else if (ball.getVitesseX() > 0) { ball.setVitesseX(ball.getVitesseX() + brick.getVitesse()) };

    if (ball.getVitesseY() < 0) { ball.setVitesseY(ball.getVitesseY() - brick.getVitesse()) }
    else if (ball.getVitesseY() > 0) { ball.setVitesseY(ball.getVitesseY() + brick.getVitesse()) };
}

function detectionColisions() {
    // colisions with walls
    if (ball.getY() + ball.getVitesseY() > canvasHeight - ballRadius || ball.getY() + ball.getVitesseY() < 0 + ballRadius) {
        ball.setVitesseY(-(ball.getVitesseY()));
    }
    else if (ball.getX() + ball.getVitesseX() > canvasWidth - ballRadius || ball.getX() + ball.getVitesseX() < 0 + ballRadius) {
        ball.setVitesseX(-(ball.getVitesseX()));
    }
    // colisions with bottom side (lost a life)
    else if (ball.getY() + ballRadius > paddleY + 20) {
        if (player.getLife() > 1) {
            player.lostALife();
            resetBall();
            resetPaddle();

            $(document).on("keydown", function (event) {
                if (event.which === 32) {
                    ball.setVitesseX(1.5);
                    ball.setVitesseY(-1.5);
                    $(document).off("keydown");
                }
                managePaddle();
            });
        }
        else {
            started = false;
            resultGame = "lose";
        }
    }

    // colisions with bricks
    bricks.forEach(brick => {
        let brickToRemove;
        if ((ball.getX() + ballRadius >= brick.getX())
            && (ball.getX() - ballRadius <= brick.getX() + brickLarg)
            && (ball.getY() + ballRadius >= brick.getY())
            && (ball.getY() - ballRadius <= brick.getY() + brickHaut)) {
            for (let x = 0; x < ball.getMatrix().length; x++) {
                for (let y = 0; y < ball.getMatrix()[x].length; y++) {

                    let leftOfBrick = brick.getX();
                    let rightOfBrick = brick.getX() + brickLarg;
                    let bottomOfBrick = brick.getY() + brickHaut;
                    let topOfBrick = brick.getY();

                    if (ball.getX() + ball.getMatrix()[x][y] <= leftOfBrick) {
                        ball.setVitesseX(Math.abs(ball.getVitesseX()) * -1);
                        brickToRemove = brick;
                    }
                    else if (ball.getX() + ball.getMatrix()[x][y] >= rightOfBrick) {
                        ball.setVitesseX(Math.abs(ball.getVitesseX()));
                        brickToRemove = brick;
                    }
                    else if (ball.getY() + ball.getMatrix()[x][y] <= bottomOfBrick) {
                        ball.setVitesseY(Math.abs(ball.getVitesseY()) * -1);
                        brickToRemove = brick;
                    }
                    else if (ball.getY() + ball.getMatrix()[x][y] >= topOfBrick) {
                        ball.setVitesseY(Math.abs(ball.getVitesseY()));
                        brickToRemove = brick;
                    }

                    if (brick.getColor() == explosionBrick) {
                        explosion(brick.getX() + brickSpace + brick.getLarg(), brick.getY());
                        explosion(brick.getX(), brick.getY() - brickSpace - brick.getHaut());
                        explosion(brick.getX() - brickSpace - brick.getLarg(), brick.getY());
                    }
                }
            }
            player.addToScore(brickToRemove.getPoints());
            addSpeedToBall(brickToRemove);
            removeBrick(brickToRemove);
        }
    });

    // colisions with paddle
    if (ball.getX() + ballRadius > paddle.getX()
        && ball.getX() - ballRadius < paddle.getX() + paddleLarg
        && ball.getY() + ballRadius >= paddle.getY()) {
        ball.setVitesseY(-ball.getVitesseY());
    }
}

function explosion(x, y) {
    bricks.forEach(brick => {
        let abrickToRemove;
        if ((x >= brick.getX())
            && (x <= brick.getX() + brickLarg)
            && (y >= brick.getY())
            && (y <= brick.getY() + brickHaut)) {
            abrickToRemove = brick;
            player.addToScore(abrickToRemove.getPoints());
            addSpeedToBall(abrickToRemove);
            removeBrick(abrickToRemove);
        }
    })
}

function resetPaddle() {
    paddle.setX(paddleX);
    paddle.setY(paddleY);
}

function resetBall() {
    ball.setVitesseX(0);
    ball.setVitesseY(0);
    ball.setX(ballX);
    ball.setY(ballY);
}

function draw() {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    drawScore(player);
    drawBall();
    drawPaddle();
    drawBricks();
    movePaddle();
    moveBall();
    // detection si "game over" ou "win"
    if ((!started && !save) || bricks.length == 0) {
        save = 1;
        if (bricks.length == 0) {
            resultGame = "win";
            $('.displayGame').hide();
            $('.win').show();
            $('.menuElement').hide();
            scorePlayer = player.getScore();
        }
        else {
            saveScores(player.getName(), player.getScore());
        }
        started = 0;
    }
}
