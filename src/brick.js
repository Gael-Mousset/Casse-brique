class Brick {
    constructor(state, x, y, larg, haut, vitesse, color, points) {
        this.state = state;
        this.x = x;
        this.y = y;
        this.larg = larg;
        this.haut = haut;
        this.vitesse = vitesse;
        this.color = color;
        this.points = points;
    }

    getState() {
        return this.state;
    }

    setState(state) {
        this.state = state;
    }

    getX() {
        return this.x;
    }

    setX(x) {
        this.x = x;
    }

    getY() {
        return this.y;
    }

    setY(y) {
        this.y = y;
    }

    getLarg() {
        return this.larg;
    }

    setLarg(larg) {
        this.larg = larg;
    }

    getHaut() {
        return this.haut;
    }

    setHaut(haut) {
        this.haut = haut;
    }

    getVitesse() {
        return this.vitesse;
    }

    setVitesse(vitesse) {
        this.vitesse = vitesse;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    getPoints() {
        return this.points;
    }

    setPoints(points) {
        this.points = points;
    }

    drawBrick() {
        context.beginPath();
        context.rect(this.x, this.y, this.larg, this.haut);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }
}