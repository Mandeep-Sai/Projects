window.addEventListener('DOMContentLoaded', function(){
  let operation = ""
  let previousResult = 0

  const sum = function(a,b){
    return a+b
  }
  const diff =(a,b) => a-b
  const mul =(a,b) => a*b
  const div =(a,b) => a/b
  const power = (a,b) => Math.pow(a,b)
  const sqrt = (a) => Math.sqrt(a)
  const fact = (a) => {
    if(a <=0 || a === 1){
      return 1
    }
    else return(a * fact(a-1))
  }

  const inputDecimal = x => !x.includes('.') ? `${x}.` : `${x}`

  const numericButtons = document.querySelectorAll('.numericButton')
  const functionButtons = document.querySelectorAll('.functionButton')
  const numericButtonPressed = function(event){
    const numPressed = event.target.value
    console.log(event.target.value)
    const result = document.getElementById('result')
    if(result.value === '0'){
      result.value = numPressed
    }else{
    result.value = result.value + numPressed
    }
  }

  const functionButtonPressed = function(event){
    const result = document.getElementById('result')
    const keyPressed = event.target.value
    switch(keyPressed){
      case "=":
        switch(operation){
          case "+":
            result.value = sum(parseFloat(previousResult),parseFloat(result.value))
            break;
          case "-":
            result.value = diff(parseFloat(previousResult),parseFloat(result.value))
            break;
          case "*":
            result.value = mul(parseFloat(previousResult),parseFloat(result.value))
            break;
          case "/":
            result.value = div(parseFloat(previousResult),parseFloat(result.value))
            break;
          case "P":
            result.value = power(parseFloat(previousResult),parseFloat(result.value))
            break;
          case "sqrt":
            result.value = sqrt(parseFloat(result.value))
            break;
          case "n!":
              result.value = fact(parseFloat(result.value))
              break;
          default:
            console.log('Default Case')
        }
        break;
      case "C":
        result.value = '0'
        previousResult = 0
        break;
      case ".":
        result.value = inputDecimal(result.value)
        break;
      default:
        previousResult = parseFloat(result.value)
        operation = keyPressed
        result.value ='0' //Reset to zero after function key is pressed

    }
  }

  for(let button of numericButtons){
    button.addEventListener('click',numericButtonPressed)
  }

  for(let button of functionButtons){
    button.addEventListener('click',functionButtonPressed)
  }
})