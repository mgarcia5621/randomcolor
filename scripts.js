const colorBtn = document.querySelector('#btn-1')
const boxes = document.querySelectorAll('.box')

let running = false

function getRandomColor () {
    let letters = "0123456789ABDCDEF"
    let color = '#'
    for (let i = 0; i <6; i++) {
        color += letter[Math.floor(Math.random() * 16)]
    }
    return color
}

function start() {
    if(running) {
        boxes.forEach(color => {
            color.style.background = getRandomColor()
        })
        setTimeout(start, 500)
    }
}

colorBtn.addEventListener('click', function(){
    colorBtn.innerText = 'STOP'
})