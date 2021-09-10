var button = document.querySelector('#yes');

// toggle de catégorie
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

// valeur de la jauge
essai.addEventListener('input', (el) =>{
    el = el.target;
    var value = document.querySelector('#value');
    value.innerHTML = el.value;
})

// validation de la jauge
button2.addEventListener('click', () =>{
    var increment = -1;
    price.forEach(element => {
        increment ++;
        if(element.innerHTML > value.innerHTML){
            document.querySelectorAll('.card')[increment].classList.add('none');
        }
        if(element.innerHTML <= value.innerHTML){
            document.querySelectorAll('.card')[increment].classList.remove('none');
        }
    });

})

// changement image en mouseover
var sub = document.querySelector('.subimg').addEventListener('mouseover', (el) =>{
    el =el.target;
    var img1 = document.querySelector('#img');
    var imgAttribute = el.getAttribute('src');
    img1.setAttribute('src', imgAttribute);
})

// ajouter tri 