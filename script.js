const allCircles = document.querySelector('.circleGroup')

function click (event) {

    let currentColorData = event.target.getAttribute('data-color')
    document.body.style.backgroundColor = currentColorData
}
allCircles.addEventListener('click', click)

function doubleClick (event) {

    let currentColorData = event.target.getAttribute('data-color')
    document.body.style.backgroundColor = 'white'
}
allCircles.addEventListener('dblclick', doubleClick)

window.addEventListener('click', (event) => {
    
    if(event.target.contains(allCircles)) {
        document.body.style.backgroundColor = 'white'
    }
})