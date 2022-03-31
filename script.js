//select all the button
const button = document.querySelectorAll('button');

//select the display
const display = document.querySelector('.display');

//for calculator function
const calculator = event =>{
  //click button
  const clickButtonValue = event.target.value;
  if(clickButtonValue === '='){
      if(display.value !== ''){
          display.value = eval(display.value);
      }    
  }else if(clickButtonValue == 'AC'){
    display.value = '';
  } else if(clickButtonValue === 'X'){
    display.value = display.value.slice(0, -1)
  }else{
    display.value += clickButtonValue;
  }
}

button.forEach(function(button){
  button.addEventListener('click', calculator);
})
