// var imgs = document.getElementById('img');
// var test = imgs.getAttribute('src');
// console.log(test);
    
var button = document.querySelector('#yes');

button.addEventListener('click', el => {
    el = el.target;
    var test = document.querySelectorAll(".card");
    test.forEach(element => {
        if(element.classList.contains('jordan')){
            element.classList.toggle('none');
        }
    });
    
})

var essai = document.querySelector('#range');
var button2 = document.querySelector('#no');
var value = document.querySelector('#value');
var price = document.querySelectorAll('.price');

essai.addEventListener('input', (el) =>{
    el = el.target;
    var value = document.querySelector('#value');
    value.innerHTML = el.value;
})

button2.addEventListener('click', () =>{
    var increment = -1;
    price.forEach(element => {
        increment ++;
        if(element.innerHTML > value.innerHTML){
            document.querySelectorAll('.card')[increment].classList.add('none');
        }
        if(element.innerHTML < value.innerHTML){
            document.querySelectorAll('.card')[increment].classList.remove('none');
        }
    });

})

var sub = document.querySelector('.subimg').addEventListener('mouseover', (el) =>{
    el =el.target;
    
    console.log(document.querySelector('.img').src);
})

// ajouter tri 