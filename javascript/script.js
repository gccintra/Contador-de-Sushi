const value = document.getElementById('value'),
plusButton = document.getElementById('plus'),
minusButton = document.getElementById('minus'),
resetButton = document.getElementById('reset'); 


var count = parseInt(localStorage.getItem('value'));
value.innerHTML = count;
   

const updateValue = () => {
    value.innerHTML = count;
    localStorage.removeItem('value');
    localStorage.setItem('value', count);

}



//Click do mouse
plusButton.addEventListener('click', () =>{
    count += 1;
    updateValue();
});

minusButton.addEventListener('click', () =>{
    count -= 1;
    updateValue();
});

resetButton.addEventListener('click', () => {
    count = 0
    updateValue();
})


