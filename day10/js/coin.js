export class Coin{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.element = document.createElement('div');
        this.element.style.width = '50px';
        this.element.style.height = '50px';
        this.element.style.backgroundColor = 'yellow';
        this.element.style.position = 'absolute';
        document.body.append(this.element);
        this.element.style.borderRadius = '50%';
    }

    display(){
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
    }
}