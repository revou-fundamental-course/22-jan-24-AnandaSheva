let form = document.forms['form-grp'];
let menu = form__input; 
let options = form.form__input.options;
console.log(menu);

options[1].selected = true;


menu.onchange = function(){
    let optionValue = this.value;
    console.log(optionValue);

    let index = this.selectedIndex;
    optionText = this.options[index].innerText;
    console.log(optionText, index);
}





form.onsubmit = function(e){
    e.preventDefault();

    let optionValue = this.form__input.value;
    console.log(optionValue);
}



const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})
