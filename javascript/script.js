const value = document.getElementById('value'),
plusButton = document.getElementById('plus'),
minusButton = document.getElementById('minus'),
resetButton = document.getElementById('reset'); 

const updateValue = () => {
    value.innerHTML = count;
}

let count = 0;
let intervalId = 0;

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




