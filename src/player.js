class Player {
    constructor(name, life, score) {
        this.name = name;
        this.life = life;
        this.score = score;
    }

    getName() {
        return this.name;
    }

    getLife() {
        return this.life;
    }

    getScore() {
        return this.score;
    }

    setScore(score) {
        this.score = score;
    }

    setLife(life) {
        this.life = life;
    }

    setName(name) {
        this.name = name;
    }

    addToScore(points) {
        this.score += points;
    }

    lostALife() {
        switch (this.getLife()) {
            case 1: $('#life1').attr('src', './img/life_lost.png');
                this.setLife(0)
                break;
            case 2: $('#life2').attr('src', './img/life_lost.png');
                this.setLife(1)
                break;
            case 3: $('#life3').attr('src', './img/life_lost.png');
                this.setLife(2)
                break;
        }
    }
}