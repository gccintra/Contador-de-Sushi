const value = document.getElementById('value'),
plusButton = document.getElementById('plus'),
minusButton = document.getElementById('minus'),
resetButton = document.getElementById('reset'); 

localStorage.setItem('value', value.value);
var count = parseInt(localStorage.getItem('value'));
value.innerText = count;

// var count = 0;
// if (localStorage.value != 0){
//     var count = parseInt(localStorage.getItem('value'));
//     value.innerText = count;
// }else{
//     value.innerText = 0;
//     count = 0
//}

   

const updateValue = () => {
    value.innerHTML = count;
    localStorage.removeItem('value');
    localStorage.setItem('value', count);

}



//Click do mouse
plusButton.addEventListener('click', () =>{
        if(count != NaN){
            count += 1;
            updateValue();  
        }else{
            count = 1;
        }

});

minusButton.addEventListener('click', () =>{
    count -= 1;
    updateValue();
});

resetButton.addEventListener('click', () => {
    count = 0
    updateValue();
})


