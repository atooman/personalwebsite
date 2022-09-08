document.querySelectorAll('.accordian__button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('accordian__button--active');
    })
}); 

document.querySelectorAll('.accordian__button2').forEach(button2 => {
    button2.addEventListener('click', () => {
        button2.classList.toggle('accordian__button2--active');
    })
}); 

