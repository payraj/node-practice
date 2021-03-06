console.log('client side javascript')

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const url = '/weather?address=' + document.querySelector('input').value
    const p1 = document.querySelector('#error')
    const p2 = document.querySelector('#msg')

    p1.textContent = 'Loading...'
    p2.textContent = ''

fetch(url).then((res) => {
    res.json().then((data) => {
        if(data.error) {
            p1.textContent = data.error
        } else {
            console.log(data)
            p2.textContent = 'Location : ' + data.location
            p1.textContent = 'Temperature: ' + data.forecast.temperature
            }
    })
})
})