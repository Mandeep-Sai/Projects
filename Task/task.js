function addNewTask(){
  let content = document.getElementById('newTask').value
  console.log(content)
  if(content === ''){
    let msg = document.getElementById('message')
    msg.innerText = "Invalid Task!!!"
    msg.style.color = 'red'
    setTimeout(function(){msg.innerText = ''}, 3000)
  }else{
  let newItem = document.createElement('li')
  newItem.innerText = content
  let taskList = document.getElementById('myTaskList')
  console.log(taskList)
  console.log(newItem)
  taskList.appendChild(newItem)
  let msg = document.getElementById('message')
  msg.innerText = "Task Added Sucessfully!!!"
  msg.style.color = 'green'
  setTimeout(function(){msg.innerText = ''}, 3000)
  document.getElementById('newTask').value = ''
  }
}

let removeButton = document.getElementById('rmvFirst')
removeButton.addEventListener('click',removeFirst)
function removeLast(){
  let taskList = document.getElementById('myTaskList')
  taskList.removeChild(taskList.lastElementChild)
}
function removeFirst(){
  let taskList = document.getElementById('myTaskList')
  taskList.removeChild(taskList.firstElementChild)
}
function getTasksArray(){
  let tasksArray = document.querySelectorAll('li')
  let arr = []
  for(i=0;i<tasksArray.length;i++){
    arr[i] = tasksArray[i].innerText
  }
  console.log(arr)
}
function changeTaskBackgroundColor(){
  let clr = document.getElementById('colorPicker').value
  let listItems = document.querySelectorAll('li')
  for(let itm of listItems){
    itm.style.backgroundColor = clr
  }
}
function bubbleSort(){
  let allListItems,switching,shouldSwitch,items
  allListItems = document.getElementById('myTaskList')
  switching = true
  while(switching){
    switching = false
    items = document.getElementsByTagName('li')
    for(i=0;i<items.length;i++){
      shouldSwitch = false
      if(items[i].innerHTML.toLowerCase() > items[i+1].innerHTML.toLowerCase()){
        shouldSwitch = true
        break;
      }
    }
    if(shouldSwitch){
      items[i].parentNode.insertBefore(items[i+1],items[i])
      switching = true
    }
  }
}