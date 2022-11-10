// console.log(Math.random());

// let randomNumber = Math.random() * 20
// console.log(randomNumber)


// let randomNumber = Math.floor(Math.random () * 20)
// console.log(randomNumber);

// console.log(Math.floor(44.8));


// let randomNumber = Math.ceil(Math.random () * 20)
// console.log(randomNumber);


// let randomNumber = Math.ceil(67.01)
// console.log(randomNumber);







// let randomNumber = Math.floor(Math.random() * 6);
// let colors = ['pink', 'red', 'blue', 'green', 'purple', 'yellow']

// console.log(colors[randomNumber]);


// console.log(randomNumber);


// let btn = document.querySelector("button")

// btn.addEventListener('click', ()=>{
//     document.body.style.backgroundColor = 'pink'
// })








let btn = document.querySelector("button");
let ovie = document.querySelector(".ovie");

btn.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 6);
    console.log(randomNumber);

    let colors = ['pink', 'red', 'blue', 'green', 'purple', 'yellow'];
    document.body.style.backgroundColor = colors[randomNumber];
    ovie.textContent = `color set to ${colors[randomNumber]}`;
});

