let boxes = document.querySelectorAll(".box");
let BtnRes = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-Btn");
let msg = document.querySelector("#msg");
let containerMsg = document.querySelector(".msg-container");

let music1 = new Audio("music.mp3");
let gameTurn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");





let turn0 = true  //player1 player2

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


const boxDisable = () => {
    for (let box of boxes) {
        box.disabled = true;
    }

};

const boxEnable = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "X";
            music1.pause()
            gameTurn.play();
            turn0 = false;
        }
        else {
            music1.pause()
            gameTurn.play();
            box.innerText = "0";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
})


const checkWinner = () => {

    for (let pattern of winPatterns) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {

            if (pos1Val == pos2Val && pos2Val == pos3Val) {
                console.log(`Winner is ${pos1Val}`)

                showWinner(pos1Val);
            }


        }

    }

}



const showWinner = (winner) => {

    msg.innerText = "Congratulations , Winner is " + winner;
    containerMsg.classList.remove("hide");
    boxDisable();
    gameOver.play();


}


const resetGame = () => {
    music1.play()

    turn0 = true;
    boxEnable();
    containerMsg.classList.add("hide");

}


newGame.addEventListener("click", resetGame);
BtnRes.addEventListener("click", resetGame);

