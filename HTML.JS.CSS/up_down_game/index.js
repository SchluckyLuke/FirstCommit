function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startGame() {
    for (let i = 0; i < 5 ; i++) {

        let obstacle = document.createElement("div");
        obstacle.classList.add("obstacle");

        positionObstacle = Math.round(Math.random());
        if(positionObstacle === 1){
            obstacle.style.top = "200px";
        }
        else{
            obstacle.style.top = "260px";
        }
        document.body.appendChild(obstacle);

        await sleep(1000); // 1 Sekunde warten
    }
}

document.addEventListener("keydown", startGame)