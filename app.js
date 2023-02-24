const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

let futureDate = new Date(2023,6,17,0,0)

  const years = futureDate.getFullYear()
  const hours = futureDate.getHours()
  const minutes = futureDate.getMinutes()
  const month = months[futureDate.getMonth()]
  const date = futureDate.getDate()
  const weekday =  weekdays[futureDate.getDay()]
/*Current Date */
const realTime = () => {
  
  
  const currentTime = new Date()
  const currentHour = currentTime.getHours()
  const currentMinute = currentTime.getMinutes()
  const currentSecond = currentTime.getSeconds()
  
  document.getElementById('hour').textContent = currentHour
  document.getElementById('minutes').textContent = currentMinute
  document.getElementById('second').textContent = currentSecond
}

setInterval(()=>{
  realTime()
},1000)
  




  giveaway.textContent = `Birthday Starts on ${weekday} ${date} ${month} ${years} 0${hours}:0${minutes}am`


  const futureTime = futureDate.getTime()
  // console.log(futureTime)

  const getRemainingTime = () => {
    const today = new Date().getTime()
    // console.log( today )
    const t = futureDate - today
    // console.log(t)

    const oneDay = 24*60*60*1000 
    const oneHour = 60*60*1000
    const oneMinute = 60*1000

    let day = Math.floor(t/oneDay)
    let hour = Math.floor((t%oneDay)/oneHour)
    let minutes = Math.floor((t%oneHour)/oneMinute)
    let second  = Math.floor((t%oneMinute)/1000)

    
    // console.log(items)
    const value = [day,hour,minutes,second]
    items.forEach((item, index) => {
      item.innerHTML = value[index]
    })
    if(t<0){
      clearInterval(counter)
      deadline.innerHTML = `<h4 class"expired">Birthday is Started</h4>`
    }
    
  }


 const counter =   setInterval(getRemainingTime,1000)

getRemainingTime()

