import {player} from './player.js';
import { gameData, displayData, saveGameDataToLocalStorage} from './game-data.js';
import {Coin} from './coin.js';
const coin1 = new Coin(200, 200);
coin1.display();
function gameLoop() {
    player.x = gameData.x;
    player.y = gameData.y;

    if (player.x === coin1.x && player.y === coin1.y) {
        gameData.inventory.push('coin');
        gameData.money += 100;
        coin1.x = Math.random() * window.innerWidth;
        const remainderx = coin1.x % 10;
        coin1.x -= remainderx;
        coin1.y = Math.random() * window.innerHeight;
        const remaindery = coin1.y % 10;
        coin1.y -= remaindery;
        coin1.display();
        saveGameDataToLocalStorage();
    }


    player.display();
    displayData();
    requestAnimationFrame(gameLoop);
}

gameLoop();