let canvas;
let context;
let started = false;
let save = 0;
let resultGame;
let scorePlayer = 0;

let paddle;
let player;
let ball;
let interval;

let urlGET = "http://localhost:3000/bestPlayers/";
let nb = 5;
let urlPOST = "http://localhost:3000/"
let newScore;

let canvasHeight;
let canvasWidth;

function loadLife() {
    $('#life1').attr('src', './img/life.png');
    $('#life2').attr('src', './img/life.png');
    $('#life3').attr('src', './img/life.png');
}

function managePaddle() {
    $(document).keydown(function (event) {
        if (event.which === 39) {
            paddle.setVitesse(4)
        }
        else if (event.which === 37) {
            paddle.setVitesse(-4)
        }
    });
    $(document).keyup(function (event) {
        if (event.which === 39) {
            paddle.setVitesse(0)
        }
        else if (event.which === 37) {
            paddle.setVitesse(0)
        }
    });
}

function buildGame() {
    save = 0;
    started = true;
    numberExplosionBrick = 3;
    delete ball;
    clearInterval(interval);
    loadLife();
    buildBricks();
    buildPaddle();
    buildBall();
    player.setLife(3);
}

function getRankingScore(nb) {
    fetch(urlGET + nb).then((res) => {
        if (res.ok) {
            return res.json();
        }
    }).then((value) => {
        // vider les listes
        $('.rankingScores').html('');
        $('.rankingPlayers').html('');

        // ajouter les 5 premiers scores
        $('.rankingScores').append('<li id="s1">' + value[0].score + '</li>');
        $('.rankingScores').append('<li id="s2">' + value[1].score + '</li>');
        $('.rankingScores').append('<li id="s3">' + value[2].score + '</li>');
        $('.rankingScores').append('<li id="s4">' + value[3].score + '</li>');
        $('.rankingScores').append('<li id="s5">' + value[4].score + '</li>');

        // ajouter les 5 premiers joueurs
        $('.rankingPlayers').append('<li id="p1">' + value[0].nom + '</li>');
        $('.rankingPlayers').append('<li id="p2">' + value[1].nom + '</li>');
        $('.rankingPlayers').append('<li id="p3">' + value[2].nom + '</li>');
        $('.rankingPlayers').append('<li id="p4">' + value[3].nom + '</li>');
        $('.rankingPlayers').append('<li id="p5">' + value[4].nom + '</li>');
    }).catch((err) => {
        console.error(err);
    })
}

function saveScores(name, score) {
    $.post('http://localhost:3000/newScore',
        { "nom": name, "score": score },
        function () {
            clearInterval(interval);
            $('.displayGame').hide();
            $('.gameOver').show();
            $('.menuElement').hide();
            scorePlayer = 0;
        }
    ).done(console.log('Request done!')).fail(console.log('failed, ' + ex));
}

$(document).ready(function () {
    canvas = document.getElementById('drawArea');
    context = canvas.getContext('2d');
    context.lineWidth = 1;
    context.strokeStyle = "#871de0";
    canvasHeight = canvas.height;
    canvasWidth = canvas.width;

    // Démarrer une partie, click sur le bouton "Jouer"
    $('#playButton').on("click", function play() {
        $('.menuElement').hide();
        $('.input_name_player').css("display", "flex");

        // Lancer la partie, click sur le bouton "Lancer la partie"
        $('#startButton').on("click", function () {
            if ($('#name_text').val() != "") {
                $('.input_name_player').hide();
                $('.displayGame').css("display", "flex");
                canvas.removeAttribute("hidden");

                createPlayer($('#name_text').val(), scorePlayer);
                getRankingScore(nb);
                buildGame();
                interval = setInterval(draw, 10);
                //managePaddle();

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
                console.log("Aucun nom saisi !!");
            }
        })
    })

    // Rejouer depuis un GameOver
    $('#replayButton').on("click", function () {
        resetBall();
        clearInterval(interval);
        $('#startButton').click();
        $('.gameOver').hide();
    })

    // Rejouer depuis une Victoire
    $('#replayButtonWin').on("click", function () {
        resetBall();
        clearInterval(interval);
        $('#startButton').click();
        $('.win').hide();
    })

    // Consulter le classement
    $('#rankButton').on("click", function () {
        getRankingScore(nb);
        $('.menuElement').hide();
        $('.ranking').show();
    })

    // Retourner au menu depuis le classement
    $('#returnButton').on("click", function () {
        $('.menuElement').show();
        $('.ranking').hide();
    })

    // Retourner au menu depuis l'ecran de gameOver
    $('#menuButton').on("click", function () {
        $('#name_text').val('');
        clearInterval(interval);
        $('.menuElement').show();
        $('.gameOver').css("display", "none");
    })
});