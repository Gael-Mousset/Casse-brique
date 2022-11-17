class Paddle {
    constructor(x, y, larg, haut, vitesse, color) {
        this.x = x;
        this.y = y;
        this.larg = larg;
        this.haut = haut;
        this.vitesse = vitesse;
        this.color = color;
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

}