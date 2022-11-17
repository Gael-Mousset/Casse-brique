class Ball{
    constructor(x, y, radius, angle, vitesseX, vitesseY, color, matrix) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.angle = angle;
        this.vitesseX = vitesseX;
        this.vitesseY = vitesseY;
        this.color = color;
        this.matrix = matrix;
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

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }
    getAngle() {
        return this.angle;
    }

    setAngle(angle) {
        this.angle = angle;
    }

    getVitesseX() {
        return this.vitesseX;
    }

    setVitesseX(vitesseX) {
        this.vitesseX = vitesseX;
    }

    getVitesseY() {
        return this.vitesseY;
    }

    setVitesseY(vitesseY) {
        this.vitesseY = vitesseY;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    getMatrix() {
        return this.matrix;
    }

    setMatrix(matrix) {
        this.matrix = matrix;
    }
}