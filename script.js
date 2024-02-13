
// let h = document.querySelector('h1')
// let d = document.querySelector('.container')
// let ctxt = document.querySelector('.context')


// ? ================ MOUSE EVENTS =================

// click, contextmenu, dblclick, mousemove, mousedown, mouseup, mouseenter, mouseleave 

// d.addEventListener('mousemove', (e) => {
//     console.log(e);

//     document.querySelector('.ox')
//     .innerText = e.offsetX
//     document.querySelector('.cx')
//     .innerText = e.clientX
//     document.querySelector('.px')
//     .innerText = e.pageX
//     document.querySelector('.lx')
//     .innerText = e.layerX
//     document.querySelector('.sx')
//     .innerText = e.screenX
//     document.querySelector('.oy')
//     .innerText = e.offsetY
//     document.querySelector('.cy')
//     .innerText = e.clientY
//     document.querySelector('.py')
//     .innerText = e.pageY
//     document.querySelector('.ly')
//     .innerText = e.layerY
//     document.querySelector('.sy')
//     .innerText = e.screenY


//     if (e.offsetX > 300 && e.offsetY > 300) {
//         d.computedStyleMap.backgroundColor = 'red'
//     }else if (e.offsetX < 300 && e.offsetY > 300) {
//         d.computedStyleMap.backgroundColor = 'yellow'
//     }else if (e.offsetX > 300 && e.offsetY < 300) {
//         d.computedStyleMap.backgroundColor = 'green'
//     }else{
//         d.computedStyleMap.backgroundColor = 'black'
//     }
// })

// d.addEventListener('contextmenu', (e) => {
//     e.preventDefault()
//     console.log(e);
//     ctxt.style.top = e.clientY + 'px'
//     ctxt.style.left = e.clientX + 'px'
//     ctxt.style.display = 'block'
// })


// ? ================ Vazifa ================

let b = document.querySelector('.vazifa')

b.addEventListener('mouseup', (e)=>{

    if (e.offsetX > 150) {
        document.querySelector('b').classList.add('.ung')
    }else{
        document.querySelector('b').classList.add('.chap')
    }
})