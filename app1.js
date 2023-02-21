const btn1 = document.querySelector("#btn1");
const score1 = document.querySelector("#score1");
const btn2 = document.querySelector("#btn2");
const score2 = document.querySelector("#score2");
const rest = document.querySelector("#reset");
const winScore = document.querySelector("#win-score");
const score = { value: "3" };

function reset() {
    score1.innerText = "0";
    score2.innerText = "0";
    score1.style.color = "black";
    score2.style.color = "black";
    btn1.removeAttribute("disabled");
    btn2.removeAttribute("disabled");
    btn1.style.opacity = "1";
    btn2.style.opacity = "1";
    score.value = winScore.value;
}

winScore.addEventListener("change", reset);

btn1.addEventListener("click", function () {
    score1.innerText = parseInt(score1.innerText) + 1;
    if (score1.innerText === score.value) {
        score1.style.color = "#48c774";
        score2.style.color = "#f14668";
        btn1.disabled = true;
        btn2.disabled = true;
        btn1.style.opacity = ".5";
        btn2.style.opacity = ".5";
    }
});

btn2.addEventListener("click", function () {
    score2.innerText = parseInt(score2.innerText) + 1;
    if (score2.innerText === score.value) {
        score1.style.color = "#48c774";
        score2.style.color = "#f14668";
        btn1.disabled = true;
        btn2.disabled = true;
        btn1.style.opacity = ".5";
        btn2.style.opacity = ".5";
    }
});

rest.addEventListener("click", reset);


// first attempt code
// const btn1 = document.querySelector("#btn1");
// const score1 = document.querySelector("#score1");
// const btn2 = document.querySelector("#btn2");
// const score2 = document.querySelector("#score2");
// const rest = document.querySelector("#reset");
// const winScore = document.querySelector("#win-score");
// var score = { value: "3" };

// winScore.addEventListener("change", function () {
//     score1.innerText = "0";
//     score2.innerText = "0";
//     score1.style.color = "black";
//     score2.style.color = "black";
//     btn1.removeAttribute("disabled", "disabled");
//     btn2.removeAttribute("disabled", "disabled");
//     btn1.style.opacity = "1";
//     btn2.style.opacity = "1";
//     score.value = winScore.value;
// })

// btn1.addEventListener("click", function () {
//     score1.innerText = parseInt(score1.innerText) + 1;
//     if (score1.innerText === score.value) {
//         score1.style.color = "#48c774";
//         score2.style.color = "#f14668";
//         btn1.setAttribute("disabled", "disabled");
//         btn2.setAttribute("disabled", "disabled");
//         btn1.style.opacity = ".5";
//         btn2.style.opacity = ".5";

//     }
// })

// btn2.addEventListener("click", function () {
//     score2.innerText = parseInt(score2.innerText) + 1;
//     if (score2.innerText === score.value) {
//         score1.style.color = "#48c774";
//         score2.style.color = "#f14668";
//         btn1.setAttribute("disabled", "disabled");
//         btn2.setAttribute("disabled", "disabled");
//         btn1.style.opacity = ".5";
//         btn2.style.opacity = ".5";

//     }
// })

// rest.addEventListener("click", function () {
//     score1.innerText = "0";
//     score2.innerText = "0";
//     score1.style.color = "black";
//     score2.style.color = "black";
//     btn1.removeAttribute("disabled", "disabled");
//     btn2.removeAttribute("disabled", "disabled");
//     btn1.style.opacity = "1";
//     btn2.style.opacity = "1";
// })