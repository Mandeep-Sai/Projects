var appointments =[]



window.onload= function(){
  var numberOfDays = daysInThisMonth()
  var calendar = document.querySelector('#calendar')

  for(let i=0;i<numberOfDays;i++){
    appointments[i] = [] 
    let child = document.createElement('div')
    child.classList.add('day')
    child.onclick = function(event){
      let selected = document.querySelector('.selected')
      if(selected){
        selected.className = selected.className.replace("selected",'')
      }
      event.currentTarget.className += ' selected'
      document.querySelector('#newMeetingDay').innerText = i+1

      let day = parseInt(document.querySelector('#newMeetingDay').innerText)
      let todaysAppointments = appointments[day-1]
      if(todaysAppointments.length>0){
        showAppointments(day)
      }else{
        document.querySelector('#appointments').style.display = 'none'
      }
    }

    let day = document.createElement('h3')
    let dayOfMonth = i+1
    day.innerHTML = dayOfMonth

    child.appendChild(day)
    calendar.appendChild(child)
  }
}
function daysInThisMonth(){
  let now = new Date()
  return new Date(now.getFullYear(),now.getMonth()+1,0).getDate()
}
function addMeeting(){
  let meetingDay = document.querySelector('#newMeetingDay').innerText
  let meetingTime = document.querySelector('#newMeetingTime')
  let meetingName = document.querySelector('#newMeetingName')
  console.log(meetingDay, meetingTime.value, meetingName.value)
  appointments[parseInt(meetingDay) - 1].push(
    meetingTime.value + '-' + meetingName.value
  )
  meetingName.value = ''
  meetingTime.value = ''
  console.log('Appointments', appointments)
  showAppointments(parseInt(meetingDay))

}

function showAppointments(day){
  let todaysAppointments = appointments[day-1]
  document.querySelector('#appointments').style.display = 'block'
  let appointmentList = document.querySelector('#appointmentList')
  appointmentList.innerHTML =''

  for(let i=0;i< todaysAppointments.length;i++){
    let li = document.createElement('li')
    li.innerHTML = todaysAppointments[i]
    appointmentList.appendChild(li)
  }
}