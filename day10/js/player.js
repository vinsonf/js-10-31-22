class Player {
    constructor(x, y) {
        this.element = document.createElement('div');
        this.element.style.width = '50px';
        this.element.style.height = '50px';
        this.element.style.backgroundColor = 'brown';
        this.x = x;
        this.y = y;
        document.body.append(this.element);
        this.element.style.position = 'absolute';
    }
    display() {
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
    }
}

export const player = new Player(0, 0);

player.display();