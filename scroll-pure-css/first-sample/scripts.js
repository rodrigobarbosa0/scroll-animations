
const myObserver = new IntersectionObserver ((entries) => {
    entries.forEach ( (entry) => {
        if(entry.intersecting){
            entry.target.classList.add('show')
        }
        else {
            entry.target.classList.remove('show')
        }
    } )
})

const elements = document.querySelectorAll ('.hidden')

elements.forEach( (elements) => myObserver.observe(element))

