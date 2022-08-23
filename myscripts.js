document.querySelectorAll('.accordian__button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('accordian__button--active');
    })
}); 