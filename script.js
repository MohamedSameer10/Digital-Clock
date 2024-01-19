const hoursElement = document.querySelector('.hours')
const minutesElement = document.querySelector('.minutes')
const secondsElement = document.querySelector('.seconds')
const timePeriod = document.querySelector('.time')

window.setInterval(() => {
    const date = new Date()
    let hours = date.getHours()
    hours = hours>12?hours - 12:hours
    hoursElement.textContent = zero(hours)
    let minutes = zero(date.getMinutes())
    let seconds = zero(date.getSeconds())
    minutesElement.textContent = minutes
    secondsElement.textContent = seconds
    timePeriod.textContent = date.getHours()<12?"AM":"PM"
}, 1000)

function zero(num){
    let time =  num<10?"0"+num:num
    return time
}