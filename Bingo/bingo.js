window.onload = function(){
  let fullBoard = document.querySelector('#board')
  let maxValue = 76
  for(let i=0;i<maxValue;i++){
  let number = document.createElement('div')
  number.classList.add('numbers')
  number.innerText = i+1
  fullBoard.appendChild(number)
  }
}
function generateNumber(){
  let num = document.querySelector('#buttonRand')
  let rand = (Math.floor(Math.random()*76))+1
  num.value = rand
  let fullBoard = document.querySelectorAll('.numbers')
  for(let i=0;i<fullBoard.length;i++){
    if(fullBoard[i].innerText == rand){
      fullBoard[i].style.color = 'rgb(233, 86, 27)'
    }
  }
  let userNumbers = document.querySelectorAll('.board')
  for(let k=0;k<userNumbers.length;k++){
    if (userNumbers[k].innerText == rand){
      userNumbers[k].style.color = 'rgb(27, 192, 233)'
    }
  }
}
let btn = document.querySelector('#createBoardButton')
function createBoard(){
  let req = document.querySelector('#boardsValue').value
  let allBoards = document.querySelector('#userBoards')
  for(let i=0;i<req;i++){
      let newBoard = document.createElement('div')
      newBoard.classList.add('boardNumber')
      newBoard.innerText = ''
      allBoards.appendChild(newBoard)
      for(let j=0;j<24;j++){
        let board = document.createElement('div')
        board.classList.add('board')
        board.innerText = (Math.floor(Math.random()*76))+1
        newBoard.appendChild(board)
      }
      allBoards.appendChild(document.createElement('br'))
  }
  document.querySelector('#boardsValue').value = ''
}
btn.addEventListener('click',createBoard)
