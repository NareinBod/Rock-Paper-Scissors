//Button logic for changing the background color.
let button = document.querySelector("#Color");
let body = document.querySelector("body");
let mode = "light";

button.addEventListener("click", () => {
    if (mode === "light") {
        mode = "dark";
        body.classList.remove("light");
        body.classList.add("dark");
    } else {
        mode = "light";
        body.classList.remove("dark");
        body.classList.add("light");
    }
});

//---------------------------------------------------------------------------
let user_score = 0;
let comp_score = 0;
let msg = document.querySelector("#msg");
let user_points = document.querySelector("#user-score");
let comp_points = document.querySelector("#comp-score");
const symbols = document.querySelectorAll(".symbols");

const generateRandom = () => {
    let values = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    return values[choice];
};

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "DRAW!";
    msg.style.backgroundColor = "black";
};

const showWinner = (userWin) => {
    if (userWin === true) {
        console.log("You win!");
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "Green";
        user_score++;
        user_points.innerText = user_score;
    } else {
        console.log("You Lose!");
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "Red";
        comp_score++;
        comp_points.innerText = comp_score;
    }
};

const playGame = (user_choice) => {
    console.log("user choice = ", user_choice);
    const compChoice = generateRandom();
    console.log("comp choice = ", compChoice);

    if (user_choice === compChoice) {
        drawGame();
    } else {
        let userWin;
        if (user_choice === "rock") {
            userWin = compChoice === "scissors";
        } else if (user_choice === "paper") {
            userWin = compChoice === "rock";
        } else {
            userWin = compChoice === "paper";
        }
        showWinner(userWin);
    }
};

symbols.forEach(symbol => {
    console.log(symbol);
    symbol.addEventListener("click", () => {
        const user_choice = symbol.getAttribute("id");
        playGame(user_choice);
    });
});