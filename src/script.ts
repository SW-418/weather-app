console.log("My name chef")

fetch("http://puzzle.mead.io/puzzle").then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

const weatherForm = document.querySelector('form')
const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')

weatherForm?.addEventListener('submit', (event: SubmitEvent) => {
    event.preventDefault()
    const location = document.querySelector('input')?.value
    fetch(`http://localhost:3000/weather?location=${location}`).then((response) => {
        response.json().then((data) => {
            if(data.error && messageOne && messageTwo) {
                messageOne.textContent = data.error
                messageTwo.textContent = ""
            } else {
                if(messageTwo) {
                    messageTwo.textContent = `Location: ${data.location} Forecast: ${data.forecast}`
                }
            }
            console.log(data)
        })
    })
})