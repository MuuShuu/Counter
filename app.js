const plusOne = document.getElementById('plus');
plusOne.addEventListener('click', function(){
    const number = Number(document.getElementById('number').innerHTML)
    const newNumber = number + 1;
    document.getElementById('number').innerHTML = newNumber;
})

const minusOne = document.getElementById('minus');
minusOne.addEventListener('click', function() {
    const number = Number(document.getElementById('number').innerHTML)
    const newNumber = number - 1;
    document.getElementById('number').innerHTML = newNumber;

})