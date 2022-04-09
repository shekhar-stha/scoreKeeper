const pButton1 = document.querySelector('#player1');
const pButton2 = document.querySelector('#player2');
const resetButton = document.querySelector('#reset');

const p1point = document.querySelector('#point1');
const p2point = document.querySelector('#point2');

const selected = document.querySelector("#playTo");


let p1Score = 0;
let p2Score = 0;
let winningScore = 1;
let isGameOver = false;

pButton1.addEventListener("click", () => {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1point.style.color = 'green';
            p2point.style.color = 'red';
        }
        p1point.innerHTML = p1Score;
    }
})

pButton2.addEventListener("click", () => {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2point.style.color = 'green';
            p2point.style.color = 'red';
        }
        p2point.innerHTML = p2Score;
    }
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1point.innerHTML = "0";
    p2point.innerHTML = "0";
    p1point.style.color = 'black';
    p2point.style.color = 'black';

}

selected.addEventListener('change', () => {
    winningScore = parseInt(selected.value);
     reset();
     //reset le chai auta game sakesi arko game ko lagi points change garda afai new game lagaucha

})

function sum (...nums){
    total = 0;
    for(let n of nums){
        total+=n;
        return total;
    }
    console.log(total)
}

