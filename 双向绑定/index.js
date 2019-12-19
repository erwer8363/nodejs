const data = {
    text:'default'
}

const input = document.getElementById('input')
const span = document.getElementById('span')

Object.defineProperty(data, 'text',{
    set(newValue){
        input.value = newValue
        span.innerHTML = newValue
    }
})

input.addEventListener('keyup', function(e){
    data.text = e.target.value
})