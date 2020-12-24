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
function randomMy() {
     shuffledd = picsUrl
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
   
}
randomMy()

let playfield = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];


function draw() {
    let sum = -1
    let mainInnerHTML = '';
    for (let y = 0; y < playfield.length; y++) {
        for (let x = 0; x < playfield[y].length; x++) {
                 sum++
                mainInnerHTML += `<img src="${shuffledd[sum]}" alt="">`;
        }
    }

    main.innerHTML = mainInnerHTML;
};

 draw();
 let a = []
const onclick =  function (event){
   
    const click = event.target.attributes.src.nodeValue
    a.push(click)
    console.log(shuffledd)

    console.log(a)
    draw();

}

main.addEventListener('click',onclick)
