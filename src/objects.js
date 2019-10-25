class Atom {

    constructor({
        randomRate,
        color
    }) {
        this.position = [Math.random() * WIDTH, Math.random() * HEIGHT]
        this.radius = radius;
        this.randomRate = randomRate;
        this.color = color;
    }

    move = () => {
        this.position[0] += random(this.randomRate) - this.randomRate / 2; // ramdom value between -(randomRate/2) and +(randomRate/2)
        this.position[1] += random(this.randomRate) - this.randomRate / 2;

        if (this.position[0] - this.radius / 2 > WIDTH) this.position[0] = -this.radius // avoid getting out of canvas
        if (this.position[1] - this.radius / 2 > HEIGHT) this.position[1] = -this.radius;
    }

    create = () => {
        this.move();
        fill(this.color);
        noStroke();
        circle(this.position[0], this.position[1], this.radius);
    }


    // 1 ) CREATE COLLISION CHECK FUNCTION

    collisionCheck = atoms => {
        atoms.forEach((atom, i) => {
            if (this === atom) return;
            let dist = distance(this, atom)
            if (dist <= detectionDistance) this.detect(atom, dist);
            if (dist <= this.radius) this.eat(atoms, i)
        })
    }


    // 3 ) CREATE DETECT FUNCTION

    detect = atom => {
        stroke("magenta")
        strokeWeight(2)
        line(this.position[0], this.position[1], atom.position[0], atom.position[1])
        atom.color = this.color
    }


    // 4 ) CREATE EAT FUNCTION

    eat = (atoms, i) => {
        atoms.splice(i, 1)
    }


}