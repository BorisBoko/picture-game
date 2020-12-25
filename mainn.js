let main = document.querySelector('.main');

let picsUrl = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
]
let shuffledd = []
let clickPics = []
let checkSrc = []


function randomMy() {
    shuffledd = picsUrl
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)

}
randomMy()

let playfield = [
    shuffledd[0], shuffledd[1], shuffledd[2],
    shuffledd[3], shuffledd[4], shuffledd[5],
    shuffledd[6], shuffledd[7], shuffledd[8]
];
// drow UI
function draw(playfield) {
    let sum = -1
    let mainInnerHTML = '';
    for (let y = 0; y < playfield.length; y++) {
        sum++
        mainInnerHTML += `<img src="${playfield[sum]}" alt="">`;
    }
    main.innerHTML = mainInnerHTML;
};
draw(playfield);

const onclick = function(event) {
    const click = event.target.attributes.src.nodeValue


    if (check(click)) {
        draw(playfield)
    }
}

//Event in click
main.addEventListener('click', onclick)

//check secound click is Empty place
function check(click) {
    clickPics.push(click)
    checkSrc = Array.from(new Set(clickPics))

    if (checkSrc.length === 2 || checkSrc[0] === "9.jpg") {
        clickPics = []
    }

    let first = playfield.indexOf(checkSrc[0])
    let secound = playfield.indexOf(checkSrc[1])

    if ((checkSrc[1] === "9.jpg")) {
        if (checkNear(first, secound)) {
            playfield[secound] = playfield[first]
            playfield[first] = "9.jpg"
            return true
        }

    }
}
//check first click is near secoud click
function checkNear(first, secound) {

    if (first - secound === 1 || first - secound === -1 || first - secound === -3 || first - secound === 3) {
        if (first === 5 && secound === 6) { return false }
        if (first === 6 && secound === 5) { return false }
        if (first === 2 && secound === 3) { return false }
        if (first === 3 && secound === 2) { return false }

        return true
    }
}