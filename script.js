console.log("Welcome to Tic Tac Toe")
let music = new Audio("Wallpaper.mp3")
let turnChange = new Audio("Ting.mp3")
let gameover = new Audio("win.mp3")

let turn = "X"
let gameIsOver = false;

//function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//function to check for win
const checkWin = () => {
    let textInBox = document.querySelectorAll('.boxtext');
    let wins = [
        // [0, 1, 2, 12, -15.2, 90],
        // [3, 4, 5, 12, 5.2, 90],
        // [6, 7, 8, 12, 25.6, 90],
        // [0, 3, 6, 1.9, 5.1, 0],
        // [1, 4, 7, 11.9, 5.1, 0],
        // [2, 5, 8, 21.9, 5.1, 0],
        // [0, 4, 8, 12.8, 6.5, 135],
        // [2, 4, 6, 11.9, 4.5, 45]
        [0, 1, 2, 0, 100/6, 270],
        [3, 4, 5, 0, 100/2, 270],
        [6, 7, 8, 0, 500/6, 270],
        [0, 3, 6, 100/6, 0, 0],
        [1, 4, 7, 100/2, 0, 0],
        [2, 5, 8, 500/6, 0, 0],
        [0, 4, 8, 0, 0, -45],
        [2, 4, 6, 100,0 , 45]
    ]
    wins.forEach((e) => {
        // console.log(e[0]);
        if ((textInBox[e[0]].innerText === textInBox[e[1]].innerText) && (textInBox[e[2]].innerText === textInBox[e[1]].innerText) && (textInBox[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = textInBox[e[0]].innerText + " won " ;
            gameIsOver = true
            document.querySelector('.imgbox img').style.width = "200px";
            // document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vh) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.left = `${e[3]}%`;
            document.querySelector(".line").style.top = `${e[4]}%`;
            document.querySelector(".line").style.rotate = `${e[5]}deg`;
            
            if(e[5]== -45 || e[5]== 45){
                document.querySelector(".line").style.height = "424px";
            }
            else{
                document.querySelector(".line").style.height = "300px";

            }
        }
    })

}

//GAME LOGIC
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((InputElement) => {
    let textInBox = InputElement.querySelector('.boxtext');
    InputElement.addEventListener('click', () => {
        if (textInBox.innerText === '') {
            textInBox.innerText = turn;
            turn = changeTurn();
            turnChange.play();
            checkWin();
            if (!gameIsOver) {
                document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
                console.log(turn);
            }

        }
    })
})

//add onclick listner to reset button
reset.addEventListener('click', () => {
    let textInBox = document.querySelectorAll('.boxtext');
    Array.from(textInBox).forEach(element => {
        element.innerText = ""
        document.querySelector('.imgbox img').style.width = "0";
        turn = "X"
        gameIsOver = false
        document.querySelector(".line").style.height = "0vh"
        document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
        document.querySelector(".line").style.width = "0";
    });
})