document.querySelectorAll('.color').forEach(item => {
    item.addEventListener('click', event => {
        document.body.style.backgroundColor = event.target.style.backgroundColor;
    });
});
