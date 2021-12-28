const weatherForm = document.querySelector('form')
const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')

weatherForm?.addEventListener('submit', (event: SubmitEvent) => {
    event.preventDefault()
    const location = document.querySelector('input')?.value
    fetch(`/weather?location=${location}`).then((response) => {
        response.json().then((data) => {
            console.log(data)
            if(data.error && messageOne && messageTwo) {
                messageOne.textContent = data.error
                messageTwo.textContent = ""
            } else {
                if(messageOne && messageTwo) {
                    messageOne.textContent = `${data.location}, ${data.country}`
                    messageTwo.textContent = `It is currently ${data.forecast}, with a current temperature of ${data.temperature} (but it feels like ${data.temperatureFeelsLike}). Current wind speed is ${data.windSpeed}`
                }
            }
            console.log(data)
        })
    })
})
