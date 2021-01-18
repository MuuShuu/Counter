const span = document.getElementById('number')
const plusOne = document.getElementById('plus');
plusOne.addEventListener('click', function(){
    const number = Number(span.innerHTML)
    const newNumber = number + 1;
    span.innerHTML = newNumber;
})

const minusOne = document.getElementById('minus');
minusOne.addEventListener('click', function() {
    const number = Number(span.innerHTML)
    const newNumber = number - 1;
    span.innerHTML = newNumber;

})
