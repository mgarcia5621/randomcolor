const colorBtn = document.querySelector('#btn-1')
const boxContainer = document.querySelector('.box-container')
const boxes = document.querySelectorAll('.box')

let running = false

function getRandomColor() {
    let letters = "0123456789ABDCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function start() {
    if(running) {
<<<<<<< HEAD
        boxes.forEach(color => {
            color.style.background = getRandomColor()
        })
        setTimeout(start, 300)
=======
        const newBox = document.createElement("div")
        newBox.classList = "box"
        newBox.style.background = getRandomColor()
        boxContainer.appendChild(newBox)

        setTimeout(start, 500)
>>>>>>> 577ef043eba447142e7758c6b3f20dc79a6f1802
    }
}

colorBtn.addEventListener('click', function(){
    colorBtn.innerText = 'STOP'
    if(running) {
        running = false
        colorBtn.innerText = 'CHANGE COLOR'
    } else {
        running = true
        start()
    }
})